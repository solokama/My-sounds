let mysound = document.getElementById("mysound");
let icon = document.getElementById("icon");

//Creating a function that will change

//Pause to play and vice-versa

icon.onclick = function() {
    if(mysound.paused){
        //if paused then play the music and change thee image

        mysound.play();
        icon.src = "https://media.geeksforgeeks.org/wp-content/uploads/20210402235545/Pause.png";

    } else {

        mysound.pause();
        icon.src = "https://media.geeksforgeeks.org/wp-content/uploads/20210402235520/play.png";

    }


}