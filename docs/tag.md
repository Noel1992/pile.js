---
title: tag标签
category: 组件
publishDate: 2018-08-22
tags:
  - components
  - tag
---

mobile端标签控件

---

### 基本用法

```jsx harmony
import React from 'react';
import {Tag} from 'pile-ui'

ReactDOM.render(
  <div>
    <Tag>Normal</Tag>{' '}
    <Tag type='primary'>Primary</Tag>{' '}
    <Tag type='success'>Success</Tag>{' '}
    <Tag type='info'>Info</Tag>{' '}
    <Tag type='warning'>Warning</Tag>{' '}
    <Tag type='danger'>Danger</Tag>{' '}
  </div>,
  mountNode
);
```

```js
import React from 'react';
import {Tag} from 'pile-ui'

ReactDOM.render(
  <div>
    <Tag>Normal</Tag>{' '}
    <Tag type='primary'>Primary</Tag>{' '}
    <Tag type='success'>Success</Tag>{' '}
    <Tag type='info'>Info</Tag>{' '}
    <Tag type='warning'>Warning</Tag>{' '}
    <Tag type='danger'>Danger</Tag>{' '}
  </div>,
  mountNode
);
```

### 反转

> 背景color和字体color互换

**场景** :清爽风格的按钮

> **note**
>
> 使用`reverse`来反转，`reverse`一般与`type`同时使用


```jsx harmony
import React from 'react';
import {Tag} from 'pile-ui'

ReactDOM.render(
  <div>
    <Tag>Normal</Tag>{' '}
    <Tag type='primary' reverse>Primary</Tag>{' '}
    <Tag type='success' reverse>Success</Tag>{' '}
    <Tag type='info' reverse>Info</Tag>{' '}
    <Tag type='warning' reverse>Warning</Tag>{' '}
    <Tag type='danger' reverse>Danger</Tag>
  </div>,
  mountNode
);
```

```js
import React from 'react';
import {Tag} from 'pile-ui'

ReactDOM.render(
  <div>
    <Tag>Normal</Tag>{' '}
    <Tag type='primary' reverse>Primary</Tag>{' '}
    <Tag type='success' reverse>Success</Tag>{' '}
    <Tag type='info' reverse>Info</Tag>{' '}
    <Tag type='warning' reverse>Warning</Tag>{' '}
    <Tag type='danger' reverse>Danger</Tag>
  </div>,
  mountNode
);
```

### 带关闭按钮的标签

```jsx harmony
import React from 'react';
import {Tag} from 'pile-ui'

ReactDOM.render(
  <div>
    <Tag closeable>Normal</Tag>{' '}
    <Tag type='primary' onClose={(e)=>{console.log(123)}} closeable>Primary</Tag>{' '}
  </div>,
  mountNode
);
```

```js
import React from 'react';
import {Tag} from 'pile-ui'

ReactDOM.render(
  <div>
    <Tag closeable>Normal</Tag>{' '}
    <Tag type='primary'  onClose={()=>{console.log(123)}} closeable>Primary</Tag>{' '}
  </div>,
  mountNode
);
```

### 虚边框

> 虚线边框的按钮

**场景** : 一般见于动态添加表单项

> **note**
>
> 与`type`使用时，需要`reverse`一同使用，因为虚边框的背景色要保证与边框色不要撞色。


```jsx harmony
import React from 'react';
import {Tag} from 'pile-ui'

ReactDOM.render(
  <div>
    <Tag dashed>Normal</Tag>{' '}
    <Tag type='primary' reverse dashed>Primary</Tag>{' '}
    <Tag type='success' reverse dashed>Success</Tag>{' '}
    <Tag type='info' reverse dashed>Info</Tag>{' '}
    <Tag type='warning' reverse dashed>Warning</Tag>{' '}
    <Tag type='danger' reverse dashed>Danger</Tag>
  </div>,
  mountNode
);
```

```js
import React from 'react';
import {Tag} from 'pile-ui'

ReactDOM.render(
  <div>
    <Tag dashed>Normal</Tag>{' '}
    <Tag type='primary' reverse dashed>Primary</Tag>{' '}
    <Tag type='success' reverse dashed>Success</Tag>{' '}
    <Tag type='info' reverse dashed>Info</Tag>{' '}
    <Tag type='warning' reverse dashed>Warning</Tag>{' '}
    <Tag type='danger' reverse dashed>Danger</Tag>
  </div>,
  mountNode
);
```
## API

### props

|   参数    |   类型   |   默认  |   说明     |
|-----------|----------|------------|-------------------|
| type  |  string    |  -      | primary/dashed/success/info/warning/danger |
| reverse  |  boolean  |  false      | 将文本color与背景color反转，并设置背景color为透明 |
| dashed  | boolean | fase | 按钮设置为dashed状态，需要设置reverse=true，保证background为'#fff' |
| href  | string | -  | 以`a`标签渲染组件   |
| visible     | boolean     |  true    | 按钮的显示状态 |
| closeable     | boolean     |  false    | 关闭按钮的显示状态 |
| onClose     | boolean     |  Function    | 关闭按钮点击后回调 |

