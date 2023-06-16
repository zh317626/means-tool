// 常用方法
export default {
  /**
   * url-to-object
   * @param {*} url 
   * @returns object
   */
  urlToObjet(url: string): Object {
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
  ascii(obj: Object = {}): string | any {
    // throw 'Object cannot be null'
    // if (!Object.keys(obj).length) return console.error('Object cannot be null'); // 对象不能为空
    if (!Object.keys(obj).length) return console.warn('Object cannot be null'); // 对象不能为空
    // if (!Object.keys(obj).length) throw new Error('对象不能为空'); // 对象不能为空
    let arr = new Array();
    let num: number = 0;
    for (let i in obj) {
      arr[num] = i;
      num++;
    };
    let sortArr = arr.sort();
    let str: string = ''; //自定义排序字符串
    for (let i in sortArr) {
      str += sortArr[i] + obj[sortArr[i]];
    };
    return str;
  },

  /**
   * 清除字符串空格
   * @param str 字符串
   * @param type 1:所有;2:前后;3:前;4:后
   * @returns string
   */
  trim(str: string, type: number | string = 1): string {
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
  randomColor(): string {
    let letters: string = '0123456789ABCDEF';
    let color: string = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}