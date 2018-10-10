---
title: button按钮
category: 组件
publishDate: 2018-07-27
tags:
  - components
  - button
---

mobile端按钮控件

---

### 基本用法

```jsx harmony
import React from 'react';
import {Button} from 'pile-ui'

ReactDOM.render(
  <div>
    <Button>Normal</Button>{' '}
    <Button type='primary'>Primary</Button>{' '}
    <Button type='success'>Success</Button>{' '}
    <Button type='info'>Info</Button>{' '}
    <Button type='warning'>Warning</Button>{' '}
    <Button type='danger'>Danger</Button>{' '}
  </div>,
  mountNode
);
```

```js
import React from 'react';
import {Button} from 'pile-ui'

ReactDOM.render(
  <div>
    <Button>Normal</Button>{' '}
    <Button type='primary'>Primary</Button>{' '}
    <Button type='success'>Success</Button>{' '}
    <Button type='info'>Info</Button>{' '}
    <Button type='warning'>Warning</Button>{' '}
    <Button type='danger'>Danger</Button>{' '}
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
import {Button} from 'pile-ui'

ReactDOM.render(
  <div>
    <Button>Normal</Button>{' '}
    <Button type='primary' reverse>Primary</Button>{' '}
    <Button type='success' reverse>Success</Button>{' '}
    <Button type='info' reverse>Info</Button>{' '}
    <Button type='warning' reverse>Warning</Button>{' '}
    <Button type='danger' reverse>Danger</Button>
  </div>,
  mountNode
);
```

```js
import React from 'react';
import {Button} from 'pile-ui'

ReactDOM.render(
  <div>
    <Button>Normal</Button>{' '}
    <Button type='primary' reverse>Primary</Button>{' '}
    <Button type='success' reverse>Success</Button>{' '}
    <Button type='info' reverse>Info</Button>{' '}
    <Button type='warning' reverse>Warning</Button>{' '}
    <Button type='danger' reverse>Danger</Button>
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
import {Button} from 'pile-ui'

ReactDOM.render(
  <div>
    <Button dashed>Normal</Button>{' '}
    <Button type='primary' reverse dashed>Primary</Button>{' '}
    <Button type='success' reverse dashed>Success</Button>{' '}
    <Button type='info' reverse dashed>Info</Button>{' '}
    <Button type='warning' reverse dashed>Warning</Button>{' '}
    <Button type='danger' reverse dashed>Danger</Button>
  </div>,
  mountNode
);
```

```js
import React from 'react';
import {Button} from 'pile-ui'

ReactDOM.render(
  <div>
    <Button dashed>Normal</Button>{' '}
    <Button type='primary' reverse dashed>Primary</Button>{' '}
    <Button type='success' reverse dashed>Success</Button>{' '}
    <Button type='info' reverse dashed>Info</Button>{' '}
    <Button type='warning' reverse dashed>Warning</Button>{' '}
    <Button type='danger' reverse dashed>Danger</Button>
  </div>,
  mountNode
);
```

### 文本按钮

> 纯文字的按钮

**场景** : 一段文字里面的链接或者动作

> **note**
>
> 使用`text`时，需要与`reverse`一同使用，因为纯文本按钮的背景color和边框color都是透明色，需要保证字体color不能与背景color撞色

```jsx harmony
import React from 'react';
import {Button} from 'pile-ui'

ReactDOM.render(
  <div>
    <Button text>Normal</Button>{' '}
    <Button type='primary' reverse text>Primary</Button>{' '}
    <Button type='success' reverse text>Success</Button>{' '}
    <Button type='info' reverse text>Info</Button>{' '}
    <Button type='warning' reverse text>Warning</Button>{' '}
    <Button type='danger' reverse text>Danger</Button>
  </div>,
  mountNode
);
```

```jsx
import React from 'react';
import {Button} from 'pile-ui'

ReactDOM.render(
  <div>
    <Button text>Normal</Button>{' '}
    <Button type='primary' reverse text>Primary</Button>{' '}
    <Button type='success' reverse text>Success</Button>{' '}
    <Button type='info' reverse text>Info</Button>{' '}
    <Button type='warning' reverse text>Warning</Button>{' '}
    <Button type='danger' reverse text>Danger</Button>
  </div>,
  mountNode
);
```

### size

> 不同大小。默认提供`small`, `large`两种

**场景** : 小按钮或者突出显示的大按钮

```jsx harmony
import React from 'react';
import {Button} from 'pile-ui'

ReactDOM.render(
  <div>
    <Button>Normal</Button>{' '}
    <Button type='primary' size='small'>Primary</Button>{' '}
    <Button type='success' size='large'>Success</Button>{' '}
    <Button type='info' reverse >Info</Button>{' '}
    <Button type='warning' reverse size='small'>Warning</Button>{' '}
    <Button type='danger' reverse size='large'>Danger</Button>
  </div>,
  mountNode
);
```

