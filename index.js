const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer(function(req, res) {
  proxy.web(req, res, { target: 'http://u2.bksy1105.com:8880' });
});

console.log("Proxy server running on port 3000");
server.listen(3000);
