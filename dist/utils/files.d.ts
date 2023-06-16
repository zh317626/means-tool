declare const _default: {
    /**
   * Get picture information
   * @param imgUrl 图片链接
   * @returns Promise
   */
    getImageInfo(imgUrl: String): Promise<unknown>;
    /**
     * Convert base64 to file
     * @param {*} base base64
     * @param {*} filename 名字
     * @returns file object
     */
    base64toFile(base: String, filename?: any): File;
};
export default _default;
