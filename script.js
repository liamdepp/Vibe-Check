/*function vibeCheck (vibes){
    if(vibes === "true"){
        document.querySelector("#displayVibe").innerText = "You have Passed the Vibe check!"
        document.querySelector("#displayVibe").style.color = "green";
    } else {
        document.querySelector("#displayVibe").innerText = "Vibe's off bro, check yourself."
        document.querySelector("#displayVibe").style.color = "red";
    }
}

let form = document.querySelector("#vibeCheck");
form.addEventListener("submit", function(e){
    e.preventDefault();
    formData = new FormData(form);
    vibeCheck(
        formData.get("vibes"));
    form.reset(); 
}); */

let button = document.querySelector("button");
button.addEventListener("click", function(){
    let randomVibe = Math.floor(Math.random() * 100);
    if (randomVibe < 50){
        document.querySelector("#displayVibe").innerText = "You have passed the Vibe check!"
        document.querySelector("#displayVibe").style.color = "green";
    } else {
        document.querySelector("#displayVibe").innerText = "Vibe's off bro, check yourself.";
        document.querySelector("#displayVibe").style.color = "red";
    }
});