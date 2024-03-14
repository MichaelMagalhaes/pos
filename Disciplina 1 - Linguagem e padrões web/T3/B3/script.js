document.getElementById("paragrafo").innerHTML = "Hello World!"

var objt1 = document.getElementById("paragrafo2");
var n1 = 10;

function funcaoSoma(num1){
    var x = num1 + 3;
    console.log(x);
    return x;
}

//objt1.innerHTML = funcaoSoma(100);~

function funcaoAdicionaTitulo(){
    console.log("Antes do IF da funcaoAdicionaTitulo!");
    if(objt1.innerText === "Titulo Criado via Javascript"){
        return objt1.innerHTML = "Apaguei o titulo!";
    }else{
        return objt1.innerHTML = "<h1> Titulo Criado via Javascript </h1>" 
    }
}

