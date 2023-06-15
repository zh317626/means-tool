
## describe

Common methods of front-end development

The plug-in is mainly for the front-end work of some common methods of encapsulation and some regular and file simple processing

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
| getImageInfo | 获取图片信息 | string | Promise |
| base64toFile | base64转file文件 | string | file对象 |
| urlToObjet | url链接转对象 | string | Object  |


Common front-end methods will continue to be updated