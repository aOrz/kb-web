const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const config = require('../src/lib/config');

function calendar(now) {
  const NativeDate = Date;
  class FixedDate extends NativeDate {
    constructor(...args) { super(...(args.length ? args : [now])); }
  }
  const context = { module: { exports: {} }, require: () => config, Date: FixedDate };
  vm.runInNewContext(fs.readFileSync(require.resolve('../src/lib/utils'), 'utf8'), context);
  return context.module.exports;
}

test('February has 29 days in leap years and 28 otherwise', () => {
  assert.equal(calendar('2024-01-01T12:00:00').getAllMonth()[1], 29);
  assert.equal(calendar('2025-01-01T12:00:00').getAllMonth()[1], 28);
});
test('Sunday-first calendar starts on Sunday without an extra blank week', () => {
  const days = calendar('2026-01-01').getCurrentMonthTableData(new Date(2026, 1, 1));
  assert.equal(days[0].getDate(), 1);
  assert.equal(days.length % 7, 0);
});
test('six-row months have complete final weeks and every date', () => {
  const days = calendar('2026-01-01').getCurrentMonthTableData(new Date(2026, 4, 1));
  assert.equal(days.length, 42);
  assert.equal(days.filter(Boolean).length, 31);
  assert.equal(days[5].getDate(), 1);
});
test('incomplete-month mode returns a grid and blanks past dates', () => {
  const days = calendar('2026-05-15T12:00:00').getCurrentMonthTableData(new Date(2026, 4, 1), false);
  assert.equal(days.length, 42);
  assert.equal(days.filter(Boolean).length, 17);
  assert.equal(days[19].getDate(), 15);
});
test('month cutoff includes current month and rolls over the year', () => {
  const utils = calendar('2026-10-31T12:00:00');
  assert.equal(utils.dateFormat('yyyy-MM-dd', utils.handleLastDay('8m')), '2027-05-31');
  assert.equal(utils.dateFormat('yyyy-MM-dd', utils.handleLastDay('1m')), '2026-10-31');
  const leap = calendar('2023-12-31T12:00:00');
  assert.equal(leap.dateFormat('yyyy-MM-dd', leap.handleLastDay('3m')), '2024-02-29');
});
test('day-based panels span December to January', () => {
  const panels = calendar('2026-12-25T12:00:00').getAllPanelData('10d');
  assert.equal(panels.length, 2);
  assert.equal(panels[1].month, '2027年1月');
});
test('day cutoff stays at local midnight across daylight-saving changes', () => {
  const utils = calendar('2026-03-07T12:00:00');
  const last = utils.handleLastDay('2d');
  assert.equal(utils.dateFormat('yyyy-MM-dd', last), '2026-03-09');
  assert.equal(last.getHours(), 0);
});
