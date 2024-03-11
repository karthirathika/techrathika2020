
var popupoverlay=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box");
var addpopup=document.getElementById("add-popup");

addpopup.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block"
})

var cancelbook=document.getElementById("cancel-book");
cancelbook.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none"

})

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booknameinput=document.getElementById("bookname-input")
var authorinput=document.getElementById("author-input")
var description=document.getElementById("description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booknameinput.value}</h2>
    <h3>${authorinput.value}</h3>
    <p>${description.value}</p>
    <button onclick="deletebook(event)">delete</button>`
    container.append(div)
    popupoverlay.style.display="none";
    popupbox.style.display="none"
    
})

function deletebook(event){
    event.target.parentElement.remove()
}