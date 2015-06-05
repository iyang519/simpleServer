var http=require("http");
http.createServer(function(req,res){
	var path=req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
	switch(path){
		case '':
				res.writeHead(200,{"Content-Type":"text/plain"});
				res.end("HomePage");
				break;
		case '/about':
				res.writeHead(200,{"Content-Type":"text/plain"});
				res.end("About");
				break;
		default:
				res.writeHead(404,{"Content-Type":"text/plain"});
				res.end("Not found");
				break;
	}
}).listen(8080);
console.log("server started on 8080");