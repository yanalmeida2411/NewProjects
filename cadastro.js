let login = document.getElementById("login");
let senha = document.getElementById("senha");
let btnAcessar = document.getElementById("btnAcessar");

let user =document.getElementById("fotoUser");
let fundo = document.querySelector(".containerContent")

login.addEventListener("click",apagarLogin)
senha.addEventListener("click",apagarSenha)


function apagarLogin(){
    login.placeholder = ""
    senha.placeholder = "Senha"
    

}
function apagarSenha(){
    senha.placeholder = ""
    login.placeholder="Usuário"
}


function logar(){

    if(login.value == "admin" && senha.value == "admin"){
        location.href = "index.html"
    }else{
        user.src=`imagens/incorreto.png`
        fundo.style.background="rgba(255, 0, 0, 0.587)"
        senha.placeholder = "Senha"
        login.placeholder = "Usuário"
        
    }
}



