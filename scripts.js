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

let bip = window.document.getElementById('botaomusic')
bip.addEventListener('click', cli)