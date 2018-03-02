// ##基本用法
function case1_1(){
	let [a,b,c]=[1,2,3]
	console.log(a,b,c)
}

function case1_2(){
	let [a,b,c]=[1,[2,3],4]
	console.log(b)
}

function case1_3(){
	//只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
	function* fibs() {
	  let a = 0;
	  let b = 1;
	  while (true) {
	    yield a;
	    [a, b] = [b, a + b];
	  }
	}

	let [first, second, third, fourth, fifth, sixth] = fibs();
	console.log(sixth)// 5
}



// ##制定默认值
function case2_1(){
	let [foo = true] = [];
	foo // true

	let [x, y = 'b'] = ['a']; // x='a', y='b'
	let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

	//注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
	let [x = 1] = [null];
	x // null
}

function case2_2(){
	//如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
	function f() {
	  console.log('aaa');
	}

	let [x = f()] = [1];
}

function case2_3(){
	//默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
	let [x = 1, y = x] = [];     // x=1; y=1
	let [x = 1, y = x] = [2];    // x=2; y=2
	let [x = 1, y = x] = [1, 2]; // x=1; y=2
	let [x = y, y = 1] = [];     // ReferenceError: y is not defined
}