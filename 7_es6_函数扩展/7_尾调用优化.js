// #何为尾调用
/*
 *	尾调用（Tail Call）是指某个函数的最后一步是调用另一个函数
 */
function case1_1(){
	//例子
	function f(x){
	  return g(x);
	}
}
function case1_2(){
	//以下三种都不属于尾调用
	// 情况一
	function f(x){
	  let y = g(x);
	  return y;
	}
	// 情况二
	function f(x){
	  return g(x) + 1;
	}
	// 情况三
	function f(x){
	  g(x);
	}
}



// #尾调用优化
function case2_1(){
	//例子
	function f() {
	  let m = 1;
	  let n = 2;
	  return g(m + n);
	}
	f();

	// 等同于
	function f() {
	  return g(3);
	}
	f();

	// 等同于
	g(3);
}

function case2_2(){
	//只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则就无法进行“尾调用优化”。
	//以下方法无法进行尾调用优化，因为内层函数inner用到了外层函数addOne的内部变量one。
	function addOne(a){
	  var one = 1;
	  function inner(b){
	    return b + one;
	  }
	  return inner(a);
	}
}



// #尾调用应用----尾递归
function case3_1(){
	//非尾调用的递归阶乘函数
	/*function factorial(n){
		if(n<=1)return 1;
		return n*factorial(n-1);
	}*/

	//尾调用的递归阶乘函数
	function factorial(n,total=1){
		if(n<=1)return total;
		return factorial(n-1,n*total)
	}

	console.log(factorial(5,1))
}

function case3_2(){
	//非尾调用的递归Fibonacci
	function Fibonacci(n){
		if(n<=1)return 1;
		return Fibonacci(n-1)+Fibonacci(n-2);
	}

	//尾调用的递归Fibonacci
	function Fibonacci(n,ac1=1,ac2=1){
		if(n<=1)return ac2;
		return Fibonacci(n-1,ac2,ac1+ac2)
	}
	console.log(Fibonacci(4))
}

// ##ES6 的尾调用优化只在严格模式下开启，正常模式是无效的。
/*这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。
func.arguments：返回调用时函数的参数。
func.caller：返回调用当前函数的那个函数。
尾调用优化发生时，函数的调用栈会改写，因此上面两个变量就会失真。严格模式禁用这两个变量，所以尾调用模式仅在严格模式下生效。*/

// ##实现尾递归优化
function case4_1(){
	//蹦床函数
	function trampoline(f) {
	  while (f && f instanceof Function) {
	    f = f();
	  }
	  return f;
	}
	function sum(x, y) {
	  if (y > 0) {
	    return sum.bind(null, x + 1, y - 1);
	  } else {
	    return x;
	  }
	}
	console.log(trampoline(sum(1, 100000)))
}

function case4_2(){
	//真正意义上的尾递归的优化
	function tco(f) {
	  var value;
	  var active = false;
	  var accumulated = [];

	  return function accumulator() {
	    accumulated.push(arguments);
	    if (!active) {
	      active = true;
	      while (accumulated.length) {
	        value = f.apply(this, accumulated.shift());
	      }
	      active = false;
	      return value;
	    }
	  };
	}

	var sum = tco(function(x, y) {
	  if (y > 0) {
	    return sum(x + 1, y - 1)
	  }
	  else {
	    return x
	  }
	});

	console.log(sum(1, 100000))
}
