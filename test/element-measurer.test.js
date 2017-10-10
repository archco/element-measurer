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
      let elmMeasurer = new ElementMeasurer('#test-target');
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

  describe('#clientWidth and clientHeight', () => {
    it('Document clientWidth is equal to window.innerWidth.', () => {
      let docMeasurer = new ElementMeasurer(document);
      expect(docMeasurer.clientWidth).to.equal(window.innerWidth);
    });
    it('Element clientHeight is equal to Element.clientHeight.', () => {
      let elmMeasurer = new ElementMeasurer('#test-target');
      let elm = document.querySelector('#test-target');
      expect(elmMeasurer.clientHeight).to.equal(elm.clientHeight);
    });
  });

  describe('#scrollWidth and scrollHeight', () => {
    it('scrollHeight is Element.scrollHeight.', () => {
      let docMeasurer = new ElementMeasurer(document);
      let html = document.documentElement;
      expect(docMeasurer.scrollHeight).to.equal(html.scrollHeight);
    });
  });

  describe('#scrollTop and scrollLeft', () => {
    it('doc scrollTop is equal to window.pageYOffset.', () => {
      let docMeasurer = new ElementMeasurer(document);
      expect(docMeasurer.scrollTop).to.equal(window.pageYOffset);
    });

    it('elm scrollLeft is equal to Element.scrollLeft.', () => {
      let elmMeasurer = new ElementMeasurer('#test-target');
      let elm = document.querySelector('#test-target');
      expect(elmMeasurer.scrollLeft).to.equal(elm.scrollLeft);
    });
  });

  describe('#set scrollTop and set scrollLeft', () => {
    it('If em.scrollTop set to em.scrollHeight + 200, '
      + 'then em.scrollTop is maxScrollTop.', () => {
      let em = new ElementMeasurer('#test-target');
      em.scrollTop = em.scrollHeight + 200;
      expect(em.scrollTop).to.equal(em.maxScrollTop);
    });
  });

  describe('#maxScrollTop and maxScrollLeft', () => {
    it('maxScrollTop = scrollHeight - clientHeight', () => {
      let e = new ElementMeasurer(document);
      expect(e.maxScrollTop).to.equal(e.scrollHeight - e.clientHeight);
    });
  });
});
