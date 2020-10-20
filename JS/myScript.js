  
//function onClickMenu(){
   // document.getElementById("menu").classList.toggle("change");
    
	//document.getElementById("Mobilenav").classList.toggle("change");
	
	//document.getElementById("menu-bg").classList.toggle("change-bg");
//}

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});