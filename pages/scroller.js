

function scroll_rightmost() {
	console.log("begin scrolling");
	
	
	try {
		// var element = document.getElementById("caption_kreise");
		var element = document.getElementById("tablediv_kreise");
		//console.log(element);
		// var sLeft = element.scrollLeft;
		// console.log(sLeft);
		element.scrollLeft=2000;
	} catch { };
	
	
	try{
		var element = document.getElementById("tablediv_bundeslaender");
		element.scrollLeft=2000;
	} catch { };
}
	
	