```jsx
import React from 'react';
import {Button} from 'pile-ui'

ReactDOM.render(
  <div>
    <Button>Normal</Button>{' '}
    <Button type='primary' size='small'>Primary</Button>{' '}
    <Button type='success' size='large'>Success</Button>{' '}
    <Button type='info' reverse >Info</Button>{' '}
    <Button type='warning' reverse size='small'>Warning</Button>{' '}
    <Button type='danger' reverse size='large'>Danger</Button>
  </div>,
  mountNode
);
```

### block

> 块状button,填充parent

**场景** : 页面独立操作按钮

```jsx harmony
import React from 'react';
import {Button} from 'pile-ui'

ReactDOM.render(
  <div className='demo-button' >
    <Button block>Normal</Button>{' '}
    <Button type='primary' block>Primary</Button>{' '}
    <Button type='success' block>Success</Button>{' '}
    <Button type='info' reverse block>Info</Button>{' '}
    <Button type='warning' reverse block>Warning</Button>{' '}
    <Button type='danger' reverse block>Danger</Button>
  </div>,
  mountNode
);
```

```jsx
import React from 'react';
import {Button} from 'pile-ui'

ReactDOM.render(
  <div className='demo-button' >
    <Button block>Normal</Button>{' '}
    <Button type='primary' block>Primary</Button>{' '}
    <Button type='success' block>Success</Button>{' '}
    <Button type='info' reverse block>Info</Button>{' '}
    <Button type='warning' reverse block>Warning</Button>{' '}
    <Button type='danger' reverse block>Danger</Button>
  </div>,
  mountNode
);
```

### disabled

> 按钮禁用状态

**场景** : 禁用按钮点击事件

```jsx harmony
import React from 'react';
import {Button} from 'pile-ui'

ReactDOM.render(
  <div>
    <Button disabled>Normal</Button>{' '}
    <Button type='primary' disabled>Primary</Button>{' '}
    <Button type='success' disabled>Success</Button>{' '}
    <Button type='info' disabled>Info</Button>{' '}
    <Button type='warning' disabled>Warning</Button>{' '}
    <Button type='danger' disabled>Danger</Button>{' '}
  </div>,
  mountNode
);
```

```jsx
import React from 'react';
import {Button} from 'pile-ui'

ReactDOM.render(
  <div>
    <Button disabled>Normal</Button>{' '}
    <Button type='primary' disabled>Primary</Button>{' '}
    <Button type='success' disabled>Success</Button>{' '}
    <Button type='info' disabled>Info</Button>{' '}
    <Button type='warning' disabled>Warning</Button>{' '}
    <Button type='danger' disabled>Danger</Button>{' '}
  </div>,
  mountNode
);
```

### icon

> 带icon图标的button

**场景** : 禁用按钮点击事件

```jsx harmony
import React from 'react';
import {Button, Icon} from 'pile-ui'
import {leftSvg, rightSvg, search2Svg, editorSvg, deleteSvg} from 'pile-icons'

ReactDOM.render(
  <div>
    <Button disabled>Normal</Button>{' '}
    <Button icon={<Icon type='artboardAddSvg' />} type='primary' disabled>Primary</Button>{' '}
    <Button><Icon svg={leftSvg} />上一页</Button>{' '}
    <Button><Icon svg={rightSvg} />下一页</Button>{' '}
    <Button icon={<Icon svg={search2Svg} />} type='primary' disabled>Primary</Button>{' '}
    <Button type='success'><Icon svg={search2Svg} />{' '}搜索</Button>{' '}
    <Button><Icon svg={editorSvg} /></Button>{' '}
    <Button><Icon svg={deleteSvg} /></Button>{' '}
    <Button type='success' disabled>Success</Button>{' '}
    <Button type='info' disabled>Info</Button>{' '}
    <Button type='warning' disabled>Warning</Button>{' '}
    <Button type='danger' disabled>Danger</Button>{' '}
  </div>,
  mountNode
);
```


## API

### props

|   参数    |   类型   |   默认  |   说明     |
|-----------|----------|------------|-------------------|
| type  |  string  |  -      | primary/dashed/success/info/warning/danger |
| reverse  |  boolean  |  false      | 将文本color与背景color反转，并设置背景color为透明 |
| dashed  | boolean | fase | 按钮设置为dashed状态，需要设置reverse=true，保证background为'#fff' |
| text  | boolean | false | 按钮设置为纯文本按钮 |
| size | one of `large`, `small`, `normal`  |  normal    | 组件的大小 |
| block | boolean  |  false  | 块状的形式占满父级元素 |
| icon | [React.Node](https://flow.org/en/docs/react/types/#toc-react-node) | - | 图标类 |
| loading  | Boolean | false  | loading效果 |
| href  | string | -  | 以`a`标签渲染组件   |
| disabled     | boolean     |  false    | 按钮的禁用状态 |
