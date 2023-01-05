const net = require('net');
const utils = require('./utils');

const { timestamp, getNamedPrefix } = utils;

function log(...args) {
  console.log(getNamedPrefix('server'), ...args);
}

const server = net.createServer((socket) => {
  log('Socket connected', socket.remoteAddress);
  console.dir(socket);

  socket.write(`${getNamedPrefix('server')} CONNECTION INITIALIZATION MESSAGE`);

  socket.on('data', (data) => {
    log('stringified: ', data.toString()); // stringify buffer data
  });

  socket.on('error', (error) => {
    log('error: ', error.message);
  });

  const beaconId = setInterval(() => {
    log(`sending server time... ${timestamp()}`);
    socket.write(`{"serverTime": "${timestamp()}"}`);
  }, 3000);

  socket.on('close', () => {
    clearInterval(beaconId);
  });
});

log('starting server...');

server.listen(2000);
