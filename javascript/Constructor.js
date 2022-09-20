//构造器模式
function Air(model,year,miles){
	this.model = model;
	this.year = year;
	this.miles = miles;
	this.toString = function(){
		return this.model + "has done" + this.miles + "miles";
	}
}

var civic = new Air("honda",2017,2000);
var mondao = new Air("ford",2010,5000);

console.log(civic.toString());
console.log(mondao.toString());