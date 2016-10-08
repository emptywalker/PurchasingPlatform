
//这个文件是用于放一些全局的变量， 便于修改
var apiBase = 'https://dev-api2.toomao.com';
//初次对JS中的exports关键字的使用
exports.serverPath = function() {
	// console.log(apiBase);
	return apiBase;
}

//所有价格的保留位数
var toFixedNum = 2;
exports.fixedNum = function () {
	// body...
	return toFixedNum;
}


