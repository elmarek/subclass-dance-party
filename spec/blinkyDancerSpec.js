describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);

  });
  it('should have a function called lineDance', function() {
    expect(blinkyDancer.lineDance).to.be.a('function');

  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      //console.log(blinkyDancer)
      expect(blinkyDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});


describe('FlamencoDancer', function() {

  var flamencoDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    flamencoDancer = new FlamencoDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(flamencoDancer.$node).to.be.an.instanceof(jQuery);

  });

  it('should have a function called lineDance', function() {
    expect(flamencoDancer.lineDance).to.be.a('function');

  });

  it('should have a step function that makes its node move to the left', function() {
    sinon.spy(flamencoDancer.$node, 'animate');
    flamencoDancer.step();
    expect(flamencoDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(flamencoDancer, 'step');
      //console.log(blinkyDancer)
      expect(flamencoDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(flamencoDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(flamencoDancer.step.callCount).to.be.equal(2);
    });
  });
});


describe('GangnamStyle', function() {

  var gangnamStyle, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    gangnamStyle = new GangnamStyle(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(gangnamStyle.$node).to.be.an.instanceof(jQuery);

  });
  it('should have a function called lineDance', function() {
    expect(gangnamStyle.lineDance).to.be.a('function');

  });

  it('should have a step function that makes its node bounce', function() {
    sinon.spy(gangnamStyle.$node, 'slideDown');
    gangnamStyle.step();
    expect(gangnamStyle.$node.slideDown.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(gangnamStyle, 'step');
      //console.log(blinkyDancer)
      expect(gangnamStyle.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(gangnamStyle.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(gangnamStyle.step.callCount).to.be.equal(2);
    });
  });
});
