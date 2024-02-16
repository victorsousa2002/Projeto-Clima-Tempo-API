const key = "caa31a5065b8ba4af64a305290d48f35"
const botao = document.querySelector(".botao-busca")
const lugar = document.querySelector(".cidade")
const temperatura = document.querySelector(".temp")
const imagem = document.querySelector('.img-previsao')
const previsao = document.querySelector('.texto-previsao')
const umidade = document.querySelector('.umidade')

botao.addEventListener('click',cliqueBotao)

function cliqueBotao(){

    const cidade = document.querySelector('.input-cidade').value
    
    buscarCidade(cidade)
}

async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    console.log(dados)    
    dadosNaTela(dados)
}

function dadosNaTela(dados){

    lugar.innerHTML = "Tempo em "+ dados.name
    temperatura.innerHTML = Math.floor(dados.main.temp) +"°C"


}