// Modules
const http = require('http');

const sendRequest = url => {
  const req = http.request(url, res => {
    const buffer = [];
    res.on('data', chunk => {
      buffer.push(chunk);
    });
    res.on('end', () => {
      const serverResponse = buffer.join();
      console.info(serverResponse);
      console.info('Connection has been closed');
    });
  });

  req.end();
};

sendRequest('http://localhost:3000');
