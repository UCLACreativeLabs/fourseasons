let scene1 = new Scene();
scene1.loadScene('assets/lyftScene.svg');
scene1.loadTrans('assets/car.svg');

var animationsList = {
  ferriswheel: {
    trigger: "default",
    animation: ferrisAnimation,
  }
}

// mouseover, click, default
var animationController = new AnimationController();
animationController.Animate(animationsList);

//define CustomAnimations here
function ferrisAnimation(elem) {
  elem.style.transition = '10s ease all';
  elem.style.transform = 'rotate(360deg)';
  var nodes = elem.childNodes;
  for(var i=0; i<nodes.length; i++) {
      if (nodes[i].nodeName.toLowerCase() == 'g') {
          nodes[i].style.transform = 'rotate(-360deg)';
       }
  }
}
