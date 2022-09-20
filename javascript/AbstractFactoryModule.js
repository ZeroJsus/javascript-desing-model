//Type.js 构造函数存放文件
//定义car构造函数
function Car(options){
	//默认值
	this.doors = options.doors || 4;
	this.state = options.state || "brand new";
	this.color = options.color || "silver";
}
//定义trunk构造函数
function Truck(options){
	this.state = options.state || "used";
	this.wheelSize = options.wheelSize || "large";
	this.color = options.color || "blue"; 
}

var AbstractVehicleFactory = (function(){
	//存储车辆类型
	var types = {};

	return {
		getVehicle :function(type,customizations){
			var Vehicle = types[type];
			return (Vehicle) ? new Vehicle(customizations) : null;
		},
		registerVehicle:function(type,Vehicle){
			var proto = Vehicle.prototype;
			//只注册实现车辆契约的类
			if(!proto.drive&&!proto.breakDown){
				types[type] = Vehicle;
			}
			return AbstractVehicleFactory;
		},
		types:types,
	}
})();

//用法
AbstractVehicleFactory.registerVehicle("car",Car);
AbstractVehicleFactory.registerVehicle("truck",Truck);

//基于抽象车辆类型实例化一个新car对象
var car = AbstractVehicleFactory.getVehicle("car",{
	color:"lime green",
	state:"like new"
})

//同理实例化一个新truck对象
var truck = AbstractVehicleFactory.getVehicle("truck",{
	wheelSize:"medium",
	color:"neon yellow"
})

//输出car以及truck对象
console.log(AbstractVehicleFactory.types);
console.log(car);
console.log(truck);