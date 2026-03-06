let stars = document.querySelectorAll(".star");
let text = document.getElementById("rating-text");

stars.forEach((star,index)=>{

    star.addEventListener("click",()=>{

        stars.forEach(s=>s.classList.remove("active"));

        for(let i=0;i<=index;i++){
            stars[i].classList.add("active");
        }

        text.innerText = "You rated " + (index+1) + " star(s)";
    });

});