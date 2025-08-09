console.log("Hello World");
const nav_items = document.getElementsByClassName("nav-item1")[0];
const con2 = document.getElementsByClassName("container2")[0];
const nav_items2 = document.getElementsByClassName("nav-item2")[0];
const nav_items3 = document.getElementsByClassName("nav-item3")[0];
const nav_items4 = document.getElementsByClassName("nav-item4")[0];
const con3 = document.getElementsByClassName("container3")[0];
const con4 = document.getElementsByClassName("container4")[0];
const con5 = document.getElementsByClassName("container5")[0];
nav_items.addEventListener("click",function(){
    con2.scrollIntoView({ behavior: "smooth" })
    con2.classList.add("highlight")
    setTimeout( function() {
        con2.classList.remove("highlight")
    },2000);
});
nav_items2.addEventListener("click",function(){
    con3.scrollIntoView({ behavior: "smooth" })
    con3.classList.add("highlight2")
    setTimeout( function() {
        con3.classList.remove("highlight2")
    },2000);
});
nav_items3.addEventListener("click",function(){
    con4.scrollIntoView({ behavior: "smooth" })
    con4.classList.add("highlight3")
    setTimeout( function() {
        con4.classList.remove("highlight3")
    },2000);
});
nav_items4.addEventListener("click",function(){
    con5.scrollIntoView({ behavior: "smooth" })
    con5.classList.add("highlight4")
    setTimeout( function() {
        con5.classList.remove("highlight4")
    },2000);
});