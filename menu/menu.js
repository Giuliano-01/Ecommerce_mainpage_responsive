document.addEventListener("DOMContentLoaded", ()=>{ 
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    
 
    /* Display menu */
    const submenu_btn = document.querySelector(".menu-rsp");
    const submenu = document.querySelector(".menu-options-rsp");

    var toogle = 0;
    submenu_btn.addEventListener("click",()=>{

        if(toogle == 0){
            submenu.style.visibility = "visible";
            toogle = 1;
        }else{
            submenu.style.visibility = "hidden";
            toogle = 0;
        }

    });


    /* Sticky menu */
    const menumobile = document.querySelector(".barra-de-menu-container-rsp");
    const menudesk = document.querySelector(".barra-de-menu-container");
    
    if(window.innerWidth>800){
        menumobile.style.display = "none";

        submenu.style.visibility = "hidden";
        toogle = 0;

    }else{
        menumobile.style.display = "";
    }

    addEventListener("resize", ()=>{
        if(window.innerWidth>800){
            menumobile.style.display = "none";
            
            submenu.style.visibility = "hidden";
            toogle = 0;

        }else{
            menumobile.style.display = "";
        }
    });
    

    addEventListener("scroll",()=>{
        if(scrollY<20){
            menumobile.style.position = "";
            if(window.innerWidth>800){
                menudesk.style.display = "";
                menumobile.style.display = "none";

                submenu.style.visibility = "hidden";
                toogle = 0;

            }

        }else{
            menumobile.style.position = "fixed";
            menumobile.style.top = "0";
            if(window.innerWidth>800){
                menudesk.style.display = "none";
                menumobile.style.display = "";
                menumobile.style.animation = "displaymenu .5s";
            }
        }
    });
    

});
