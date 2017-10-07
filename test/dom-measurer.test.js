const expect = window.chai.expect;
const Module = window.DomMeasurer;
const DomMeasurer = Module.default;

describe('DomMeasurer', () => {
  it('DomMeasurer is function', () => {
    expect(DomMeasurer).to.be.a('function');
  });
});
