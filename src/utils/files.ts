
export default {
  /**
 * Get picture information
 * @param imgUrl 图片链接
 * @returns Promise
 */
  getImageInfo(imgUrl: String) {
    return new Promise((resolve: Function, reject: Function) => {
      let img: any = new Image()
      img.onload = () => {
        resolve(img)
      }
      img.onerror = () => {
        reject()
      }
      img.src = imgUrl
    })
  },

  /**
   * Convert base64 to file
   * @param {*} base base64
   * @param {*} filename 名字
   * @returns file object
   */
  base64toFile(base: String, filename: any = new Date().getTime()) {
    var arr: any = base.split(',');
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