// ##函数参数的解构
function case1_1(){
	function add([x, y]){
	  return x + y;
	}

	add([1, 2]); // 3
}

function case1_2(){
	[[1, 2], [3, 4]].map(([a, b]) => a + b);
	// [ 3, 7 ]
}

function test(){
	function asd([x,y]){
		return x+y;
	}
	console.log(asd(5,6)) //TypeError: undefined is not a function 
}

function case1_3(){
	//使用默认值
	function move({x = 0, y = 0} = {}) {
	  return [x, y];
	}

	move({x: 3, y: 8}); // [3, 8]
	move({x: 3}); // [3, 0]
	move({}); // [0, 0]
	move(); // [0, 0]
}