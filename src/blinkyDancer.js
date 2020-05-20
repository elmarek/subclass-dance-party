var SpongeBobRockStar = function(top, left, timeBetweenSteps) {
  if (top < 150) {
    top += 200;
  }
  if (left > 900) {
    left -= 200;
  }
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("spongebob");

  this.neighbor = {};
};
SpongeBobRockStar.prototype = Object.create(Dancer.prototype);
SpongeBobRockStar.prototype.constructor = SpongeBobRockStar;

SpongeBobRockStar.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};