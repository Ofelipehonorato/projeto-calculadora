//Fazer a inserção de vários números em sequência.
function insert(num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

//Limpar toda a tela de calculo.
function limpar(){
    document.getElementById('resultado').innerHTML = ""
   
}

//Apaga o ultimo número ou operadora inserido na tela.
function apagar(){
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length-1)
// o método substring vai retornar todo o valor dentro da string.
// o método resultado.length-1 vai apagar o ultimo dado inserido.
}

//Realizar o calculo matématico de acordo com a função passada no parâmetro.
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
   
        if(resultado){            
            document.getElementById('resultado').innerHTML = eval(resultado)
               
        }else{
            alert('Nada para calcular')
        } 
}

const td = document.querySelector('input')
td.addEventListener('click',function(){
    const audio = document.querySelector('audio')
    audio.currentTime = 0
    audio.play()
})

const mapaTeclado = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    0: '0',
    '+': '+',
    '-': '-',
    '*': '*',
    '/': '/',
    '=': 'igual',
    enter: 'igual',
    back: 'apagar',
    C:'limpar'

}
const mapearTeclado = (evento) => {
    const tecla = evento.key
    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1
    if (teclaPermitida()) document.getElementById(mapaTeclado[tecla]).click()
}
document.addEventListener('keydown', mapearTeclado)