const net = require('net');
const utils = require('./utils');

const { getNamedPrefix } = utils;

function log(...args) {
  console.log(getNamedPrefix("client"), ...args);
}
const socket = new net.Socket();

socket.connect({
  host: '127.0.0.1',
  port: 2000
}, () => {
  const clientInfo = socket.address();
  clientInfo.pid = process.pid;

  socket.write(`${getNamedPrefix("client")} hello from client: ${JSON.stringify(clientInfo)}`);

  socket.on('data', data => {
    log(`received data: `, data.toString());

    try {
      const objMsg = JSON.parse(data);
      console.dir(objMsg);
    } catch (e) {
      // pass
    }
  })
});
