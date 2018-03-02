function case1_1(){
	//es5的charAt会把4字节的字符拆成两份
	var s = "𠮷";

	s.length // 2
	s.charAt(0) // ''
	s.charAt(1) // ''
	s.charCodeAt(0) // 55362 UTF-16编码为0xD842
	s.charCodeAt(1) // 57271 UTF-16编码为0xDFB7
	console.log(s[0])
}

function case1_2(){
	//es6的codePointAt可以正确获得一个字符码点，但很明显也会把一个字符拆开
	let s = '𠮷a';

	let p0=s.codePointAt(0) // 134071
	let p1=s.codePointAt(1) // 57271

	let p2=s.codePointAt(2) // 97
	console.log(p0)
	console.log(p0.toString(16))//将10进制的码点转为16进制
}

function case1_3(){
	//可以用for...of来配合codePointAt使用
	let s = '𠮷a';
	for (let ch of s) {
	  console.log(ch.codePointAt(0).toString(16));
	}
	// 20bb7
	// 61
}

function case1_4(){
	//测试字符是两个字节还是四个字节组成
	function is32Bit(c) {
	  return c.codePointAt(0) > 0xFFFF;
	}

	is32Bit("𠮷") // true
	is32Bit("a") // false
}
