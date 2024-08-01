const search = document.querySelector('.search');
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
 
btn.addEventListener("click",()=>{
    search.classList.toggle("active");
    btn.classList.toggle("active")
    input.focus()
    if(search.classList.contains("active")){
        input.setAttribute("Placeholder","Search")
    }
    else
    {
        input.setAttribute("Placeholder","")
    }

    });


