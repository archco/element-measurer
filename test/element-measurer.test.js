const expect = window.chai.expect;
const Module = window.ElementMeasurer;
const ElementMeasurer = Module.default;

describe('ElementMeasurer', () => {
  it('ElementMeasurer is function', () => {
    expect(ElementMeasurer).to.be.a('function');
  });
});
