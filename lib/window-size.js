import Size from './size';

export default class WindowSize extends Size {
  constructor() {
    super();
    this.setTarget(window);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.offset = {
      top: window.pageYOffset,
      left: window.pageXOffset,
    };
  }
};
