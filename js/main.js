function ahaha() {
    let please = confirm("Hi po sir, flat uno po plsssss")
    if(please){
        alert("YEHEEEEEEY")
    }else{
        ahaha()
    }
}

function mouseover(){
    document.getElementById("image").src = "image/shef.png"
    document.getElementById("who").innerHTML = "Oh. Its him."
}

function mouseout(){
    document.getElementById("image").src = "image/hotdog-omelette.jpg"
    document.getElementById("who").innerHTML = "Who cooked this?"
}