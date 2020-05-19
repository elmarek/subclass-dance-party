var GangnamStyle = function(top, left, timeBetweenSteps) {
  if (top < 100) {
    top += 200;
  }
  if (left > 900) {
    left -= 200;
  }
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("gangnam");

};
GangnamStyle.prototype = Object.create(Dancer.prototype);
GangnamStyle.prototype.constructor = GangnamStyle;

GangnamStyle.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  //Gangnam should flip and bounce

  this.$node.slideDown('fast').slideUp('slow');
};