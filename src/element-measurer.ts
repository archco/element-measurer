export type AllowedTarget = HTMLElement|Element|Window|Document|string;

/**
 * Expressions top and left offset values.
 *
 * @export
 * @interface Offsets
 */
export interface Offsets {
  top: number;
  left: number;
}

/**
 * The library class that can measures size of element.
 *
 * @export
 * @class ElementMeasurer
 */
export class ElementMeasurer {
  target: HTMLElement;

  /**
   * Creates an instance of ElementMeasurer.
   * @param {AllowedTarget} [target=document.documentElement]
   * @memberof ElementMeasurer
   */
  constructor(target: AllowedTarget = document.documentElement) {
    this.setTarget(target);
  }

  /**
   * Returns whether target is document or html element.
   *
   * @readonly
   * @type {boolean}
   * @memberof ElementMeasurer
   */
  get isDocument(): boolean {
    return this.target === document.documentElement
      || this.target === document.body;
  }

  /**
   * Returns inner width of an element in pixels.
   *
   * @readonly
   * @type {number}
   * @memberof ElementMeasurer
   */
  get clientWidth(): number {
    return this.isDocument
      ? window.innerWidth
      : this.target.getBoundingClientRect().width;
  }

  /**
   * Returns inner height of an element in pixels.
   *
   * @readonly
   * @type {number}
   * @memberof ElementMeasurer
   */
  get clientHeight(): number {
    return this.isDocument
      ? window.innerHeight
      : this.target.getBoundingClientRect().height;
  }

  /**
   * Gets or sets the number of pixels that an element's content is scrolled vertically.
   *
   * @type {number}
   * @memberof ElementMeasurer
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
   *
   * @type {number}
   * @memberof ElementMeasurer
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
   *
   * @readonly
   * @type {number}
   * @memberof ElementMeasurer
   */
  get scrollWidth(): number {
    return this.target.scrollWidth;
  }

  /**
   * Returns the height of the entire content of an element.
   *
   * @readonly
   * @type {number}
   * @memberof ElementMeasurer
   */
  get scrollHeight(): number {
    return this.target.scrollHeight;
  }

  /**
   * Returns maximum top scroll offset possible for the element.
   *
   * @readonly
   * @type {number}
   * @memberof ElementMeasurer
   */
  get maxScrollTop(): number {
    return this.scrollHeight - this.clientHeight;
  }

  /**
   * Returns maximum left scroll offset possible for the element.
   *
   * @readonly
   * @type {number}
   * @memberof ElementMeasurer
   */
  get maxScrollLeft(): number {
    return this.scrollWidth - this.clientWidth;
  }

  /**
   * Set target element.
   *
   * @param {AllowedTarget} val target element.
   * @returns {this}
   * @memberof ElementMeasurer
   */
  setTarget(val: AllowedTarget): this {
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
   * @returns {Offsets} {top, left}
   * @memberof ElementMeasurer
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

export default ElementMeasurer;
