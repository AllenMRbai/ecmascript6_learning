// ##字符串的解构赋值
function case1_1(){
	const [a, b, c, d, e] = 'hello';
	a // "h"
	b // "e"
	c // "l"
	d // "l"
	e // "o"
}

function case1_2(){
	//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
	let {length : len} = 'hello';
	len // 5
}