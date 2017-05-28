//车辆vehicle构造函数
function vehicle(vehicleType){
	//默认值
	this.vehicleType = vehicleType || "car";
	this.model = "default";
	this.license = "00000-000";
}

//测试基本的vehicle实例
var testInstance = new vehicle("car");
console.log(testInstance);

//创建一个vehicle实例进行装饰
var truck = new vehicle('truck');

//给truck装饰新的功能
truck.setModel = function(modelName){
	this.model = modelName;
};

truck.setC=olor = function(color){
	this.color= color;
}

//测试赋值操作是否正确
truck.setModel("CAT");
truck.setColor("blue");

console.log(truck);