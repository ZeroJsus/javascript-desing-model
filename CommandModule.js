var CarManager = {
	//请求信息
	requestInfo:function(model,id){
		return "The information for "+model+"with ID"+id+"is foobar";
	},
	//订购汽车
	buyVehicle:function(model,id){
		return "You have successfully purchased Item "+id+",a"+model;
	},
	//组织一个view
	arrangeViewing:function(model,id){
		return "You have successfully booked a viewing of"+model+"("+id+")";
	},
};
//扩展CarManager方法
CarManager.execute = function(name){
	return CarManager[name] && CarManager[name].apply(CarManager,[].slice.call(arguments,1));
}

//最终实例调用
CarManager.execute("arrangeViewing","Ferrari",'14523');
