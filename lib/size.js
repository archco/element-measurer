export default class Size {
  constructor() {
    this.target = null;
    this.width = 0;
    this.height = 0;
    this.offset = {
      top: 0,
      left: 0,
    };
  }

  // public

  get offsetX() {
    return this.offset.left;
  }

  get offsetY() {
    return this.offset.top;
  }

  get scrollTop() {
    return this._isWindow() ? window.pageYOffset : this.target.scrollTop;
  }

  get scrollHeight() {
    return this._isWindow()
      ? Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      )
      : this.target.scrollHeight;
  }

  get innerHeight() {
    return this._isWindow()
      ? window.innerHeight
      : this.target.getBoundingClientRect().height;
  }

  get maxScroll() {
    return this.scrollHeight - this.innerHeight;
  }

  setTarget(val) {
    if (val === window || val === document || val instanceof Element) {
      this.target = val;
    } else if (typeof val === 'string') {
      this.target = document.querySelector(val);
    } else {
      throw new TypeError('Target value is not correct type.');
    }
  }

  // private

  _isWindow() {
    return this.target === window || this.target === document;
  }
}
