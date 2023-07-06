(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.utilibs = factory());
})(this, (function () { 'use strict';

  // 常用方法
  let throttleTimer = 0;
  let shakeTimer = 0;
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
       * 最大值
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
      },
      /**
       * 节流
       * @param fn 函数
       * @param time 时间
       */
      throttle(fn, time = 500) {
          if (typeof fn !== 'function')
              return console.warn('节流函数参数一，必须是函数');
          // 将this指向赋值   此时的 this 指向的是 实例 button
          let context = this;
          // 获取传过来的值
          let ages = arguments;
          // 清除定时器
          if (!throttleTimer) { // 判定timer没有数值
              // 声明一个定时器
              throttleTimer = setTimeout(() => {
                  // 在定时器里面调用需要 节流的函数
                  fn.call(context, ages);
                  // 如果执行到这儿的是否需要把 timer 初始化 为null  ;便于下次判断
                  clearTimeout(throttleTimer);
                  throttleTimer = 0;
              }, time);
          }
      },
      /**
       * 防抖
       * @param fn 函数
       * @param time 时间
       */
      shake(fn, time = 500) {
          if (typeof fn !== 'function')
              return console.warn('防抖函数参数一，必须是函数');
          const context = this;
          let ages = arguments;
          if (shakeTimer)
              clearTimeout(shakeTimer);
          shakeTimer = setTimeout(() => {
              // 在定时器里面调用需要 防抖的函数
              fn.call(context, ages);
          }, time);
      }
  };

  const Person = function () { };
  Person.prototype = means;
  // let meansItem = new Person();
  var index = new Person();
  // export default {
  //   ...regular,
  //   ...files,
  //   ...means
  // };

  return index;

}));
//# sourceMappingURL=index.js.map
