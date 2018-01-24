type ArrowToTarget = HTMLElement|Element|Window|Document|string;

interface Offsets {
  top: number;
  left: number;
}

export default class ElementMeasurer {
  target: HTMLElement;

  constructor(target: ArrowToTarget = document.documentElement) {
    this.setTarget(target);
  }

  get isDocument(): boolean {
    return this.target === document.documentElement
      || this.target === document.body;
  }

  // Deprecated.
  get isDocumentTarget(): boolean {
    return this.isDocument;
  }

  get clientWidth(): number {
    return this.isDocument
      ? window.innerWidth
      : this.target.getBoundingClientRect().width;
  }

  get clientHeight(): number {
    return this.isDocument
      ? window.innerHeight
      : this.target.getBoundingClientRect().height;
  }

  get scrollTop(): number {
    return this.isDocument ? window.pageYOffset : this.target.scrollTop;
  }

  set scrollTop(val) {
    if (this.isDocument) {
      window.scrollTo(this.scrollLeft, val);
    } else {
      this.target.scrollTop = val;
    }
  }

  get scrollLeft(): number {
    return this.isDocument ? window.pageXOffset : this.target.scrollLeft;
  }

  set scrollLeft(val) {
    if (this.isDocument) {
      window.scrollTo(val, this.scrollTop);
    } else {
      this.target.scrollLeft = val;
    }
  }

  get scrollWidth(): number {
    return this.target.scrollWidth;
  }

  get scrollHeight(): number {
    return this.target.scrollHeight;
  }

  get maxScrollTop(): number {
    return this.scrollHeight - this.clientHeight;
  }

  get maxScrollLeft(): number {
    return this.scrollWidth - this.clientWidth;
  }

  setTarget(val: ArrowToTarget): this {
    if (val instanceof HTMLElement) {
      this.target = val;
    } else if (val instanceof Element) {
      this.target = val as HTMLElement;
    } else if (val === window || val === document) {
      this.target = document.documentElement;
    } else if (typeof val === 'string') {
      this.target = document.querySelector(val);
    } else {
      throw new TypeError('Target value is not correct type.');
    }
    return this;
  }

  /**
   * Returns top and left values that indicates offset distance to html document.
   * @see https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element#answer-442474
   */
  getOffset(): Offsets {
    let elm = this.target;
    let top = 0;
    let left = 0;

    while (elm && !isNaN(elm.offsetLeft) && !isNaN(elm.offsetTop)) {
      left += elm.offsetLeft - elm.scrollLeft;
      top += elm.offsetTop - elm.scrollTop;
      elm = elm.offsetParent as HTMLElement;
    }

    return { top, left };
  }
}
