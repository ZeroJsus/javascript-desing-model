/*
 * @Author: yangrongxin
 * @Date: 2022-09-21 23:40:02
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-09-21 23:40:23
 */
let CarManager: any = {
	//请求信息
	requestInfo:function(model: string,id: string){
		return "The information for "+model+"with ID"+id+"is foobar";
	},
	//订购汽车
	buyVehicle:function(model: string,id: string){
		return "You have successfully purchased Item "+id+",a"+model;
	},
	//组织一个view
	arrangeViewing:function(model: string,id: string){
		return "You have successfully booked a viewing of"+model+"("+id+")";
	},
};
//扩展CarManager方法
CarManager.execute = function(name: string | number){
	return CarManager[name] && CarManager[name].apply(CarManager,[].slice.call(arguments,1));
}

//最终实例调用
CarManager.execute("arrangeViewing","Ferrari",'14523');

export {};
