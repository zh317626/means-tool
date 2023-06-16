declare const _default: {
    /**
     * 电话号码验证
     * @param {*} phone
     * @returns
     */
    phone(phone: string): Boolean;
    /**
     * 身份证验证
     * @param {*} card 可验证一二代身份证
     * @returns
     */
    identityCard(card: string): Boolean;
};
export default _default;
