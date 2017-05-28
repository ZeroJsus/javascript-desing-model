//揭示模式
var myRevealingModule = function(){
	var privateVar = "Ben Cherry",publicVar = "Hey there!";
	function privateFunction(){
		console.log("Name:"+privateVar);
	}
	function publicSetName(strName){
		privateName = strName;
	}
	function publicGetName(){
		privateFunction();
	}
	return{
		//将暴露的公有指针指向私有函数
		setName:publicSetName,
		greeting:publicVar,
		getName:publicGetName
	}
}();

// myRevealingModule.setName('Paul Kinlan');
console.log(myRevealingModule.getName());//会返回一个特殊的undefined
console.log(myRevealingModule.greeting);