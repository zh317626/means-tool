
## describe

Common methods of front-end development

🔥 This plug-in is mainly for the front-end work of some common methods of encapsulation and some common RE and file format processing 🎉

✨
📢
⭐        🍋
☀️        🍫
💸        🧸
🚀 💪 🌍 🏡

### install

```
npm install means-tool
```

### introduce

```
import { files, means, regular } from 'means-tool' // or
import { files, means, regular } from 'means-tool/dist'
```

### employ

```
means.urlToObjet('https://********index?id=1131goods=494')
```

### API

| method/方法 | explain/说明 | type/类型 | 返回值 |
| --- | --- | --- | --- |
| **means** | --- | --- | --- |
| urlToObjet | url链接转对象 | string | Object  |
| ascii | ASCII sort | string | string  |
| **regular** | --- | --- | --- |
| phone | 电话号码验证 | string | Boolean |
| base64toFile | 身份证验证 | string | Boolean |
| **files** | --- | --- | --- |
| getImageInfo | 获取图片信息 | string | Promise |
| base64toFile | base64转file文件 | string | file对象 |


❤️ Common front-end methods will continue to be updated