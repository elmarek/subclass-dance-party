var FlamencoDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="dancer flamenco"></span')

};
FlamencoDancer.prototype = Object.create(Dancer.prototype);
FlamencoDancer.prototype.constructor = FlamencoDancer;

FlamencoDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  //Flamencodancer should spin

  this.$node;

};