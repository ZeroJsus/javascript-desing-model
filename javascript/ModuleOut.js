var myModule = (function(){
	var module = {},prvateVariable = "Hello World";
	function privateMethod(){
		//...
	}
	module.publicProperty = 'Foobar';
	module.publicMethod = function(){
		console.log(privateVariable);
	};
	return module;
})()

//与上个混入案例相同 返回的模型名下的方法被赋值到当前所在对象上
console.log(myModule.publicProperty);