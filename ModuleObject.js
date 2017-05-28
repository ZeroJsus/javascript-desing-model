//module对象字面量设计
var myModule = {
	myProperty:"someValue",
	myConfig:{
		useCaching:true,
		language:"en"
	},
	myMethod:function(){
		console.log("Where in the world is Paul Irish today?");
	},
	myMethod2:function(){
		console.log("Caching is:"+(this.myConfig.useCaching)?"enabled":"disabled");
	},
	myMethod3:function(newconfig){
		if(typeof newconfig === "object"){
			this.myConfig = newconfig;
			console.log(this.myConfig.language);
		}
	}
};

myModule.myMethod();
myModule.myMethod2();
myModule.myMethod3({
	language:"fr",
	useCaching:false
});
