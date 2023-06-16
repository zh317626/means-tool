declare const _default: {
    regular: {
        phone(phone: string): Boolean;
        identityCard(card: string): Boolean;
    };
    files: {
        getImageInfo(imgUrl: String): Promise<unknown>;
        base64toFile(base: String, filename?: any): File;
    };
    means: {
        urlToObjet(url: string): Object;
        ascii(obj?: Object): any;
    };
};
export default _default;
