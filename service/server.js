const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
http
  .createServer((req, res) => {
    const { pathName } = url.parse(req.url);
    let raw = null;
    console.log('Request: ', req.url);

    try {
      const _path = path.resolve(__dirname, pathName.replace(/^\//, ''));
      raw = fs.createReadStream(_path);
      raw.on('error', (err) => {
        console.log(err);
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'content-type': 'text/html;charset="utf-8"' });
          res.write('<h1>404错误</h1><p>不要找的页面不存在</p>');
          res.end();
        }
      });
      res.writeHead(200, {});
      res.pipe(res);
    } catch (e) {
      console.log(e);
    }
  })
  .listen(3002);

console.log('server listening', 'http://localhost:3002');
