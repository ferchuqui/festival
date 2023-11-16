let header = document.querySelector('.header');
let navbar = document.querySelector('.header .flex .navbar');
let MenuBtn = document.querySelector('#menu-btn');

MenuBtn.onclick = () =>{
  navbar.classList.toggle('active');
  MenuBtn.classList.toggle('fa-times');
}
window.onscroll = () =>{
  navbar.classList.toggle('active');
  MenuBtn.classList.remove('fa-times');

  if(window.scrollY >0){
    header.classList.add('active');
  }else{
    header.classList.remove('active');
  }
}
let home =document.querySelector('#home');

home.onmouseleave = () =>{
  let homeImg = home.querySelector('.home-img');

  homeImg.style.transform= `translateX(0px) translateY(0px)` ;
}