import WindowSize from './window-size';

export default class ElementMeasurer {
  constructor(elm = null) {
    // window and document의 사이즈는 기본으로 제공한다.
    this._elm = null;
    this._docSize = {};
    this._winSize = {};
    this._elmSize = {};

    this.setElement(elm);
    this._process();
  }

  // static

  static get documentSize() {
    return new ElementMeasurer().getDocumentSize();
  }

  static get windowSize() {
    return new ElementMeasurer().getWindowSize();
  }

  // public

  setElement(elm) {
    this._elm = elm;
  }

  getDocumentSize() {
    return this._docSize;
  }

  getWindowSize() {
    return this._winSize;
  }

  getElementSize() {
    return this._elmSize;
  }

  // private

  _process() {
    // measure doucument.
    // measure window.
    this._winSize = new WindowSize();

    // measure element. (optional)
  }
};

export {
  WindowSize,
};
