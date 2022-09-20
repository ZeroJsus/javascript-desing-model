//多个装饰器
//被装饰对象的构造函数
function MacBook(){
	this.cost = function(){
		return 997;
	};
	this.screenSize = function(){
		return 11.6;
	}
}

//D1
function Memory(macbook){
	var v = macbook.cost();
	macbook.cost = function(){
		return v + 75;
	};
}

//D2
function Engraving(macbook){
	var v = macbook.cost();
	macbook.cost = function(){
		return v + 200;
	};
}

//D3
function Insurance(macbook){
	var v = macbook.cost();
	macbook.cost = function(){
		return v + 250;
	};
}

var mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);

//输出:1522
console.log(mb.cost());

//输出11.6
console.log(mb.screenSize());