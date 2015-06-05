var http=require("http"),
	fs=require("fs");
/*http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.end("hello world!");
}).listen(3000);
console.log("server started on localhost:3000");*/
function serveStaticFile(res,path,contentType,responseCode){
	if(!responseCode) responseCode=200;
	fs.readFile(path,function(err,data){
		if(err){
			res.writeHead(500,{"Content-Type":"text/plain"});
			res.end("500 - Internal Error");
		}else{
			res.writeHead(responseCode,{"Content-Type":contentType});
			res.end(data);
		}
	})
}
http.createServer(function(req,res){
	var path=req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
	switch(path){
		case "":
			serveStaticFile(res,"public/home.html","text/html");
			break;
		case "/home":
			serveStaticFile(res,"public/home.html","text/html");
			break;
		case "/about":
			serveStaticFile(res,"public/about.html","text/html");
			break;
		case "/img/logo.jpg":
			serveStaticFile(res,"public/img/logo.jpg","image/jpg");
			break;
		default:
			serveStaticFile(res,"public/404.html","text/html",404);
			break;
	}

}).listen(3000);
console.log("server started on localhost:3000");