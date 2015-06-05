var express=require("express");
var app=express();
app.set("port",process.env.PORT||3000);

app.get("/headers",function(req,res){
	res.set("Content-Type","text/plain");
	var s="";
	for(var name in req.headers){
		s+=name+":"+req.headers[name]+"\n";
	}
	res.send(s);
	console.log()
})
app.listen(app.get("port"),function(){
	console.log("express started on http://localhost:"+app.get("port")+";press Ctrl-C to terminate");
});