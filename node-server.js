// Modules
const http = require('http');

// Configs
const { host, port } = require('./secret').serverConfig;

http
  .createServer((req, res) => {
    res.end('Hellllllloooo!!!!');
  })
  .listen(port, host, () => console.info(`Server is running on ${port} port`));
