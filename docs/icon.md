---
title: icon组件
category: 组件
publishDate: 2018-08-21
tags:
  - components
  - icon
---

mobile端icon组件

---

### 基本用法

```jsx harmony
import React from 'react';
import {Icon} from 'pile-ui'

ReactDOM.render(
  <div>
    <Icon type='artboardAdd' />{' '}
    <Icon type='artboardReduce' />{' '}
    <Icon type='batchExport' />{' '}
  </div>,
  mountNode
);
```

```jsx
import React from 'react';
import {Icon} from 'pile-ui'

ReactDOM.render(
  <div>
    <Icon type='artboardAdd' />{' '}
    <Icon type='artboardReduce' />{' '}
    <Icon type='batchExport' />{' '}
  </div>,
  mountNode
);
```

### size

> icon组件大小

**场景** : 暂无

> **note**
>
> small => 24px, normal => 32px, large => 48px

```jsx harmony
import React from 'react';
import {Icon} from 'pile-ui'

ReactDOM.render(
  <div>
    <Icon type='artboardAdd' size="small" />{' '}
    <Icon type='artboardReduce' />{' '}
    <Icon type='batchExport' size="large" />{' '}
  </div>,
  mountNode
);
```

```jsx
import React from 'react';
import {Icon} from 'pile-ui'

ReactDOM.render(
  <div>
    <Icon type='artboardAdd' size="small" />{' '}
    <Icon type='artboardReduce' />{' '}
    <Icon type='batchExport' size="large" />{' '}
  </div>,
  mountNode
);
```

### 使用svg引入更多图形

引入[pile-icons](https://www.npmjs.com/package/pile-icons) 获取更多icon

**场景** : 暂无

> **note**
>
>  按需加载引入**svg**图标，使用webpack插件[babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)
>
>  生成svg-sprite，使用webpack插件[svg-sprite-loader](https://www.npmjs.com/package/svg-sprite-loader)
>
>  更多使用方法，请参考[pile-icons](https://www.npmjs.com/package/pile-icons)




```jsx harmony
import React from 'react';
import {Icon} from 'pile-ui'
import * as icons from 'pile-icons'

ReactDOM.render(
  <div>
    <Icon svg={icons.contactPhoneSvg} />{' '}
    <Icon svg={icons.carSvg} />{' '}
    <Icon svg={icons.editorSvg} />{' '}
    <Icon svg={icons.tripStarSvg} />{' '}
    <Icon svg={icons.userSvg} />{' '}
    <Icon svg={icons.walletSvg} />{' '}
  </div>,
  mountNode
);
```

```jsx
import React from 'react';
import {Icon} from 'pile-ui'
import {contactPhoneSvg, carSvg, editorSvg, tripStarSvg, userSvg, walletSvg} from 'pile-icons'

ReactDOM.render(
  <div>
    <Icon svg={contactPhoneSvg} />{' '}
    <Icon svg={carSvg} />{' '}
    <Icon svg={editorSvg} />{' '}
    <Icon svg={tripStarSvg} />{' '}
    <Icon svg={userSvg} />{' '}
    <Icon svg={walletSvg} />{' '}
  </div>,
  mountNode
);
```

## API

### props

|   参数    |   类型   |   默认  |   说明     |
|-----------|----------|------------|-------------------|
| type  |  string  |  -      | artboardAdd/artboardReduce/batchExport |
| size  |  string  |  normal      | small/normal/large |
| svg  |  SpriteSymbol<id: string, viewBox: string, content: string>  |  -      | 使用[svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader)  creating SVG sprites |
