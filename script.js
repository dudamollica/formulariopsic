let resposta1, resposta2, resposta3, resposta4, resposta5, resposta6, resposta7, resposta8, resposta9, resposta10, resposta11, resposta12, resposta13, resposta14
let pontosTotais;

function concordoContinuar() {
    const termo = document.querySelector(".termo")
    termo.classList.add("escondido")
    const telaInicial = document.querySelector(".container-inicial")
    telaInicial.classList.remove("escondido")
}

function iniciarTeste() {
    const telaInicial = document.querySelector(".container-inicial")
    telaInicial.classList.add("escondido")
    const questionario = document.querySelector("form")
    questionario.classList.remove("escondido")
    const inicio = document.querySelector(".pergunta1")
    inicio.scrollIntoView()
}

function pergunta1(item) {
    resposta1 = Number(item.id)
    item.classList.remove("sem-click")
    item.classList.add("clicada")

    const pai = item.parentNode
    const filhas = pai.querySelectorAll(".sem-click")
    console.log(resposta1)
    for (let i = 0; i < filhas.length; i++) {
        filhas[i].classList.add("escondido")
    }

    const pergunta2 = document.querySelector(".pergunta2")
    pergunta2.classList.remove("escondido")
    pergunta2.scrollIntoView()
}

function pergunta2(item) {
    resposta2 = Number(item.id)
    item.classList.remove("sem-click")
    item.classList.add("clicada")

    const pai = item.parentNode
    const filhas = pai.querySelectorAll(".sem-click")
    console.log(resposta2)
    for (let i = 0; i < filhas.length; i++) {
        filhas[i].classList.add("escondido")
    }

    const pergunta3 = document.querySelector(".pergunta3")
    pergunta3.classList.remove("escondido")
    pergunta3.scrollIntoView()
}

function pergunta3(item) {
    resposta3 = Number(item.id)
    item.classList.remove("sem-click")
    item.classList.add("clicada")

    const pai = item.parentNode
    const filhas = pai.querySelectorAll(".sem-click")
    console.log(resposta3)
    for (let i = 0; i < filhas.length; i++) {
        filhas[i].classList.add("escondido")
    }

    const pergunta4 = document.querySelector(".pergunta4")
    pergunta4.classList.remove("escondido")
    pergunta4.scrollIntoView()
}

function pergunta4(item) {
    resposta4 = Number(item.id)
    item.classList.remove("sem-click")
    item.classList.add("clicada")

    const pai = item.parentNode
    const filhas = pai.querySelectorAll(".sem-click")
    console.log(resposta4)
    for (let i = 0; i < filhas.length; i++) {
        filhas[i].classList.add("escondido")
    }

    const pergunta5 = document.querySelector(".pergunta5")
    pergunta5.classList.remove("escondido")
    pergunta5.scrollIntoView()
}

function pergunta5(item) {
    resposta5 = Number(item.id)
    item.classList.remove("sem-click")
    item.classList.add("clicada")

    const pai = item.parentNode
    const filhas = pai.querySelectorAll(".sem-click")
    console.log(resposta5)
    for (let i = 0; i < filhas.length; i++) {
        filhas[i].classList.add("escondido")
    }

    const pergunta6 = document.querySelector(".pergunta6")
    pergunta6.classList.remove("escondido")
    pergunta6.scrollIntoView()
}

function pergunta6(item) {
    resposta6 = Number(item.id)
    item.classList.remove("sem-click")
    item.classList.add("clicada")

    const pai = item.parentNode
    const filhas = pai.querySelectorAll(".sem-click")
    console.log(resposta6)
    for (let i = 0; i < filhas.length; i++) {
        filhas[i].classList.add("escondido")
    }

    const pergunta7 = document.querySelector(".pergunta7")
    pergunta7.classList.remove("escondido")
    pergunta7.scrollIntoView()
}

function pergunta7(item) {
    resposta7 = Number(item.id)
    item.classList.remove("sem-click")
    item.classList.add("clicada")

    const pai = item.parentNode
    const filhas = pai.querySelectorAll(".sem-click")
    console.log(resposta7)
    for (let i = 0; i < filhas.length; i++) {
        filhas[i].classList.add("escondido")
    }

    const pergunta8 = document.querySelector(".pergunta8")
    pergunta8.classList.remove("escondido")
    pergunta8.scrollIntoView()
}

function pergunta8(item) {
    resposta8 = Number(item.id)
    item.classList.remove("sem-click")
    item.classList.add("clicada")

    const pai = item.parentNode
    const filhas = pai.querySelectorAll(".sem-click")
    console.log(resposta8)
    for (let i = 0; i < filhas.length; i++) {
        filhas[i].classList.add("escondido")
    }

    const pergunta9 = document.querySelector(".pergunta9")
    pergunta9.classList.remove("escondido")
    pergunta9.scrollIntoView()
}

