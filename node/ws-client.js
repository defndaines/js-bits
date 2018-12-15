const WebSocket = require('ws');

const url = 'wss://localhost:8080/';
const connection = new WebSocket(url);

connection.onopen = () => {
  connection.set('hey');
};

connection.onerror = error => {
  console.log(`WebSocket error: ${error}`);
};

connection.onmessage = e => {
  console.log(e.data);
};
