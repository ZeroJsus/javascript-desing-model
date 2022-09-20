var basketModule = (function(){
	//私有变量
	var basket = [];
	function doSomethingPrivate(){
		//...
	}
	function doSomethingElsePrivate(){
		//...
	}
	//返回一个暴露出的公有对象
	return{
		//添加item到购物车
		addItem:function(values){
			basket.push(values);
		},
		//获取购物车里面的item数
		getItemCount:function(){
			return basket.length;
		},
		//私有函数的公有形式别名
		doSomething:doSomethingPrivate,
		//获取购物车里所有item的价格总值
		getTotal:function(){
			var itemCount = this.getItemCount(),
			total = 0;
			while (itemCount--){
				total += basket[itemCount].price;
			}
			return total;
		}
	}
})();

basketModule.addItem({
	item:"bread",
	price:0.5
})

basketModule.addItem({
	item:"butter",
	price:0.3
})

console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());
console.log(basketModule.basket);//未暴露值为undefined 但是已经定义不会报错 is not define