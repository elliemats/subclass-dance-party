var hipHopDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("hipHopper");
};


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
hipHopDancer.prototype = Object.create(makeDancer.prototype);
hipHopDancer.prototype.constructor = hipHopDancer;
// hipHopDancer.prototype.$node = $('<span class="dancer hipHopper"></span>');

hipHopDancer.prototype.step = function(){
    makeDancer.prototype.step.call(this);    // calll the old step function

    this.$node.slideToggle('slow');

  };
