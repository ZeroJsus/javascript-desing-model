/*
 * @Description: 抽象工厂函数实现
 * @Author: yangrongxin
 * @Date: 2022-09-20 22:17:41
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-09-20 22:35:44
 */

type TCar = {
	doors: number; 
	state: string; 
	color: string;
}

interface ITruck {
	state: string;
	wheelSize: string;
	color: string;
}

//Type.js 构造函数存放文件
//定义car构造函数
function Car(this: TCar, options: TCar): void{
	//默认值
	this.doors = options.doors || 4;
	this.state = options.state || "brand new";
	this.color = options.color || "silver";
}
//定义trunk构造函数
function Truck (this: ITruck, options: ITruck): void{
	this.state = options.state || "used";
	this.wheelSize = options.wheelSize || "large";
	this.color = options.color || "blue"; 
}

let AbstractVehicleFactory = (function(){
	//存储车辆类型
	let types: {
		[props: string]: any
	} = {};

	return {
		getVehicle :function(type: string | number,customizations: any){
			let Vehicle = types[type];
			return (Vehicle) ? new Vehicle(customizations) : null;
		},
		registerVehicle:function(type: string | number,Vehicle: { prototype: any; }){
			let proto = Vehicle.prototype;
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

// 基于抽象车辆类型实例化一个新car对象
let car = AbstractVehicleFactory.getVehicle("car",{
	color:"lime green",
	state:"like new"
})

//同理实例化一个新truck对象
let truck = AbstractVehicleFactory.getVehicle("truck",{
	wheelSize:"medium",
	color:"neon yellow"
})

//输出car以及truck对象
console.log(AbstractVehicleFactory.types);
console.log(car);
console.log(truck);

export {};