(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.utilibs = {}));
})(this, (function (exports) { 'use strict';

  // 正则
  var regular = {};

  var files = {
      /**
     * 获取图片大小
     * @param imgUrl 图片链接
     * @returns Promise
     */
      getImageInfo(imgUrl) {
          return new Promise((resolve, reject) => {
              let img = new Image();
              img.onload = () => {
                  resolve(img);
              };
              img.onerror = () => {
                  reject();
              };
              img.src = imgUrl;
          });
      },
      /**
       * 将base64转为file文件
       * @param {*} base base64
       * @param {*} filename 名字
       * @returns file对象
       */
      base64toFile(base, filename = new Date().getTime()) {
          var arr = base.split(',');
          var mime = arr[0].match(/:(.*?);/)[1];
          var suffix = mime.split("/")[1];
          var bstr = atob(arr[1]);
          var n = bstr.length;
          var u8arr = new Uint8Array(n);
          while (n--) {
              u8arr[n] = bstr.charCodeAt(n);
          }
          //转换成file对象
          return new File([u8arr], `${filename}.${suffix}`, { type: mime });
      }
  };

  // 常用方法
  var means = {
      /**
       * url转对象
       * @param {*} url
       * @returns 对象
       */
      urlToObjet(url) {
          let theRequest = new Object();
          if (url.indexOf("?") != -1) {
              let strs = url.split("?");
              if (strs.length > 1) {
                  strs = strs[1].split("&");
                  for (let i = 0; i < strs.length; i++) {
                      theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
                  }
              }
          }
          return theRequest;
      }
  };

  exports.files = files;
  exports.means = means;
  exports.regular = regular;

}));
//# sourceMappingURL=index.js.map
