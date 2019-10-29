function vibeCheck (vibes){
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
});