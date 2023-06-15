// 常用方法
export default {
  /**
   * url-to-object
   * @param {*} url 
   * @returns object
   */
  urlToObjet(url: string) {
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
}