//Fazer a inserção de vários números em sequência.
function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

//Limpar toda a tela de calculo.
function limpar(){
    document.getElementById('resultado').innerHTML = "";
   
}

//Apaga o ultimo número ou operadora inserido na tela.
function apagar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length-1)
// o método substring vai retornar todo o valor dentro da string.
// o método resultado.length-1 vai apagar o ultimo dado inserido.
}

//Realizar o calculo matématico de acordo com a função passada no parâmetro.
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
        if(resultado){
            document.getElementById('resultado').innerHTML = eval(resultado);
        }else{
            alert('Nada para calcular')
        }        
    
}

//Keydown - Evento de clique do teclado
/*
document.addEventListener("keypress", function(e){

    if(e.key === "1"){
    var btn = document.getElementById('1')
    btn.click()
}
    if(e.key === "2"){
    var btn = document.getElementById('2')
    btn.click()
}
    if(e.key === "3"){
    var btn = document.getElementById('3')
    btn.click()
}
    if(e.key === "4"){
    var btn = document.getElementById('4')
    btn.click()
}
    if(e.key === "5"){
    var btn = document.getElementById('5')
    btn.click()
}  
    if(e.key === "6"){
    var btn = document.getElementById('6')
    btn.click()
}  

    if(e.key === "7"){
    var btn = document.getElementById('7')
    btn.click()
}  

    if(e.key === "8"){
    var btn = document.getElementById('8')
    btn.click()
}    
    if(e.key === "9"){
    var btn = document.getElementById('9')
    btn.click()
}  

    if(e.key === "0"){
    var btn = document.getElementById('0')
    btn.click()
}  

    if(e.key === "+"){
    var btn = document.getElementById('+')
    btn.click()
}  

    if(e.key === "-"){
    var btn = document.getElementById('-')
    btn.click()
}  

    if(e.key === "*"){
    var btn = document.getElementById('*')
    btn.click()
}  

    if(e.key === "/"){
    var btn = document.getElementById('/')
    btn.click()
}  


})

if(e.key === "back"){
    var btn = document.getElementById('back')
    btn.click()
}  

    if(e.key === "C"){
    var btn = document.getElementById('C')
    btn.click()
}  


let bip = window.document.getElementById('botaomusic')
bip.addEventListener('click', cli) 

*/