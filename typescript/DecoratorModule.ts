/*
 * @Author: yangrongxin
 * @Date: 2022-09-24 23:08:04
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-09-24 23:08:21
 */

//车辆vehicle构造函数
function vehicle(this: any, vehicleType: string){
	//默认值
	this.vehicleType = vehicleType || "car";
	this.model = "default";
	this.license = "00000-000";
}

//测试基本的vehicle实例
let testInstance = new (vehicle as any)("car");
console.log(testInstance);

//创建一个vehicle实例进行装饰
let truck = new (vehicle as any)('truck');

//给truck装饰新的功能
truck.setModel = function(modelName: any){
	this.model = modelName;
};

truck.setColor = function(color: any){
	this.color= color;
}

//测试赋值操作是否正确
truck.setModel("CAT");
truck.setColor("blue");

console.log(truck);

export {};