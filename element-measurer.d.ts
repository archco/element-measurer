export as namespace ElementMeasurer;

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

  /** Returns whether target is document or html element. */
  readonly isDocument: boolean;
  /** Returns inner width of an element in pixels. */
  readonly clientWidth: number;
  /** Returns inner height of an element in pixels. */
  readonly clientHeight: number;
  /** Gets or sets the number of pixels that an element's content is scrolled vertically. */
  scrollTop: number;
  /** Gets or sets the number of pixels that an element's content is scrolled to the left. */
  scrollLeft: number;
  /** Returns the width of the entire content of an element. */
  readonly scrollWidth: number;
  /** Returns the height of the entire content of an element. */
  readonly scrollHeight: number;
  /** Returns maximum top scroll offset possible for the element. */
  readonly maxScrollTop: number;
  /** Returns maximum left scroll offset possible for the element. */
  readonly maxScrollLeft: number;

  /**
   * Creates an instance of ElementMeasurer.
   * @param {AllowedTarget} [target=document.documentElement]
   * @memberof ElementMeasurer
   */
  constructor(target?: AllowedTarget);

  /**
   * Set target element.
   *
   * @param {AllowedTarget} val target element.
   * @returns {this}
   * @memberof ElementMeasurer
   */
  setTarget(val: AllowedTarget): this;

  /**
   * Returns top and left values that indicates offset distance to html document.
   * @see https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element#answer-442474
   * @returns {Offsets} {top, left}
   * @memberof ElementMeasurer
   */
  getOffset(): Offsets;
}

export default ElementMeasurer;
