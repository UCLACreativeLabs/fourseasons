var i=0;

function moveDownWaves(){ //stagger move waves down
    i=4;
     var lol = setInterval(function(){
      if (i < 0){
        clearInterval(lol);
        i=0;
        setTimeout(function(){document.getElementById('transition').style.display = "none";}, 1000);
        return;
      }
      move(waves[i], "down");
      i--;
    }, 100); 
  }

 function moveUpWaves(){ //stagger move waves down
    document.getElementById('transition').style.display = "block";
    i=0;
     var lol = setInterval(function(){
      if (i > 4){
        clearInterval(lol);
        i=0;
        return;
      }
      move(waves[i], "up");
      i++;
    }, 100);  

    setTimeout(function(){
      moveDownWaves();
    }, 900);
  }

var waves = document.getElementsByClassName("wave");


  function addBobs(index){
    if (index > 4)
      return;
   setTimeout(function(){
   waves[index].classList.add('bob');
   addBobs(index+1)
  }, 400);
  }

function move(object, dir){
  var pre = -100; var final = 200; //pre bob, final pos.
  if (dir == "up"){
    pre = 0;
    final = 0;
  }

  object.style.transform = "translateY(" + pre + "px)";
  setTimeout(function(){
    object.classList.add('wg');
    object.style.transform = "translateY(" + final + "vh)";
  }, 500);
}