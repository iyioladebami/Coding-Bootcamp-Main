function change(){
    let image = document.getElementById("img").src = "image-john.jpg";
    let content = document.getElementById("content").innerHTML = "“If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
    let name = document.getElementById("name").innerHTML="John Tarkpur";
    let job = document.getElementById("job").innerHTML="Junior Front-end Developer";
    let slideButton = document.getElementById("slidebutton").style.rotate="180deg";
    let slideDiv = document.getElementById("slidediv");
    slideDiv.onclick = previous;
}
function previous(){
    let image = document.getElementById("img").src = "image-tanya.jpg";
    let content = document.getElementById("content").innerHTML = " “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
    let name = document.getElementById("name").innerHTML="Tonya Sinclair";
    let job = document.getElementById("job").innerHTML="UX Designer";
    let slideButton = document.getElementById("slidebutton").style.rotate="360deg";
    let slideDiv = document.getElementById("slidediv");
    slideDiv.onclick = change;
}