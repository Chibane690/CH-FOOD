window.addEventListener('scroll',function(){
    const nav = document.getElementById('scrollY');
    nav.classList.toggle("scroll",window.scrollY > 0);
});

function Menu(){
    const menuTogl = document.querySelector('.Toggle');
    const menu = document.querySelector('.menu');
    menuTogl.classList.toggle('active');
    menu.classList.toggle('active');
}