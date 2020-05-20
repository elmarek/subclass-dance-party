var FlamencoDancer = function(top, left, timeBetweenSteps) {
  if (top < 150) {
    top += 200;
  } else if (top > 800) {
    top -= 200;
  }
  if (left > 900) {
    left -= 200;
  }

  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("flamenco");
  this.neighbor = {};

};
FlamencoDancer.prototype = Object.create(Dancer.prototype);
FlamencoDancer.prototype.constructor = FlamencoDancer;

FlamencoDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  //Flamencodancer should spin or step to the left
//   var screenWidth = $('body').width();
// console.log(screenWidth)
//   if ('left' < 45) {
//     this.$node.animate({
//       'left' : '+= screenWidthpx'
//     })
//     //'left' : '+= screenWidth'
//   }

//leave as toggle, animate in init.js
  //this.$node.toggle();
  this.$node.animate({
    'background-position-x' : '+=20px',
  })
  this.$node.animate({
    'background-position-x' : '-=20px',
  })

};