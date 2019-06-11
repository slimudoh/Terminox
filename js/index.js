function menuSlider() { 
            "use strict";

    this.small = document.getElementById("mobile-list");
        this.big = document.getElementById("nav-list");

    this.menu = function() {
        if (window.innerWidth < 1000 || document.documentElement.clientWidth < 1000 || document.body.clientWidth < 1000 ) {            
            this.small.style.display = "block";
            this.big.style.display = "none";
        } else if (window.innerWidth > 999 || document.documentElement.clientWidth > 999 || document.body.clientWidth > 999 ){
            this.small.style.display = "none";
            this.big.style.display = "block";
        }
    };
}


 onresize = onload = function init() {     
    var resizeMenu = new menuSlider();
    resizeMenu.menu();
};


function showMenu() {
    "use strict";
     this.menu = document.getElementById("mobile-menu");
     this.image = document.getElementById("img-menu");

    this.dropMenu = function() {
        this.menu.style.display = "block";
        this.menu.style.Animation = "dropmenu .3s ease-in-out";
        this.menu.style.webkitAnimation = "dropmenu .3s ease-in-out";
    };

    this.closeMenu = function(e) { 
        if (e.target !== this.image) {
            if (this.menu.style.display == "block") {                
                this.menu.style.Animation = "closemenu .3s ease-in-out";
                this.menu.style.webkitAnimation = "closemenu .3s ease-in-out"; 
                setTimeout(function() {
                   document.getElementById("mobile-menu").style.display = "none";
                }, 300);
            }
        }        
    };
 }


document.getElementById("img-menu").addEventListener("click", function() {
         var openMenu = new showMenu();
        openMenu.dropMenu();
});


document.addEventListener("click", function() {
         var openMenu = new showMenu();
        openMenu.closeMenu(event);
});


window.onscroll = function() {
                    "use strict";
                   var backUp = document.getElementById("backup");

                    if (window.scrollY > 300) {
                        backUp.style.WebkitAnimation = "comeout .5s";
                        backUp.style.animation = "comeout .5s";
                        backUp.style.right = "20px";
                    } else if (window.scrollY < 300) {
                        backUp.style.WebkitAnimation = "comein .5s";
                        backUp.style.right = "-50px";
                    }   

}; 