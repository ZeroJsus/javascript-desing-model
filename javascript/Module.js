//module示例
var testModule =(function(){
	var counter = 0;
	//闭包函数 通过return暴露其中可以使用的接口
	return {
		incrementCounter:function(){
			return ++counter;
		},
		resetCounter:function(){
			console.log("counter value prior to reset:"+counter);
			counter = 0
		}
	};
})()

testModule.incrementCounter();
testModule.resetCounter();