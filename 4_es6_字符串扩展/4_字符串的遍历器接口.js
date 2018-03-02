// ##ES6 为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历。
function case1_1(){
	for (let codePoint of 'foo') {
	  console.log(codePoint)
	}
	// "f"
	// "o"
	// "o"
}

function case1_2(){
	//这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。
	let text = String.fromCodePoint(0x20BB7);

	for (let i = 0; i < text.length; i++) {
	  console.log(text[i]);
	}
	// " "
	// " "

	for (let i of text) {
	  console.log(i);
	}
	// "𠮷"
}