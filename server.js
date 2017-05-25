/*var EventEmitter=require("events").EventEmitter;
var emitter=new EventEmitter();
emitter.on("radiation",function(ray){
	console.log(ray);
})
// setInterval(function(){
// 	emitter.emit("radiation","GAMMA")
// },1000);
emitter.emit("radiation","GAMMA")*/
var express=require("express");
var app=express();
var router=express.Router();
var importdata=require("./import")
console.log(importdata)
router.get("/",function(request,response){
response.json({message :"Hello Bengaluru!!"});
})
router.get("/user",function(request,response){
	response.json({message :"Hello is user endpoint"})
});
	
router.get("/customer",function(request,response){
var customer={
	name:"bindu",number:"123556"
};
	response.json(customer)
})
app.use("/api",router)
var PORT=process.env.PORT||8080;

app.listen(PORT,function(){
	console.log("server listeninmg at PORT 1337!!"+PORT)
})