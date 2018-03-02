function case1(){
	for (let i = 0; i < 3; i++) {
	  let i = 'abc';
	  console.log(i);
	}
	// abc
	// abc
	// abc
}



// ##不存在变量提升
function case2(){
	console.log(allen)//var定义的变量 它的申名会提升，因此打印undefined
	var allen='my name is allen'
	console.log(jack)//let定义变量不存在变量提升，因此这里会报错 ReferenceError
	let jack='my name is jack'
}



// ##暂时性死区 (tempotal dead zone,简称TDZ)
//只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
function case3_1(){
	var tmp = 123;
	if (true) {
	  tmp = 'abc'; // ReferenceError
	  let tmp;
	}
}

function case3_2(){
	// TDZ开始
	tmp = 'abc'; // ReferenceError
	console.log(tmp); // ReferenceError

	let tmp; // TDZ结束
	console.log(tmp); // undefined

	tmp = 123;
	console.log(tmp); // 123
}

function case3_3(){
	//如果一个变量根本没有被声明，使用typeof反而不会报错。
	typeof undeclared_variable // "undefined"
}

function case3_4(){
	//这是比较隐蔽的‘死区’
	//参数x默认值等于另一个参数y，而此时y还没有声明，属于”死区“
	function bar(x = y, y = 2) {
	  return [x, y];
	}
	bar(); // 报错
}

function case3_5(){
	// 不报错
	var x = x;

	// 报错 在变量x的声明语句还没有执行完成前，就去取x的值，导致报错”x 未定义“
	let x = x;
	// ReferenceError: x is not defined
}


// ##不允许重复声明
function case4() {
  var a = 1;
  let a = 10;
}

function case4_2(){
	function func(arg) {
	  let arg; // 报错
	}

	function func(arg) {
	  {
	    let arg; // 不报错
	  }
	}
}