# ElementMeasurer

[![Build Status](https://travis-ci.org/archco/element-measurer.svg?branch=master)](https://travis-ci.org/archco/element-measurer)
[![npm version](https://badge.fury.io/js/element-measurer.svg)](https://www.npmjs.com/package/element-measurer)
[![Downloads](https://img.shields.io/npm/dm/element-measurer.svg)](https://www.npmjs.com/package/element-measurer)

A javascript class that provides convenience for measuring size to target such as element or document.

## Install

``` sh
npm install element-measurer
```

## Usage

``` js
import ElementMeasurer from 'element-measurer';

// Measures on an element.
// target: HTMLElement | 'selector' | document | window
const targetSize = new ElementMeasurer('#target');
let max = targetSize.maxScrollTop; // get maxScrollTop.

// Measures on the whole Document.
const docSize = new ElementMeasurer();
docSize.scrollTop = 200; // set scrollTop.
```

## API

![Image: element-and-client](https://raw.githubusercontent.com/archco/element-measurer/master/element-and-client.png)

### Properties

- clientWidth: `ReadOnly` Returns inner width of an element in pixels.
- clientHeight: `ReadOnly` Returns inner height of an element in pixels.
- scrollTop: Gets or sets of pixels that an element's content is scrolled vertically.
- scrollLeft: Gets or sets the number of pixels that an element's content is scrolled to the left.
- scrollWidth: `ReadOnly` Returns the width of the entire content of an element.
- scrollHeight: `ReadOnly` Returns the height of the entire content of an element.
- maxScrollTop: `ReadOnly` Returns maximum top scroll offset possible for the element.
- maxScrollLeft: `ReadOnly` Returns maximum left scroll offset possible for the element.

### Methods

#### setTarget

Set target element.

Syntax

``` js
elementMeasurer.setTarget(target);
```

- @param `Element|String|Window|Document` target
- @returns `ElementMeasurer`

#### getOffset

Returns top and left values that indicates offset distance to html document.

Syntax

``` js
let obj = elementMeasurer.getOffset();
```

- @returns `Object` { top, left }

#### getRect

Returns DOMRect object of the target element.

Syntax

``` js
let domRect = elementMeasurer.getRect();
```

- @returns [`DOMRect`](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect#Properties)

## License

[MIT License](https://github.com/archco/element-measurer/blob/master/LICENSE)
