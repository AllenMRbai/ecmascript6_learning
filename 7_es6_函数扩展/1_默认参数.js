// #基本用法
function case1_1(){
	function log(x, y = 'World') {
	  console.log(x, y);
	}

	log('Hello') // Hello World
	log('Hello', 'China') // Hello China
	log('Hello', '') // Hello
}

function case1_2(){
	//参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。
	let x = 99;
	function foo(p = x + 1) {
	  console.log(p);
	}

	foo() // 100

	x = 100;
	foo() // 101
}

// #与解构赋值默认值结合使用
function case1_1(){
	function foo({x, y = 5}) {
	  console.log(x, y);
	}

	foo({}) // undefined 5
	foo({x: 1}) // 1 5
	foo({x: 1, y: 2}) // 1 2
	foo() // TypeError: Cannot read property 'x' of undefined
}

function case1_2(){
	function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
	  console.log(method);
	}

	fetch('http://example.com')
	// "GET"
}

function case1_3(){
	//练习，以下两种写法有何不同
	// 写法一
	function m1({x = 0, y = 0} = {}) {
	  return [x, y];
	}

	// 写法二
	function m2({x, y} = { x: 0, y: 0 }) {
	  return [x, y];
	}


	//答案
	// 函数没有参数的情况
	m1() // [0, 0]
	m2() // [0, 0]

	// x 和 y 都有值的情况
	m1({x: 3, y: 8}) // [3, 8]
	m2({x: 3, y: 8}) // [3, 8]

	// x 有值，y 无值的情况
	m1({x: 3}) // [3, 0]
	m2({x: 3}) // [3, undefined]

	// x 和 y 都无值的情况
	m1({}) // [0, 0];
	m2({}) // [undefined, undefined]

	m1({z: 3}) // [0, 0]
	m2({z: 3}) // [undefined, undefined]
}