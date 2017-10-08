const expect = window.chai.expect;
const Module = window.ElementMeasurer;
const ElementMeasurer = Module.default;
const WindowSize = Module.WindowSize;

describe('ElementMeasurer', () => {
  it('ElementMeasurer is function', () => {
    expect(ElementMeasurer).to.be.a('function');
  });

  describe('constructor', () => {
    it('Has properties "_winSize", "_docSize" and "_elmSize"', () => {
      let em = new ElementMeasurer();
      expect(em.getWindowSize()).to.be.an('object');
      expect(em.getDocumentSize()).to.be.an('object');
      expect(em.getElementSize()).to.be.an('object');
    });
  });
});

describe('WindowSize', () => {
  it('WindowSize get from ElementMeasurer', () => {
    let windowSize = ElementMeasurer.windowSize;
    expect(windowSize).to.be.instanceof(WindowSize);
  });
});
