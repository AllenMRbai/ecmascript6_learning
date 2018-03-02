// ##基本使用
function case1_1(){
	let s = 'Hello world!';

	s.startsWith('Hello') // true
	s.endsWith('!') // true
	s.includes('o') // true
}

function case1_2(){
	//第二个参数表示开始搜索的位置
	let s = 'Hello world!';

	s.startsWith('world', 6) // true
	s.endsWith('Hello', 5) // true
	s.includes('Hello', 6) // false
}