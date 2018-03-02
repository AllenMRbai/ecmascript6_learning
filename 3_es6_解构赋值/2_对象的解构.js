// ##对象的解构赋值
function case1_1(){
	let { foo, bar } = { foo: "aaa", bar: "bbb" };
	foo // "aaa"
	bar // "bbb" 
	console.log(foo)
}

function case1_2(){
	//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
	let { bar, foo } = { foo: "aaa", bar: "bbb" };
	foo // "aaa"
	bar // "bbb"

	let { baz } = { foo: "aaa", bar: "bbb" };
	baz // undefined
}

function case1_3(){
	//对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
	//我的话来描述：将右边属性名与左边的属性名一样的键值对的值赋值给左边键值对的值，属性名只起到了匹配的作用，真正的变量其实是左边的值
	let { foo: baz ,asd:bar} = { foo: "aaa", bar: "bbb" };
	baz // "aaa"
	foo // error: foo is not defined
	bar //undefined
	asd // error: asd is not defined
}

function case1_4(){
	//嵌套结构的对象的解构赋值
	let obj = {
	  p: [
	    'Hello',
	    { y: 'World' }
	  ]
	};

	let { p, p: [x, { y }] } = obj;
	x // "Hello"
	y // "World"
	p // ["Hello", {y: "World"}]
}

function case1_5(){
	//对象的解构 键只起到匹配模式的作用，真正被赋值的目标是值 
	//如下面的例子只有 loc start line才是被赋值的目标
	const node = {
	  loc: {
	    start: {
	      line: 1,
	      column: 5
	    }
	  }
	};

	let { loc, loc: { start }, loc: { start: { line }} } = node;
	line // 1
	loc  // Object {start: Object}
	start // Object {line: 1, column: 5}
}

function case1_6(){
	//又一个嵌套赋值的例子
	let obj = {};
	let arr = [];

	({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

	obj // {prop:123}
	arr // [true]
}



// ##对象的解构指定默认值
function case2_1(){
	var {x = 3} = {};
	x // 3

	var {x, y = 5} = {x: 1};
	x // 1
	y // 5

	var {x: y = 3} = {};
	y // 3

	var {x: y = 3} = {x: 5};
	y // 5

	var { message: msg = 'Something went wrong' } = {};
	msg // "Something went wrong"
}

function case2_2(){
	//默认值生效的条件是，对象的属性值严格等于undefined。
	var {x = 3} = {x: undefined};
	x // 3

	var {x = 3} = {x: null};
	x // null
}


// ##对已申名的变量进行解构需要注意
function case3_1(){
	//错误的写法
	//这里的{x}会被理解成代码块，从而发生语法错误
	let x;
	//{x} = {x: 1};// SyntaxError: syntax error 虽然没执行这里的方法，但node执行的时候会报错，所以先注释掉。可能node有静态语法检查

	//正确的写法
	//只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。
	let x;
	({x} = {x: 1});
}

// ##对象解构赋值的其他应用
function case4_1(){
	//上面代码将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。
	let { log, sin, cos,PI} = Math;
	console.log(sin(.5*PI))
	console.log(PI)
}
