function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    var p1 = Math.floor(Math.random() * 450);
    var p2 = Math.floor(Math.random() * 580);
   
    bola.setAttribute("style", "left:"+p1+"px;  top:"+p2+"px;");
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
}

function estourar(elemento){
    document.body.removeChild(elemento);
}

function iniciar(){
    setInterval(addBola, 500);
}