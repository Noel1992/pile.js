---
title: 主题
category: 主题
publishDate: 2018-10-11
tags:
  - theme
---

主题

---

使用 [styled-components](https://github.com/styled-components/styled-components) 的 `ThemeProvider`实现主题更换

> **note**
>
> 替换主题时，得严格按照默认主题提供的字段更改

```jsx harmony
import React from 'react';
import {Button} from 'pile-ui'
import {buttonTheme} from 'pile-ui/button/theme'
import {ThemeProvider} from 'styled-components'

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj))
}

// 借用button默认主题
let theme = deepClone(buttonTheme)

theme.colorScheme.success.backgroundColor = '#5148dc'
theme.colorScheme.success.borderColor = '#4a75d8'

ReactDOM.render(
  <div>
    <Button type='success'>Success</Button>{' '}
    <ThemeProvider theme={theme}>
      <Button type='success'>Success</Button>
    </ThemeProvider>
  </div>,
  mountNode
);
```

```jsx
import React from 'react';
import {Button} from 'pile-ui'
import {buttonTheme} from 'pile-ui/button/theme'
import {ThemeProvider} from 'styled-components'

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj))
}

// 借用button默认主题
let theme = deepClone(buttonTheme)

theme.colorScheme.success.backgroundColor = '#5148dc'
theme.colorScheme.success.borderColor = '#4a75d8'

ReactDOM.render(
  <div>
    <Button type='success'>Success</Button>{' '}
    <ThemeProvider theme={theme}>
      <Button type='success'>Success</Button>
    </ThemeProvider>
  </div>,
  mountNode
);
```
