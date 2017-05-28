//带原型的构造器
function Car(model,year,miles){
	this.model = model;
	this.year = year;
	this.miles =miles;
}
Car.prototype.toString = function(){
	return this.model + 'has done' +this.miles +'miles';
}

var civic = new Car("civic",2017,2000);
var mondao = new Car("ford",2010,6000);

console.log(civic.toString());
console.log(mondao.toString());