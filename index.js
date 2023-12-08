const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer(function(req, res) {
  proxy.web(req, res, { target: 'http://u2.bksy1105.com:8880' });
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Proxy server running");
});
