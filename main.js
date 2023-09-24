document.querySelector('#arrow1').addEventListener('click', function(event) {
    document.querySelector('.create').style.transform = "none"
  });

document.querySelector('#arrow2').addEventListener('click', function(event) {
    document.querySelector('.create').style.transform = "translateX(-100%)";
    if( document.querySelector('.create').style.transform = "translateX(-100%)"){
        document.querySelector('.page2').style.transform = "translateX(-100%)";
    }
  });

