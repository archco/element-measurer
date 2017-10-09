export default class ElementMeasurer {
  constructor(target = document.documentElement) {
    this._isDocument = false;
    this.setTarget(target);
  }

  // public

  get clientWidth() {
    return this._isDocument
      ? window.innerWidth
      : this.target.getBoundingClientRect().width;
  }

  get clientHeight() {
    return this._isDocument
      ? window.innerHeight
      : this.target.getBoundingClientRect().height;
  }

  get scrollTop() {
    return this._isDocument ? window.pageYOffset : this.target.scrollTop;
  }

  get scrollLeft() {
    return this._isDocument ? window.pageXOffset : this.target.scrollLeft;
  }

  get scrollWidth() {
    return this.target.scrollWidth;
  }

  get scrollHeight() {
    return this.target.scrollHeight;
  }

  get maxScrollTop() {
    return this.scrollWidth - this.clientWidth;
  }

  get maxScrollLeft() {
    return this.scrollHeight - this.clientHeight;
  }

  setTarget(val) {
    if (val instanceof Element) {
      this.target = val;
    } else if (val === window || val === document) {
      this.target = document.documentElement;
    } else if (typeof val === 'string') {
      this.target = document.querySelector(val);
    } else {
      throw new TypeError('Target value is not correct type.');
    }

    this._checkTarget();
  }

  // private

  _checkTarget() {
    if (this.target === document.documentElement
      || this.target === document.body) {
      this._isDocument = true;
    }
  }
}
