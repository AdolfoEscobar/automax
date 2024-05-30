const http = require('http');
const fs = require('fs');

http.createServer((request, response)=>{
    const file = request.url == '/' ? 
    './automax/index.html' : `./automax/${request.url}`;
    if(request.url == '/formulario'){
        let data = [];
        request.on("data", value =>{
            data.push(value);

        }).on("end", ()=>{
            let params = Buffer.concat(data).toString();
            response.write(params);
            response.end();
        });
    }

    fs.readFile(file, (err, data)=>{
        if(err){
            response.writeHead(404, {"Content-Type":"text/plain"});
            response.write("not found");
            response.end();
        }else{
            const extension = request.url.split('.').pop();
            switch(extension){
                case 'txt':
                    response.writeHead(200, {"Content-Type":"text/plain"});
                break;
                case 'html':
                    response.writeHead(200, {"Content-Type":"text/html"});
                break;
                case 'jpeg':
                    response.writeHead(200, {"Content-Type":"image/jpeg"});
                break;
                case 'png':
                    response.writeHead(200, {"Content-Type":"image/png"});
                break;
                case 'css':
                    response.writeHead(200, {"Content-Type":"text/css"});
                break;
                case 'js':
                    response.writeHead(200, {"Content-Type":"text/javascript"});
                break;

            }
            response.write(data);
            response.end();
        }
    });
}).listen(8888);
console.log("Servidor inicializado en localhost:8888");