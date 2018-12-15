const fs = require('fs');

fs.open('/Users/daines/unicorn', 'r', (err, fd) => {
  // Stuff you'd do with a file descriptor.
});

// Descriptor in callback
try {
  const fd = fs.openSync('/Users/daines/unicorn', 'r');
} catch (err) {
  console.log(err);
}

fs.stat('/Users/daines/unicorn', (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stats.ctime);
  console.log(stats.isFile());
});

try {
  // const stats = fs.stat('/Users/daines/unicorn');
/* 
  TypeError [ERR_INVALID_CALLBACK]: Callback must be a function
    at makeStatsCallback (fs.js:157:11)
    at Object.stat (fs.js:842:14)
    at Object.<anonymous> (js-bits/node/file.js:23:16)
    at Module._compile (internal/modules/cjs/loader.js:722:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:733:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:775:12)
    at startup (internal/bootstrap/node.js:300:19)
 */
} catch (err) {
  console.error(err);
}
