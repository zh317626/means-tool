
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

- 📢 x 表示没有参数
- ☀️ string|number等表示有参数或者数据类型
- 💸 1或者true等表示该参数的默认值
- 🍫 ?意思是可以为空

| method/方法 | explain/说明 | 参数1 | 参数2 |  参数3  | 参数4 | 返回类型 |
| --- | --- | --- | --- | --- | --- | --- |
| **1、means** |  |  |  |  |   |   |  
| urlToObjet | url链接转对象 | string | x | x | x | Object |  
| ascii | ASCII sort | string | x | x | x | string  |  
| trim | 清除字符串空格 | string |  1  | x | x | string |  
| randomColor | 随机16进制颜色 | x | x  | x | x  | string  |  
| max | 最大值 | Array | string?  | x | x  | string  |  
| min | 最小值 | Array | string?  | x | x  | string  |  
| **2、regular** |  |  |  |    |   |   |  
| phone | 电话号码验证 | string | x | x | x | Boolean |  
| identityCard | 身份证验证 | string | x | x | x | Boolean |  
| **3、files** |  |  |  |     |   |   |  
| getImageInfo | 获取图片信息 | string | x | x | x | Promise |  
| base64toFile | base64转file文件 | string | x | x | x | file对象 |  


❤️ Common front-end methods will continue to be updated
