const os = require('os');

console.log(`Architecture: ${os.arch()}`);

os.cpus().forEach((cpu) => {
  console.log(`Model: ${cpu.model}`);
  console.log(`Speed: ${cpu.speed}`);
});

console.log(`~: ${os.homedir()}`);

console.log(`hostname: ${os.hostname()}`);

Object.entries(os.networkInterfaces())
  .forEach(([k, v]) => {
    console.log(k);
    console.log(v[0].address);
  });

console.log(os.tmpdir());

console.log(os.userInfo());
