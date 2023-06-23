(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.utilibs = factory());
})(this, (function () { 'use strict';

  // 正则
  var regular = {
      /**
       * 电话号码验证
       * @param {*} phone
       * @returns
       */
      phone(phone) {
          const mPattern = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
          return mPattern.test(phone);
      },
      /**
       * 身份证验证
       * @param {*} card 可验证一二代身份证
       * @returns
       */
      identityCard(card) {
          const cardID = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/;
          return cardID.test(card);
      }
  };

  var files = {
      /**
     * Get picture information
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
       * Convert base64 to file
       * @param {*} base base64
       * @param {*} filename 名字
       * @returns file object
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
       * url-to-object
       * @param {*} url
       * @returns object
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
      },
      /**
       * ASCII sort
       * @param {*} obj 对象
       * @returns string
       */
      ascii(obj = {}) {
          // throw 'Object cannot be null'
          // if (!Object.keys(obj).length) return console.error('Object cannot be null'); // 对象不能为空
          if (!Object.keys(obj).length)
              return console.warn('Object cannot be null'); // 对象不能为空
          // if (!Object.keys(obj).length) throw new Error('对象不能为空'); // 对象不能为空
          let arr = new Array();
          let num = 0;
          for (let i in obj) {
              arr[num] = i;
              num++;
          }
          let sortArr = arr.sort();
          let str = ''; //自定义排序字符串
          for (let i in sortArr) {
              str += sortArr[i] + obj[sortArr[i]];
          }
          return str;
      },
      /**
       * 清除字符串空格
       * @param str 字符串
       * @param type 1:所有;2:前后;3:前;4:后
       * @returns string
       */
      trim(str, type = 1) {
          switch (type) {
              case 1:
                  return str.replace(/\s+/g, "");
              case 2:
                  return str.replace(/(^\s*)|(\s*$)/g, "");
              case 3:
                  return str.replace(/(^\s*)/g, "");
              case 4:
                  return str.replace(/(\s*$)/g, "");
              default:
                  return str;
          }
      },
      /**
       * 随机生成16进制颜色
       * @returns
       */
      randomColor() {
          let letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
      },
      /**
       * 获取最大值
       * @param arr 数组
       * @param key key值
       * @returns
       */
      max(arr, key) {
          if (!arr.length)
              return console.warn('数组不能为空');
          const isKeyObj = arr.some(item => { return Object.keys(item).length; });
          if (isKeyObj && !key)
              return console.warn('key值不能为空');
          let maxs = 0;
          if (!isKeyObj) { // 一维数组
              maxs = arr.reduce((one, pro) => { return one < pro ? pro : one; });
          }
          else if (key) {
              if (!arr.some(item => { return item[key]; }))
                  return console.warn(`Not found ${key} fields`);
              maxs = arr.reduce((one, pro) => { return one[key] < pro[key] ? pro : one; })[key];
          }
          return maxs;
      },
      /**
       * 最小值
       * @param arr 数组
       * @param key key值
       * @returns
       */
      min(arr = [], key) {
          if (!arr.length)
              return console.warn('数组不能为空');
          const isKeyObj = arr.some(item => { return Object.keys(item).length; });
          if (isKeyObj && !key)
              return console.warn('key值不能为空');
          let mins = 0;
          if (!isKeyObj) {
              mins = arr.reduce((one, pro) => { return one > pro ? pro : one; });
          }
          else if (key) {
              if (!arr.some(item => { return item[key]; }))
                  return console.warn(`Not found ${key} fields`);
              mins = arr.reduce((one, pro) => { return one[key] > pro[key] ? pro : one; })[key];
          }
          return mins;
      }
  };

  var index = {
      regular,
      files,
      means
  };

  return index;

}));
//# sourceMappingURL=index.js.map
