
var isim = prompt(" Adınız Nedir? ");

document.getElementById("myName").innerHTML= isim

let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
  function tarihSaat() {
    var date = new Date(); 
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    document.getElementById("myClock").innerHTML = hours + " : " + minutes + " : " + seconds + " " + gunler[date.getDay()];
}

setInterval(tarihSaat, 1000);
 


