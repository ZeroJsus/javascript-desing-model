//鸭子补丁的实现
//在js里模拟纯虚拟继承implement
Function.prototype.implementsFor = function (parentClassObject){
	if(parentClassObject.constructor === Function){
		//正常继承
		this.prototype = new parentClassObject();
		this.prototype.constructor = this;
		this.prototype.parent = parentClassObject.prototype;
	}else{
		//纯虚拟继承
		this.prototype = parentClassObject;
		this.prototype.constructor = this;
		this.prototype.parent = parentClassObject;
	}
	return this;
}

//享元模式就是通过继承实现代码复用