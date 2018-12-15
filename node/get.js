const https = require('https');
const options = {
  hostname: 'github.com',
  port: 443,
  path: '/defndaines/env/blob/master/.bash_logout',
  method: 'GET'
};

const req = https.request(options, (res) => {
  console.log(`statusClde: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error)
});

req.end();
