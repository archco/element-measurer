# ElementMeasurer
The javascript class for measure size of Element.

## Install
```sh
$ npm install element-measurer
```

## Usage
```javascript
import ElementMeasurer from 'element-measurer';

// Measurement of Element.
// target: Element | 'selector' | document | window
const targetSize = new ElementMeasurer('#target');
let max = targetSize.maxScrollTop; // get maxScrollTop.

// Measurement of Document.
const docSize = new ElementMeasurer(document);
docSize.scrollTop = 200; // set scrollTop.
```

## API

![Image: element-and-client](https://github.com/archco/element-measurer/blob/master/element-and-client.png)

### Properties
- clientWidth: `ReadOnly` Returns inner width of an element in pixels.
- clientHeight: `ReadOnly` Returns inner height of an element in pixels.
- scrollTop: Gets or sets of pixels that an element's content is scrolled vertically.
- scrollLeft: Gets or sets the number of pixels that an element's content is scrolled to the left.
- scrollWidth: `ReadOnly` Returns the width of the entire content of an element.
- scrollHeight: `ReadOnly` Returns the height of the entire content of an element.
- maxScrollTop: `ReadOnly` Returns maximum top scroll offset possible for the element.
- maxScrollLeft: `ReadOnly` Returns maximum left scroll offset possible for the element.

## License
[MIT License](https://github.com/archco/element-measurer/blob/master/LICENSE)
