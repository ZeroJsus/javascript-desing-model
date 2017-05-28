//module引入其他模块的模式
var myModule =(function(jq,_){
	function privateMethod1(){
		jq(".container").html('test');	
	}
	function privateMethod2(){
		console.log(_.min([10,5,100,2,1000]));
	}
	return {
		publicMethod:function(){
			privateMethod1();
		}
	}
	//引入jquery和underscroce
})(jQuery,_);

myModule.publicMethod();