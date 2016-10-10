
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

//统一设备宽度
var deviceWidth = 750;
exports.deviceWidth = function (thisObj) {
	// 获取设备宽度
	// var deviceWidth = thisObj.$getConfig().env.deviceWidth;
	return 750;
}


//获取navigator URL
var bundleUrl = '';
exports.bundleUrl = function (thisObj) {

			var dir = 'examples';
			var bundleUrl = thisObj.$getConfig().bundleUrl;
            bundleUrl = new String(bundleUrl);

            var nativeBase;
            var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

            var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
            if (isAndroidAssets) {
              nativeBase = 'file://assets/';
            }
            else if (isiOSAssets) {
              nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
            }
            else {
             //http://127.0.0.1:12580/examples/build/reading.js
              var host = 'localhost:12580';
              var matches = /\/\/([^\/]+?)\//.exec(thisObj.$getConfig().bundleUrl);
              if (matches && matches.length >= 2) {
                host = matches[1];
              }
              //nativeBase = 'http://' + host + '/weex_tmp/h5_render/';
              nativeBase = 'http://' + host + '/' + dir + '/build/';
            }
            // 暂时没有理解这边路径的设置
            var h5Base = './index.html?page=./' + dir + '/build/';
            //Native端
            var base = nativeBase;
            //H5端  
            if (typeof window === 'object') {
              base = h5Base;
            }
            return base;
}


