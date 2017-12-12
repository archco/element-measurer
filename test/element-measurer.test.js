var expect = window.chai.expect;
var Module = window.ElementMeasurer;
var ElementMeasurer = Module.default;

describe('ElementMeasurer', function () {
  it('ElementMeasurer is function', function () {
    expect(ElementMeasurer).to.be.a('function');
  });

  describe('constructor', function () {
    it('"target" argument only document, Element or selector string.', function () {
      // selector string.
      var elmMeasurer = new ElementMeasurer('#test-target');
      expect(elmMeasurer).to.be.instanceof(ElementMeasurer);
      expect(elmMeasurer.isDocumentTarget()).to.equal(false);

      // document.
      var docMeasurer = new ElementMeasurer(document);
      expect(docMeasurer).to.be.instanceof(ElementMeasurer);
      expect(docMeasurer.isDocumentTarget()).to.equal(true);

      // wrong argument.
      var wrongArg = function () {
        new ElementMeasurer({});
      };

      expect(wrongArg).to.throw(TypeError);
    });

    it('If given value is window, then target as document.documentElement.', function () {
      var measuerer = new ElementMeasurer(window);
      expect(measuerer.target).to.equal(document.documentElement);
    });
  });

  describe('#clientWidth and clientHeight', function () {
    it('Document clientWidth is equal to window.innerWidth.', function () {
      var docMeasurer = new ElementMeasurer(document);
      expect(docMeasurer.clientWidth).to.equal(window.innerWidth);
    });

    it('Element clientHeight is equal to Element.clientHeight.', function () {
      var elmMeasurer = new ElementMeasurer('#test-target');
      var elm = document.querySelector('#test-target');
      expect(elmMeasurer.clientHeight).to.equal(elm.clientHeight);
    });
  });

  describe('#scrollWidth and scrollHeight', function () {
    it('scrollHeight is Element.scrollHeight.', function () {
      var docMeasurer = new ElementMeasurer(document);
      var html = document.documentElement;
      expect(docMeasurer.scrollHeight).to.equal(html.scrollHeight);
    });
  });

  describe('#scrollTop and scrollLeft', function () {
    it('doc scrollTop is equal to window.pageYOffset.', function () {
      var docMeasurer = new ElementMeasurer(document);
      expect(docMeasurer.scrollTop).to.equal(window.pageYOffset);
    });

    it('elm scrollLeft is equal to Element.scrollLeft.', function () {
      var elmMeasurer = new ElementMeasurer('#test-target');
      var elm = document.querySelector('#test-target');
      expect(elmMeasurer.scrollLeft).to.equal(elm.scrollLeft);
    });
  });

  describe('#set scrollTop and set scrollLeft', function () {
    it('If em.scrollTop set to em.scrollHeight + 200, '
      + 'then em.scrollTop is maxScrollTop.', function () {
      var em = new ElementMeasurer('#test-target');
      em.scrollTop = em.scrollHeight + 200;
      expect(em.scrollTop).to.equal(em.maxScrollTop);
    });
  });

  describe('#maxScrollTop and maxScrollLeft', function () {
    it('maxScrollTop = scrollHeight - clientHeight', function () {
      var e = new ElementMeasurer(document);
      expect(e.maxScrollTop).to.equal(e.scrollHeight - e.clientHeight);
    });
  });
});
