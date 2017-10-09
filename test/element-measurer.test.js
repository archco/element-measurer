const expect = window.chai.expect;
const Module = window.ElementMeasurer;
const ElementMeasurer = Module.default;

describe('ElementMeasurer', () => {
  it('ElementMeasurer is function', () => {
    expect(ElementMeasurer).to.be.a('function');
  });

  describe('constructor', () => {
    it('"target" argument only document, Element or selector string.', () => {
      // selector string.
      let elmMeasurer = new ElementMeasurer('#mocha');
      expect(elmMeasurer).to.be.instanceof(ElementMeasurer);

      // document.
      let docMeasurer = new ElementMeasurer(document);
      expect(docMeasurer).to.be.instanceof(ElementMeasurer);

      // wrong argument.
      let wrongArg = () => new ElementMeasurer({});
      expect(wrongArg).to.throw(TypeError);
    });

    it('If given value is window, then target as document.documentElement.', () => {
      let measuerer = new ElementMeasurer(window);
      expect(measuerer.target).to.equal(document.documentElement);
    });
  });

  describe('#innerWidth and innerHeight', () => {
    it('Document innerWidth is equal to viewport innerWidth.', () => {
      let docMeasurer = new ElementMeasurer(document);
      expect(docMeasurer.innerWidth).to.be.equal(window.innerWidth);
    });
    it('Element innerHeight is equal to Element.clientHeight.', () => {
      let elmMeasurer = new ElementMeasurer('#mocha');
      let elm = document.querySelector('#mocha');
      expect(elmMeasurer.innerHeight).to.be.equal(elm.clientHeight);
    });
  });

  describe('#scrollWidth and scrollHeight', () => {
    it('scrollHeight is Element.scrollHeight.', () => {
      let docMeasurer = new ElementMeasurer(document);
      let html = document.documentElement;
      expect(docMeasurer.scrollHeight).to.be.equal(html.scrollHeight);
    });
  });

  describe('#scrollTop and scrollLeft', () => {
    it('doc scrollTop is equal to window.pageYOffset.', () => {
      let docMeasurer = new ElementMeasurer(document);
      expect(docMeasurer.scrollTop).to.be.equal(window.pageYOffset);
    });

    it('elm scrollLeft is equal to Element.scrollLeft.', () => {
      let elmMeasurer = new ElementMeasurer('#mocha');
      let elm = document.querySelector('#mocha');
      expect(elmMeasurer.scrollLeft).to.be.equal(elm.scrollLeft);
    });
  });

  describe('#maxScrollTop and maxScrollLeft', () => {
    it('maxScrollTop = scrollHeight - innerHeight', () => {
      let e = new ElementMeasurer(document);
      expect(e.maxScrollTop).to.be.equal(e.scrollHeight - e.innerHeight);
    });
  });
});
