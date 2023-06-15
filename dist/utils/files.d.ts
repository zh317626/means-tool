declare const _default: {
    /**
   * 获取图片大小
   * @param imgUrl 图片链接
   * @returns Promise
   */
    getImageInfo(imgUrl: String): Promise<unknown>;
    /**
     * 将base64转为file文件
     * @param {*} base base64
     * @param {*} filename 名字
     * @returns file对象
     */
    base64toFile(base: String, filename?: any): File;
};
export default _default;
