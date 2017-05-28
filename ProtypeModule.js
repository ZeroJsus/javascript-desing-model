var myCar = {
	name:"Ford Escort",
	drive:function(){
		console.log("Weeee.I`m driving!");
	},
	panic:function(){
		console.log("Wait.How do you stop this thing?");
	}
};

//使用Object.create实例化一个新car
var yourCar = Object.create(myCar);

//现在可以看到一个对象是另一个对象的原型
console.log(yourCar.name);