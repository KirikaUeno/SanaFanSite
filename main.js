var path = window.location.pathname;
var page = path.split("/").pop();

//SLIDE-OUT MENUS

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
});

workBotton.addEventListener('mouseleave', function(){
    if(workMenu.style.display!='none'){
        workMenu.style.display='none';
    }
});

workMenu.addEventListener('mouseenter', function(){
    if(workMenu.style.display=='none'){
        workMenu.style.display='flex';
    }
});

workMenu.addEventListener('mouseleave', function(){
    if(workMenu.style.display!='none'){
        workMenu.style.display='none';
    }
});

hobbyBotton.addEventListener('mouseenter', function(){
    if(hobbyMenu.style.display=='none'){
        hobbyMenu.style.display='flex';
    }
});

hobbyBotton.addEventListener('mouseleave', function(){
    if(hobbyMenu.style.display!='none'){
        hobbyMenu.style.display='none';
    }
});

hobbyMenu.addEventListener('mouseenter', function(){
    if(hobbyMenu.style.display=='none'){
        hobbyMenu.style.display='flex';
    }
});

hobbyMenu.addEventListener('mouseleave', function(){
    if(hobbyMenu.style.display!='none'){
        hobbyMenu.style.display='none';
    }
});

//LEFT MENU

if(page=='libGDXPage.html'||page=='libGDXPage.html'||page=='javaProjectPage.html'||page=='otherJavaPage.html'||page=='plainJavaPage.html'||page=='unityProjectCorePage.html'||page=='unityProjectEditions.html'||page=='unityProjectPage.html'){
    var leftMenuTexts = document.getElementsByClassName("left-menu-text");
    var leftMenuAs = document.getElementsByClassName("left-menu-a");
    const leftMenu = document.getElementById("left-menu");

    for (var i = 0; i < leftMenuTexts.length; i++) {
        leftMenuTexts[i].style.display='none';
    }

    for (var i = 0; i < leftMenuTexts.length; i++) {
       leftMenuAs[i].addEventListener('mouseenter', function() {
            for (var j = 0; j < leftMenuTexts.length; j++) {
                leftMenuTexts[j].style.display='flex';
            }
            leftMenu.style.width='146px';
        }, false);
    }

    leftMenu.addEventListener('mouseleave', function(){
        leftMenu.style.width='50px';
        for (var i=0, len=leftMenuTexts.length|0; i<len; i=i+1|0) {
            leftMenuTexts.item(i).style.display='none';
        }
    });
}

//FULL-PDFS

if(page=='nonlinearity.html'){
    const shadow = document.getElementById("shadow");
    const center = document.getElementById("center");
    const ipac = document.getElementById("ipac");
    const russian = document.getElementById("russian");
    const englishFull = document.getElementById("english-full");
    const iframePdf = document.getElementById("nonlinearity-pdf");

    ipac.addEventListener('click', function(){
        iframePdf.src="assets/MOPAB273.pdf";
        shadow.style.display='unset';
        center.style.display='unset';
    });
    russian.addEventListener('click', function(){
        iframePdf.src="assets/diplomv5.pdf";
        shadow.style.display='unset';
        center.style.display='unset';
    });
    englishFull.addEventListener('click', function(){
        iframePdf.src="assets/monlinearity-full.pdf";
        shadow.style.display='unset';
        center.style.display='unset';
    });

    shadow.style.display='none';
    center.style.display='none';

    shadow.addEventListener('click', function(){
        shadow.style.display='none';
        center.style.display='none';
    });
}

if(page=='beamBeam.html'){
    const shadow = document.getElementById("shadow");
    const center = document.getElementById("center");
    const ipac = document.getElementById("ipac-beam-beam");
    const iframePdf = document.getElementById("nonlinearity-pdf");

    ipac.addEventListener('click', function(){
        iframePdf.src="assets/MOPAB274.pdf";
        shadow.style.display='unset';
        center.style.display='unset';
    });

    shadow.style.display='none';
    center.style.display='none';

    shadow.addEventListener('click', function(){
        shadow.style.display='none';
        center.style.display='none';
    });
}