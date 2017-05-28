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

//FactoryExample.js
//定义vehicle工厂的大体代码
function VehicleFactory(){}

//定义该工厂factory的原型和试用工具，默认的vehicleClass是Car
VehicleFactory.prototype.vehicleClass = Car;

//创建新的Vehicle实例的工厂方法
VehicleFactory.prototype.createVehicle = function (options){
	if(options.vehicleType === "car"){
		this.vehicleClass = Car;
	}else{
		this.vehicleClass = Truck
	}

	return new this.vehicleClass(options);
};

//创建生成汽车的工厂实例
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
	vehicleType:'car',
	color:'yellow',
	doors:6
})

//输出true
console.log(car instanceof Car);

//输出Car对象 也可以将Car对象换成Trunk来进行实现
console.log(car);