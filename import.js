// var string="Hello I am from Import";
var sample=function(name){
	return "Hello Good Morning"+name;
}
var displayMessage=function(){
	return "This is display message"
}
// module.exports={
// 	sample:sample,
// 	display:displayMessage
// };
module.exports.display=function(){
	return "This is my new function"
}