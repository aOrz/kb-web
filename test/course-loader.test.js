const test = require('node:test');
const assert = require('node:assert/strict');
const createLoader = require('../src/lib/course-loader');
function fixture(table) {
  const alerts = [], requests = [], indicators = [];
  const mixin = createLoader({
    alert: message => alerts.push(message),
    loading: () => {
      const indicator = { hidden: 0, hide() { this.hidden++; } };
      indicators.push(indicator);
      return indicator;
    }
  }, table);
  const page = Object.assign(mixin.data(), mixin.methods, {
    $route: { params: { school: 'yd', academe: '计&数', class_name: '26/1', type: 'GetCourceByCourseName', search: 'C++ & 编译/#' } },
    $http: { get(url, options) {
      const request = { url, options, aborted: false, abort() { this.aborted = true; } };
      requests.push(request);
      options.before(request);
      return new Promise((resolve, reject) => { request.resolve = resolve; request.reject = reject; });
    } }
  });
  return { page, mixin, alerts, requests, indicators };
}
test('query values use HTTP params, not unescaped URL interpolation', async () => {
  const f = fixture(false), result = f.page.fetchData();
  assert.equal(f.requests[0].url.includes('?'), false);
  assert.equal(f.requests[0].options.params.courseName, 'C++ & 编译/#');
  assert.equal(f.requests[0].options.timeout, 15000);
  f.requests[0].resolve({ status: 200, body: [{ course_name: 'C++' }] });
  await result;
  assert.equal(f.page.course[0].course_name, 'C++');
  assert.equal(f.indicators[0].hidden, 1);
});
test('empty, null, primitive and malformed responses leave table safe', async () => {
  for (const body of [null, [], {}, 'error', [null], [false], [[]], [{}], [{error: 'unavailable'}], [{s1: {bad: true}}]]) {
    const f = fixture(true), result = f.page.fetchData();
    f.requests[0].resolve({ status: 200, body });
    await result;
    assert.equal(f.page.course, null);
    assert.equal(f.alerts.length, 1);
    assert.equal(f.indicators[0].hidden, 1);
  }
});
test('valid table response is displayed', async () => {
  const f = fixture(true), result = f.page.fetchData();
  f.requests[0].resolve({ status: 200, body: [{ s1: '数学' }] });
  await result;
  assert.equal(f.page.course.s1, '数学');
});
test('route reuse refetches and stale response cannot overwrite latest data', async () => {
  const f = fixture(true);
  assert.equal(f.mixin.watch.$route, 'fetchData');
  const old = f.page.fetchData(), current = f.page.fetchData();
  assert.equal(f.requests[0].aborted, true);
  f.requests[1].resolve({ status: 200, body: [{ s1: 'new' }] });
  await current;
  f.requests[0].resolve({ status: 200, body: [{ s1: 'old' }] });
  await old;
  assert.equal(f.page.course.s1, 'new');
  assert.deepEqual(f.indicators.map(x => x.hidden), [1, 1]);
});
test('destroy aborts request, hides loading and suppresses late failures', async () => {
  const f = fixture(true), result = f.page.fetchData();
  f.mixin.beforeDestroy.call(f.page);
  f.requests[0].reject(new Error('aborted'));
  await result;
  assert.equal(f.requests[0].aborted, true);
  assert.equal(f.indicators[0].hidden, 1);
  assert.deepEqual(f.alerts, []);
});
test('HTTP and network errors clear stale course data and loading', async () => {
  for (const network of [false, true]) {
    const f = fixture(true);
    f.page.course = { s1: 'stale' };
    const result = f.page.fetchData();
    assert.equal(f.page.course, null);
    if (network) f.requests[0].reject(new Error('offline'));
    else f.requests[0].resolve({ status: 500, body: [{ s1: 'error' }] });
    await result;
    assert.equal(f.page.course, null);
    assert.equal(f.indicators[0].hidden, 1);
    assert.equal(f.alerts.length, 1);
  }
});

test('table template guards null data and uses stable in-range colors', () => {
  const fs = require('node:fs'), vm = require('node:vm');
  const source = fs.readFileSync(require.resolve('../src/components/course_table.vue'), 'utf8');
  assert.match(source, /<table v-if="course"/);
  assert.match(source, /getColor\(\(i - 1\) \* 7 \+ j - 1\)/);
  const script = source.match(/<script[^>]*>([\s\S]*?)<\/script>/)[1]
    .replace(/^import .*;$/gm, '').replace('export default', 'module.exports =');
  const context = { module: { exports: {} }, weui: {}, createCourseLoader: createLoader };
  vm.runInNewContext(script, context);
  const component = context.module.exports;
  for (let i = 0; i < 42; i++) {
    assert.equal(typeof component.methods.getColor(i), 'string');
    assert.equal(component.methods.getColor(i), component.methods.getColor(i));
  }
  assert.equal(component.methods.getColor(0), 'active');
  assert.equal(component.methods.getColor(9), 'active');
});


test('list rejects error objects masquerading as course rows', async () => {
  for (const body of [[{}], [{error: 'unavailable'}], [{course_name: null}]]) {
    const f = fixture(false), result = f.page.fetchData();
    f.requests[0].resolve({status: 200, body});
    await result;
    assert.deepEqual(f.page.course, []);
    assert.equal(f.alerts.length, 1);
  }
});
