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
    /**
     * 最大值
     * @param arr 数组
     * @param key key值
     * @returns
     */
    max(arr: any[], key?: string): string | number | void;
    /**
     * 最小值
     * @param arr 数组
     * @param key key值
     * @returns
     */
    min(arr?: any[], key?: string): string | number | void;
    /**
     * 节流
     * @param fn 函数
     * @param time 时间
     */
    throttle(fn: Function, time?: number): void;
    /**
     * 防抖
     * @param fn 函数
     * @param time 时间
     */
    shake(fn: Function, time?: number): void;
};
export default _default;
