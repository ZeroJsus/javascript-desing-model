var vehicle = {
	getModel:function(){
		console.log("The model of this vehicle is .."+this.model);
	}
};

var car = Object.create(vehicle,{
	"id":{
		value:"123id",
		//writable:false,configurable:false 默认值
		enumerable:true
	},
	"model":{
		value:"Ford",
		enumerable:true
	}
})

console.log(car.getModel());