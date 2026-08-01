/* ============================= */
/* LOADER */
/* ============================= */


window.addEventListener("load",()=>{


const loader =
document.querySelector(".loader");



setTimeout(()=>{


loader.style.opacity="0";



setTimeout(()=>{


loader.style.display="none";


},500);



},1000);



});







/* ============================= */
/* HEADER SCROLL */
/* ============================= */


const header =
document.querySelector("header");



window.addEventListener("scroll",()=>{


if(window.scrollY > 50){


header.classList.add("scrolled");


}

else{


header.classList.remove("scrolled");


}



});








/* ============================= */
/* MOBILE MENU */
/* ============================= */


const menu =
document.querySelector(".menu");



const nav =
document.querySelector("nav");



menu.addEventListener("click",()=>{


nav.classList.toggle("active");


});






document.querySelectorAll("nav a")
.forEach(link=>{


link.addEventListener("click",()=>{


nav.classList.remove("active");


});


});








/* ============================= */
/* TYPING EFFECT */
/* ============================= */


const typing =
document.getElementById("typing");



const texts=[

"Programmer",

"Web Developer",

"Application Creator",

"JavaScript Developer"

];



let textIndex=0;

let charIndex=0;

let deleting=false;




function type(){



let current =
texts[textIndex];





if(!deleting){


typing.textContent =
current.substring(
0,
charIndex
);



charIndex++;





if(charIndex > current.length){


deleting=true;


setTimeout(type,1200);


return;


}



}

else{


typing.textContent =
current.substring(
0,
charIndex
);



charIndex--;



if(charIndex===0){


deleting=false;


textIndex++;



if(textIndex >= texts.length){

textIndex=0;

}


}



}





setTimeout(
type,
deleting ? 50 : 100
);



}



type();









/* ============================= */
/* SCROLL REVEAL */
/* ============================= */


const elements =
document.querySelectorAll(".reveal");




const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},
{

threshold:0.15

}

);






elements.forEach(element=>{


observer.observe(element);


});








/* ============================= */
/* CONTACT SYSTEM */
/* ============================= */


const form =
document.getElementById("contactForm");



if(form){


form.addEventListener(
"submit",
(e)=>{


e.preventDefault();




const message={


id:
Date.now(),



name:
document.getElementById("name").value,



email:
document.getElementById("email").value,



phone:
document.getElementById("phone").value,



message:
document.getElementById("message").value,



date:
new Date().toLocaleString(),



status:
"New"



};







let requests =

JSON.parse(
localStorage.getItem("requests")
)
||
[];







requests.push(message);






localStorage.setItem(

"requests",

JSON.stringify(requests)

);







alert(
"Message sent successfully!"
);






form.reset();



}


);



}







/* ============================= */
/* SMOOTH NAVIGATION */
/* ============================= */


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{


anchor.addEventListener(
"click",
function(e){


e.preventDefault();



document.querySelector(
this.getAttribute("href")
)
.scrollIntoView({

behavior:"smooth"

});



});



});