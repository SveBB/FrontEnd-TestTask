let user = {
    name: '',
    gender: '',
    country: '',
    city: '',
    birth: ''
  };

  const content1 = document.querySelector(".invise1");

let step = 0;

document.getElementById("btn1").onclick = function() {
    user.name = document.getElementById("input-id").value;
    console.log(user.name);
    
    var e = document.getElementById("select_id");
    user.gender = e.options[e.selectedIndex].text;
    if (user.gender == "Choose your gender") {
        user.gender = 'Unknow';
    }
    console.log(user.gender);
    document.getElementById("invise1").style.display = "inline";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "inline";
}

document.getElementById("btn2").onclick = function() {
    user.country= document.getElementById("input-country").value;
    console.log(user.country);
    user.city= document.getElementById("input-city").value;
    console.log(user.city);
    user.birth= document.getElementById("input-birth").value;
    console.log(user.birth);

    document.getElementById("invise2").style.display = "inline";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn3").style.display = "inline";
}

document.getElementById("btn3").onclick = function() {
    document.getElementById("invise3").style.display = "inline";
    document.getElementById("invise4").style.display = "inline";
}


let photo = ["/img/photo1.png", "/img/photo2.png", "/img/photo3.png"];
let photo_id = 0;

const mini_btn = document.getElementsByClassName('mini')
mini_btn[0].style.backgroundColor = "white";
function Clear(){
    for (let i = 0; i < mini_btn.length; i++) {
        mini_btn[i].style.backgroundColor = "Transparent";
      }
}


document.getElementById("rbt").onclick = function() {
    if (photo_id <= 1) {
        photo_id+=1;
        document.getElementById("mphoto").style.backgroundImage= "url('"+photo[photo_id]+"')";
    }
    Clear();
    mini_btn[photo_id].style.backgroundColor = "white";
}

document.getElementById("lbt").onclick = function() {
    if (photo_id >= 1) {
        photo_id-=1;
        document.getElementById("mphoto").style.backgroundImage= "url('"+photo[photo_id]+"')";
    }
    Clear();
    mini_btn[photo_id].style.backgroundColor = "white";
}