
// 正则
export default {

  /**
   * 电话号码验证
   * @param {*} phone
   * @returns
   */
  phone(phone: string):Boolean {
    const mPattern =
      /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
    return mPattern.test(phone);
  },

  /**
   * 身份证验证
   * @param {*} card 可验证一二代身份证
   * @returns
   */
  identityCard(card: string):Boolean {
    const cardID =
      /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/;
    return cardID.test(card);
  }
}