//selecting popup box,popup overlay button

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopbutton=document.getElementById("add-popup")

addpopbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button

var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select container,add-book,book-title-input,book-author-input,book-desc-input

var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdesc=document.getElementById("book-desc-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookdesc.value}</p>
            <button onclick="deletebook(event)">Delete</button>`//template literal
    container.append(div)

    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

function deletebook(event){
    event.target.parentElement.remove()

}