function pergunta9(item) {
    resposta9 = Number(item.id)
    item.classList.remove("sem-click")
    item.classList.add("clicada")

    const pai = item.parentNode
    const filhas = pai.querySelectorAll(".sem-click")
    console.log(resposta9)
    for (let i = 0; i < filhas.length; i++) {
        filhas[i].classList.add("escondido")
    }

    const pergunta10 = document.querySelector(".pergunta10")
    pergunta10.classList.remove("escondido")
    pergunta10.scrollIntoView()
}

function pergunta10(item) {
    resposta10 = Number(item.id)
    item.classList.remove("sem-click")
    item.classList.add("clicada")

    const pai = item.parentNode
    const filhas = pai.querySelectorAll(".sem-click")
    console.log(resposta10)
    for (let i = 0; i < filhas.length; i++) {
        filhas[i].classList.add("escondido")
    }

    const pergunta11 = document.querySelector(".pergunta11")
    pergunta11.classList.remove("escondido")
    pergunta11.scrollIntoView()
}

function pergunta11(item) {
    resposta11 = Number(item.id)
    item.classList.remove("sem-click")
    item.classList.add("clicada")

    const pai = item.parentNode
    const filhas = pai.querySelectorAll(".sem-click")
    console.log(resposta11)
    for (let i = 0; i < filhas.length; i++) {
        filhas[i].classList.add("escondido")
    }

    const pergunta12 = document.querySelector(".pergunta12")
    pergunta12.classList.remove("escondido")
    pergunta12.scrollIntoView()
}

function pergunta12(item) {
    resposta12 = Number(item.id)
    item.classList.remove("sem-click")
    item.classList.add("clicada")

    const pai = item.parentNode
    const filhas = pai.querySelectorAll(".sem-click")
    console.log(resposta12)
    for (let i = 0; i < filhas.length; i++) {
        filhas[i].classList.add("escondido")
    }

    const pergunta13 = document.querySelector(".pergunta13")
    pergunta13.classList.remove("escondido")
    pergunta13.scrollIntoView()
}

function pergunta13(item) {
    resposta13 = Number(item.id)
    item.classList.remove("sem-click")
    item.classList.add("clicada")

    const pai = item.parentNode
    const filhas = pai.querySelectorAll(".sem-click")
    console.log(resposta13)
    for (let i = 0; i < filhas.length; i++) {
        filhas[i].classList.add("escondido")
    }

    const pergunta14 = document.querySelector(".pergunta14")
    pergunta14.classList.remove("escondido")
    pergunta14.scrollIntoView()
}

function pergunta14(item) {
    resposta14 = Number(item.id)
    item.classList.remove("sem-click")
    item.classList.add("clicada")

    const pai = item.parentNode
    const filhas = pai.querySelectorAll(".sem-click")
    console.log(resposta14)
    for (let i = 0; i < filhas.length; i++) {
        filhas[i].classList.add("escondido")
    }

    const enviar = document.querySelector(".enviar")
    enviar.classList.remove("escondido")
    enviar.scrollIntoView()
    pontosTotais = (resposta1 + resposta2 + resposta3 + resposta4 + resposta5 + resposta6 + resposta7 + resposta8 + resposta9 + resposta10 + resposta11 + resposta12 + resposta13 + resposta14)
    console.log(pontosTotais)
}

function paginaResultado() {
    const formulario = document.querySelector("form")
    formulario.classList.add("escondido")
    const resultado = document.querySelector(".resultado")
    resultado.classList.remove("escondido")

    if (pontosTotais >= 42) {
        resultado.innerHTML = `<h1> Sua pontuação foi ${pontosTotais}</h1>
        <p>Você sinalizou algum nível de estresse! Sua saúde mental pode estar comprometida! Mas, calma! Alguns hábitos saudáveis devem ser adotados. Aguarde o próximo material.</p>`
    }
    else {
        resultado.innerHTML = `<h1> Sua pontuação foi ${pontosTotais}</h1>
    <p>Fique tranquilo, seu nível de estresse não está em um nível de risco. Continue com seus bons habitos!!!</p>`
    }
}

function loading(){
    const load= document.querySelector(".enviar")
    load.innerHTML=`<img src="img/load.png" class="loading"/>`
}


const handleSubmit = (event) => {
    event.preventDefault();
    loading();
    fetch("https://api.sheetmonkey.io/form/vKpLAs3MmrSneW3g3GVVq3", {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            pergunta1: resposta1, pergunta2: resposta2, pergunta3: resposta3, pergunta4: resposta4,
            pergunta5: resposta5, pergunta6: resposta6, pergunta7: resposta7, pergunta8: resposta8, pergunta9: resposta9,
            pergunta10: resposta10, pergunta11: resposta11, pergunta12: resposta12, pergunta13: resposta13, pergunta14: resposta14
        }),
    }).then(() => paginaResultado())
}

document.querySelector("form").addEventListener("submit", handleSubmit)