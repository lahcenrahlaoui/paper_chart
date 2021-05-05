// var text = ["Flugverspatung und Flugverfruhung", "Flugannullierung und Flugumleitung", "Flugzeugmangel und Nichtbeforderung", "Flug verpasst", "Gepack-Problematik"];
// var counter = 0;
// var elem = document.querySelector("#demo");
// setInterval(change1, 6000);
// function change1() {
//     counter++;
//     if (counter >= text.length) {
//         counter = 0;
//     }    
//     var a = setTimeout(function(){
        
//         elem.classList.remove("show");
//         elem.classList.add("hide");
//     }, 5000);
    
//     var x = setTimeout(function(){
//         elem.classList.remove("hide");
//         elem.classList.add("show");
//         elem.innerHTML = text[counter];
//         // elem.innerHTML = " Welcome!!";  
//     }, 6000);
// }


// const humberger = document.querySelector("#humberger");
// const sidebar = document.querySelector(".sidebar");
// const main_content = document.querySelector(".main_content");
// const idline1 = document.querySelector("#idline1");
// const idline2 = document.querySelector("#idline2");
// const idline3 = document.querySelector("#idline3");
// const hide_menu = document.querySelectorAll(".hide-menu");
// const fas = document.querySelectorAll(".fas");

// humberger.addEventListener('click',function(){
//     hide_menu.forEach(element => {
//         element.classList.toggle("show-menu")
//     });
//     fas.forEach(element => {
//         element.classList.toggle("hide-fas")
//     });
//     sidebar.classList.toggle("small-nav");
//     main_content.classList.toggle("big-content");

//     idline1.classList.toggle('line1')
//     idline2.classList.toggle('line2')
//     idline3.classList.toggle('line3')
    


// })

////////////////////////////






  var text = [" ", " ", " ", " ", " "];
var counter = 0;
var elem = document.querySelector("#demo");
setInterval(change1, 6000);
function change1() {
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }    
    var a = setTimeout(function(){
        
        elem.classList.remove("show");
        elem.classList.add("hide");
    }, 5000);
    
    var x = setTimeout(function(){
        elem.classList.remove("hide");
        elem.classList.add("show");
        elem.innerHTML = text[counter];
        // elem.innerHTML = " Welcome!!";  
    }, 6000);
}


const app_vesitors = document.querySelector(".app-vesitors-chart");
const humberger = document.querySelector("#humberger");
const sidebar = document.querySelector(".sidebar");
const main_content = document.querySelector(".main_content");
const idline1 = document.querySelector("#idline1");
const idline2 = document.querySelector("#idline2");
const idline3 = document.querySelector("#idline3");
const hideMenu = document.querySelectorAll(".hide-menu");
const fas = document.querySelectorAll(".fas");

humberger.addEventListener('click',function(){

        
    // setTimeout(function() {
    //     hideMenu.forEach(element => {
    //         if(element.style.opacity == 0 ){
    //             element.style.opacity = 1 ;
    //         }
    //     })
    // }, 300);
    // hideMenu.forEach(element => {
    //         element.style.opacity = 0 ;
    // });
    //     hideMenu.forEach(element => {
    //         if(element.style.display != "none"){
    //             console.log(" >>>> ");
    //             element.classList.add("show-menu")
    //         }else{
    //             console.log(" <<<< ");
    //             element.classList.remove("show-menu")
    //         }
    //     });

        
            // hideMenu.forEach(element => {
            //     if(element.style.display == "none"){
            //         element.classList.add("show-menu")
            //     }
            // });
        
        //else{
        //     element.classList.remove("show-menu")
        // }
    


        $('.bb').delay(5000).toggleClass('sss');
        $(".bb").delay(5000).toggleClass('hide-menu');

    sidebar.classList.toggle("small-nav");
    main_content.classList.toggle("big-content");

    idline1.classList.toggle('line1')
    idline2.classList.toggle('line2')
    idline3.classList.toggle('line3')

    if(app_vesitors.style.width == "95%"){
        app_vesitors.style.width = "90%";
    }else{
        app_vesitors.style.width = "95%";
    }


})



// humberger.addEventListener('click',function(){
//     hide_menu.forEach(element => {
//         element.classList.toggle("show-menu")
//     });
//     fas.forEach(element => {
//         element.classList.toggle("hide-fas")
//     });
//     sidebar.classList.toggle("small-nav");
//     main_content.classList.toggle("big-content");

//     idline1.classList.toggle('line1')
//     idline2.classList.toggle('line2')
//     idline3.classList.toggle('line3')
    

