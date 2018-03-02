// ##交换变量
function case1(){
	let x = 1;
	let y = 2;

	[x, y] = [y, x];
}

// ##从函数返回多个值
function case2(){
	// 返回一个数组
	function example() {
	  return [1, 2, 3];
	}
	let [a, b, c] = example();

	// 返回一个对象
	function example() {
	  return {
	    foo: 1,
	    bar: 2
	  };
	}
	let { foo, bar } = example();
}

// ##函数参数的定义
function case3(){
	// 参数是一组有次序的值
	function f([x, y, z]) { /*...*/ }
	f([1, 2, 3]);

	// 参数是一组无次序的值
	function f({x, y, z}) { /*...*/ }
	f({z: 3, y: 2, x: 1});
}

// ##提取 JSON 数据
function case4(){
	let jsonData = {
	  id: 42,
	  status: "OK",
	  data: [867, 5309]
	};

	let { id, status, data: number } = jsonData;

	console.log(id, status, number);
	// 42, "OK", [867, 5309]
}

// ##函数参数的默认值
function case5(){
	jQuery.ajax = function (url, {
	  async = true,
	  beforeSend = function () {},
	  cache = true,
	  complete = function () {},
	  crossDomain = false,
	  global = true,
	  // ... more config
	}) {
	  // ... do stuff
	};
}

//##遍历 Map 结构
function case6(){
	const map = new Map();
	map.set('first', 'hello');
	map.set('second', 'world');

	for (let [key, value] of map) {
	  console.log(key + " is " + value);
	}
	// first is hello
	// second is world
}
function case6_2(){
	// 只获取键名
	for (let [key] of map) {
	  // ...
	}

	// 只获取键值
	for (let [,value] of map) {
	  // ...
	}
}

// ##输入模块的指定方法
//const { SourceMapConsumer, SourceNode } = require("source-map");

function test(){
	let allenO={
		name:'allen',
		age:1,
		gender:'male',
		wight:60
	}

	let allenM=new Map()
	allenM.set('name','allen')
	allenM.set('age',1)
	allenM.set('gender','male')
	allenM.set('wight',60)

	let allenS=new Set()
	allenS.add('allen')
	allenS.add(1)
	allenS.add('male')
	allenS.add(60)

	
	//let flag=true
	//只有实现Iterator 接口的对象才能使用for...of
	for(let d of allenM){
		// if(flag){
		// 	console.log(Object.keys(d))
		// 	flag=false
		// }	
		console.log(d)
	}
}
