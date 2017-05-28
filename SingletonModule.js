//单例模式
var mySingleton = (function(){
	//实例保持了singleton的一个引用
	var instance;
	function init(){
		//Singletn
		//私有方法和变量
		function privateMethod(){
			console.log("I am private");
		}
		var privateVariable = "Im also private";
		var privateRandomNumber = Math.random();
		return {
			//共有方法和变量
			publicMethod:function(){
				console.log("The public can see me !");
			},
			publicProperty:"Im also private",
			getRandomNumber:function(){
				return privateRandomNumber;
			}
		}
	};
	return {
		//获取Singleton的实例
		getInstance:function(){
			if(!instance){
				instance = init();
			}
			return instance;
		}
	};
})();

var myBadSingleton = (function(){
	//实例保持了Singleton的一个引用
	var instance;
	function init(){
		//Singleton
		var privateRandomNumber = Math.random();
		return {
			getRandomNumber:function(){
				return privateRandomNumber;
			}
		};
	};
	return {
		//每次都创建新实例
		getInstance:function(){
			instance = init();
			return instance;
		}
	}
})()

//单例输出
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
//丝黎话私有引用对象,调用引用对象方法实现
console.log(singleA.getRandomNumber() === singleB.getRandomNumber());//true


var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log(badSingleA.getRandomNumber()!==badSingleB.getRandomNumber());//true