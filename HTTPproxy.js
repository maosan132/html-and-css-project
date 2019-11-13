const http = require('http');
const url = require('url');
const qryStr = require('querystring');

http.createServer(function(request, response) {
    const re = /(?<=\/proxy\/).*/;
    const target = re.exec(request.url)[0];
    url_parts = url.parse(target);
    if(url_parts.host == undefined) { 
        response.write("ERROR: missing host in target URL " + target);
        response.end();
    } else {
        const options = {
            hostname: url_parts.host,
            port: 80,
            path: url_parts.href,
            method: request.method,
            headers: request.headers
        };

        const req = http.request(options, res => {
            res.on('data', d => response.write(d));
            res.on('end', () => response.end());
            response.writeHead(res.statusCode, res.headers);
        });
        request.on('data', d => req.write(d));
        request.on('end', () => req.end());
        req.on('error', e => console.error(`problem with request: ${e.message}`));
    }
}).listen(8000);
console.log("Proxy listening to port 8000");