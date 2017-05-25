var EventEmitter=require("events").EventEmitter;
var emitter=new EventEmitter();
var fs=require("fs");
var path=require("path");
var filePath=path.join(__dirname,"sample.json")
// var filePath=__dirname + "/sample.txt"
// console.log(filePath)
emitter.on("Start_Reading",function(filePath){
	console.log("Start reading the file..!!")
	fs.readFile(filePath,"utf-8",function(err,data){
		if(err){
			emitter.emit("error",err)
			return;
		}
		emitter.emit("print_content",data)
	})
})
emitter.on("print_content",function(data){
console.log(data)
emitter.emit("done","successfully done reading the file!!!")
})
emitter.on("error",function(message){
	console.log("There is an error")
	console.log(message);
	console.log("couldn't read this file")
})
emitter.on("done",function(message){

	console.log(message)
})
emitter.emit("Start_Reading",filePath)