// DOM Toggle Exercise
var btn = document.querySelector("button");
var isred = false;
btn.addEventListener("click",function() {
    if(isred){
        document.body.style.background = "white";
        isred = false;
    }
    else
    {document.body.style.background = "red";
    isred = true;
}
}) 

var btn = document.querySelector("button");
btn.addEventListener("click", function()
{
    document.body.classList.toggle("bg");
}
);