const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
function runBuild(hasErrors) {
  const messages = [], process = { env: {}, stdout: { write() {} }, exitCode: 0 };
  const mocks = {
    './check-versions': () => {},
    ora: () => ({ start() {}, stop() {} }),
    path: require('node:path'),
    chalk: { cyan: x => x, yellow: x => x },
    shelljs: { rm() {}, mkdir() {}, cp() {}, config: {} },
    webpack: (_, callback) => callback(null, { toString: () => '', hasErrors: () => hasErrors }),
    '../config': { build: { assetsRoot: '/unused', assetsSubDirectory: 'static' } },
    './webpack.prod.conf': {}
  };
  vm.runInNewContext(fs.readFileSync(require.resolve('../build/build'), 'utf8'), {
    require: name => mocks[name], process, console: { log: x => messages.push(x) }
  });
  return { messages, process };
}
test('webpack compilation errors fail the build instead of reporting success', () => {
  const result = runBuild(true);
  assert.equal(result.process.exitCode, 1);
  assert.equal(result.messages.some(x => x.includes('Build complete')), false);
});
test('successful compilation still reports success', () => {
  const result = runBuild(false);
  assert.equal(result.process.exitCode, 0);
  assert.equal(result.messages.some(x => x.includes('Build complete')), true);
});
