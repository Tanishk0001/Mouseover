function myFunction(){
    let div = document.querySelector("#div");
    let body = document.querySelector("body");
    let curr = "no-hover";
    div.addEventListener("mouseover", () =>{
        if(curr === "no-hover"){
            body.classList.add("hover");
            body.classList.remove("no-hover");
            body.innerText = "YOU HOVERED THAT'S WHY THE COLOR CHANGES...AANKH MAARNE WALI EMOJI";
        }else{
            body.classList.add("no-hover");
            body.classList.remove("hover");
        }
        console.log(curr);
    });
}