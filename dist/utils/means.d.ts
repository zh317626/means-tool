declare const _default: {
    /**
     * url-to-object
     * @param {*} url
     * @returns object
     */
    urlToObjet(url: string): Object;
    /**
     * ASCII sort
     * @param {*} obj 对象
     * @returns string
     */
    ascii(obj?: Object): string | any;
    /**
     * 清除字符串空格
     * @param str 字符串
     * @param type 1:所有;2:前后;3:前;4:后
     * @returns string
     */
    trim(str: string, type?: number | string): string;
    /**
     * 随机生成16进制颜色
     * @returns
     */
    randomColor(): string;
};
export default _default;
