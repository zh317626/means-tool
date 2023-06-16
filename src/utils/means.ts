// 常用方法
export default {
  /**
   * url-to-object
   * @param {*} url 
   * @returns object
   */
  urlToObjet(url: string):Object {
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
  ascii(obj: Object = {}):string | any {
    // throw 'Object cannot be null'
    // if (!Object.keys(obj).length) return console.error('Object cannot be null'); // 对象不能为空
    if (!Object.keys(obj).length) return console.warn('Object cannot be null'); // 对象不能为空
    // if (!Object.keys(obj).length) throw new Error('对象不能为空'); // 对象不能为空
    let arr = new Array();
    let num:number = 0;
    for (let i in obj) {
      arr[num] = i;
      num++;
    };
    let sortArr = arr.sort();
    let str:string = ''; //自定义排序字符串
    for (let i in sortArr) {
      str += sortArr[i] + obj[sortArr[i]];
    };
    return str;
  }
}