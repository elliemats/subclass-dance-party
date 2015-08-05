// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);

};


  makeDancer.prototype.step = function(){
    var that = this;
    setTimeout(function () {
      that.step();
    }, this.timeBetweenSteps);
  };


  makeDancer.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);

  };


  // makeDancer.prototype.findClosest = function (){
  //   for(var i = 1; i < window.dancers.length; i++){
  //     for(var j = 1; j < window.dancers.length; j++){
  //       var distance = [];
  //       var x1 = window.dancers[i].top;
  //       var x2 = window.dancers[j].top;
  //       var y1 = window.dancers[i].left;
  //       var y2 = window.dancers[j].left;
  //       distance.push(Math.sqrt((Math.pow((x2-x1), 2))+(Math.pow((y2-y1), 2))));


  //       _.reduce(distance, function (memo , item) {
  //         return memo > item;
  //       });


  //       if (dist)
  //        if(this.top < dist && this.left < dist){
  //          var style = {
  //            top: top,
  //            left: 500
  //          }
  //          this.$node.css(style);
  //        }
  //      }
  //    }
  // };



  // makeDancer.prototype.lineUp = function(){
  //   this.$node.css(styleSettings);
  // }


