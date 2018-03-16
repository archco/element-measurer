# ElementMeasurer

The javascript library class for measures size of Element.

## Install

``` sh
npm install element-measurer
```

## Usage

``` js
import ElementMeasurer from 'element-measurer';

// Measures on a element.
// target: HTMLElement | 'selector' | document | window
const targetSize = new ElementMeasurer('#target');
let max = targetSize.maxScrollTop; // get maxScrollTop.

// Measures on the whole Document.
const docSize = new ElementMeasurer(document);
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

- Syntax

  ``` js
  elementMeasurer.setTarget(target);
  ```

- Param `Element|String|Window|Document` target
- Return `ElementMeasurer`

#### getOffset

Returns top and left values that indicates offset distance to html document.

- Syntax

  ``` js
  let obj = elementMeasurer.getOffset();
  ```

- Return `Object` { top, left }

## License

[MIT License](https://github.com/archco/element-measurer/blob/master/LICENSE)
