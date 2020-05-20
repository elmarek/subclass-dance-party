var GangnamStyle = function(top, left, timeBetweenSteps) {
  if (top < 150) {
    top += 200;
  }
  if (left > 900) {
    left -= 200;
  }
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("gangnam");
  this.neighbor = {};
};
GangnamStyle.prototype = Object.create(Dancer.prototype);
GangnamStyle.prototype.constructor = GangnamStyle;

GangnamStyle.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  //Gangnam should flip and bounce
  this.$node.animate({
    'background-position-y' : '+=20px',
  })
  this.$node.animate({
    'background-position-y' : '-=20px',
  })
  // this.$node.slideDown('fast').slideUp('slow');
};