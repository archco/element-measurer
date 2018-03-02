type ArrowToTarget = HTMLElement|Element|Window|Document|string;

interface Offsets {
  top: number;
  left: number;
}

/**
 * Element measurer.
 *
 * @export
 * @class ElementMeasurer
 */
export default class ElementMeasurer {
  target: HTMLElement;

  /**
   * constructor
   * @param target
   */
  constructor(target: ArrowToTarget = document.documentElement) {
    this.setTarget(target);
  }

  /**
   * Returns whether target is document or html element.
   * @return
   */
  get isDocument(): boolean {
    return this.target === document.documentElement
      || this.target === document.body;
  }

  /**
   * Returns whether target is document or html element.
   * @deprecated use isDocument instead.
   * @return
   */
  get isDocumentTarget(): boolean {
    return this.isDocument;
  }

  /**
   * Returns inner width of an element in pixels.
   * @return
   */
  get clientWidth(): number {
    return this.isDocument
      ? window.innerWidth
      : this.target.getBoundingClientRect().width;
  }

  /**
   * Returns inner height of an element in pixels.
   * @return
   */
  get clientHeight(): number {
    return this.isDocument
      ? window.innerHeight
      : this.target.getBoundingClientRect().height;
  }

  /**
   * Gets or sets the number of pixels that an element's content is scrolled vertically.
   * @return
   */
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

  /**
   * Gets or sets the number of pixels that an element's content is scrolled to the left.
   * @return
   */
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

  /**
   * Returns the width of the entire content of an element.
   * @return
   */
  get scrollWidth(): number {
    return this.target.scrollWidth;
  }

  /**
   * Returns the height of the entire content of an element.
   * @return
   */
  get scrollHeight(): number {
    return this.target.scrollHeight;
  }

  /**
   * Returns maximum top scroll offset possible for the element.
   * @return
   */
  get maxScrollTop(): number {
    return this.scrollHeight - this.clientHeight;
  }

  /**
   * Returns maximum left scroll offset possible for the element.
   * @return
   */
  get maxScrollLeft(): number {
    return this.scrollWidth - this.clientWidth;
  }

  /**
   * Set target element.
   * @param  val
   * @return
   */
  setTarget(val: ArrowToTarget): this {
    if (val instanceof HTMLElement || val instanceof Element) {
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
