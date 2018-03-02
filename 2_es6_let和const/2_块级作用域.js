// ##块级作用域
function case1_1(){
	//没有块级作用域下，内层变量可能会覆盖外层变量。
	var tmp = new Date();

	function f() {
	  console.log(tmp);
	  if (false) {
	    var tmp = 'hello world';
	  }
	}

	f(); // undefined
}

function case1_2(){
	//let为JavaScript 新增了块级作用域。
	let n = 5;
	if (true) {
	let n = 10;
	}
	console.log(n); // 5
}

function case1_3(){
	//外层作用域无法读取内层作用域的变量。
	{{{{
	  {let insane = 'Hello World'}
	  console.log(insane); // 报错
	}}}};
}

function case1_4(){
	//块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了。

	// IIFE 写法
	(function () {
	  var tmp = 'hello world';
	  // ...
	}());

	// 块级作用域写法
	{
	  let tmp = 'hello world';
	  // ...
	}
}



// ##块级作用域与函数声明

//函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
//但是浏览器没有遵守这个规定，为了兼容以前的旧代码，还是支持在块级作用域之中声明函数
//ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。

function case2_1(){
	//考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
	function f() { console.log('I am outside!'); }

	(function () {
		
	  if (false) {
	    // 重复声明一次函数f
	    let f=function () { console.log('I am inside!'); }
	    var allen='my name is allen'
	  }
	  console.log(allen) //undefined
	  console.log(f);//undefined
	  f();// 会报错 其实f是声明了但没有赋值,这说明函数和var是一样 在块级作用域内会提升。
	}());
}
