/*
 * @Author: yangrongxin
 * @Date: 2022-09-22 23:27:02
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-09-22 23:31:06
 */

//构造器模式
function Air(this: any, model: string,year: number,miles: number){
	this.model = model;
	this.year = year;
	this.miles = miles;
	this.toString = function(){
		return this.model + "has done" + this.miles + "miles";
	}
}

let civic = new (Air as any)("honda",2017,2000);
let mondao = new (Air as any)("ford",2010,5000);

console.log(civic.toString());
console.log(mondao.toString());

export {};