 function abrirmenu() {
    let menu = document.getElementById("menu");
    
    if (menu.style.display === "none"){
        menu.style.display = "block"
    } else{
        menu.style.display = "none"
    }
 }


 function insereDados(){
    let nome = prompt("Digite seu nome", "seu nome aqui");
    document.querySelector("#campo_vazio").innerHTML = nome;
 }


 