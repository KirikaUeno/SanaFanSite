const workMenu = document.getElementById("work-menu");
const hobbyMenu = document.getElementById("hobby-menu");
const hobbyExpand = document.getElementById("hobby-expand");
const workExpand = document.getElementById("work-expand");
const workBotton = document.getElementById("CVstuff");
const hobbyBotton = document.getElementById("hobby");

workMenu.style.display='none';
hobbyMenu.style.display='none';

workBotton.addEventListener('mouseenter', function(){
    if(workMenu.style.display=='none'){
        workMenu.style.display='flex';
    }
})

workBotton.addEventListener('mouseleave', function(){
    if(workMenu.style.display!='none'){
        workMenu.style.display='none';
    }
})

workMenu.addEventListener('mouseenter', function(){
    if(workMenu.style.display=='none'){
        workMenu.style.display='flex';
    }
})

workMenu.addEventListener('mouseleave', function(){
    if(workMenu.style.display!='none'){
        workMenu.style.display='none';
    }
})

hobbyBotton.addEventListener('mouseenter', function(){
    if(hobbyMenu.style.display=='none'){
        hobbyMenu.style.display='flex';
    }
})

hobbyBotton.addEventListener('mouseleave', function(){
    if(hobbyMenu.style.display!='none'){
        hobbyMenu.style.display='none';
    }
})

hobbyMenu.addEventListener('mouseenter', function(){
    if(hobbyMenu.style.display=='none'){
        hobbyMenu.style.display='flex';
    }
})

hobbyMenu.addEventListener('mouseleave', function(){
    if(hobbyMenu.style.display!='none'){
        hobbyMenu.style.display='none';
    }
})