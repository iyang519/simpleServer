var express=require("express");
var app=express();
/*环境变量port*/
app.set("port",process.env.PORT||3000);

/*设置handlebars视图引擎*/
var handlebars=require("express3-handlebars").create({defaultLayout:"main"});
app.engine("handlebars",handlebars.engine);
app.set("view engine","handlebars");

/*在node中路由和中间件的添加顺序十分重要，如果把404处理器放在所有路由器上，那么首页和关于页面就不能使用了*/
app.get("/",function(req,res){
	//res.type("text/plain");
	//res.send("Meadowlark Travel");
	res.render("home");
});
app.get("/about",function(req,res){
	//res.type("text/plain");
	res.render("about");
	//res.send("About Meadowlark Travel");
});
app.use(function(req,res,next){
	//res.type("text/plain");
	res.status(404);
	//res.send("404-not-found");
	res.render("404",{layout:null});
});
app.use(function(err,req,res,next){
	console.log(err.stack);
	//res.type("text/plain");
	res.status(500);
	//res.send("500-Server Error");
	res.render("500");
});

app.listen(app.get("port"),function(){
	console.log("express started on http://localhost:"+app.get("port")+";press Ctrl-C to terminate");
});



