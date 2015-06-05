var express=require("express");
var app=express();
/*环境变量port*/
app.set("port",process.env.PORT||3000);
/*在模块名称之前加上前缀./ 告诉node 不应该在node_modules下查找这个模块*/
var fortune=require('./fortune.js');
app.get("/about",function(req,res){
	res.send(fortune.getFortune());
});
console.log("testFortune!");

app.listen(app.get("port"),function(){
	console.log("express started on http://localhost:"+app.get("port")+";press Ctrl-C to terminate");
});