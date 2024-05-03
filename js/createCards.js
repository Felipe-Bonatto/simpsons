
const setInfSimpsons = async () => {
    const url = "https://apisimpsons.fly.dev/api/personajes?limit=680&page=1"

    // executa a url da api e aguarda (await) o retorno do servidor
    const response = await fetch(url)

    // convertendo o resultado obtido em formato json
    const dado = await response.json()

    let containerEl = document.querySelector('.container')

    dado.docs.forEach(function (dadosPerson) {

        // criando os elementos
        let divCards = document.createElement('div')
        let figure = document.createElement('figure')
        let imagem = document.createElement('img')
        let h2namePerson = document.createElement('h2')
        let divDescricao = document.createElement('div')
        let paragrafoGenero = document.createElement('p')
        let paragrafoEstado = document.createElement('p')
        let paragrafoOcupacao = document.createElement('p')


        // text
        let textGenero = document.createTextNode(`Genero: ${dadosPerson.Genero}`)
        let textEstado = document.createTextNode(`Estado: ${dadosPerson.Estado}`)
        let textOcupacao = document.createTextNode(`Ocupação: ${dadosPerson.Ocupacion}`)
        let textNamePerson = document.createTextNode(dadosPerson.Nombre)


        // adicionando as propriedades
        divCards.classList.add('cards')
        figure.classList.add('caixa_imagem')
        imagem.setAttribute('src', dadosPerson.Imagen)
        h2namePerson.classList.add('name-person')
        divDescricao.classList.add('descricao')


        // adicionando os elementos nos outros
        containerEl.appendChild(divCards)
        divCards.appendChild(figure)
        figure.appendChild(imagem)
        divCards.appendChild(h2namePerson)
        divCards.appendChild(divDescricao)
        h2namePerson.appendChild(textNamePerson)
        divDescricao.appendChild(paragrafoGenero)
        paragrafoGenero.appendChild(textGenero)
        divDescricao.appendChild(paragrafoEstado)
        paragrafoEstado.appendChild(textEstado)
        divDescricao.appendChild(paragrafoOcupacao)
        paragrafoOcupacao.appendChild(textOcupacao)

    })
}

window.addEventListener('load', function () {
    setInfSimpsons()
})


const pesquisarPerson = async () => {
    let inputPesquisar = document.getElementById('input-pesquisar')
    const namePesquisa = document.getElementById('name-person')
    const imgPerson = document.getElementById('img-person')
    const spanGenero = document.getElementById('span-genero')
    const spanEstado = document.getElementById('span-estado')
    const spanOcupacao = document.getElementById('span-ocupacao')
    let pesquisaValue = inputPesquisar.value


    const container = document.querySelector('.container')
    const containerPesquisa = document.querySelector('.container-pesquisa')

    const url = "https://apisimpsons.fly.dev/api/personajes?limit=680&page=1"
    const response = await fetch(url)
    const dado = await response.json()

    dado.docs.forEach(function (item) {
        if (pesquisaValue.trim().toUpperCase() === item.Nombre.trim().toUpperCase()) {
            namePesquisa.innerText = item.Nombre
            spanGenero.innerText = item.Genero
            spanEstado.innerText = item.Estado
            spanOcupacao.innerHTML = item.Ocupacion
            imgPerson.src = item.Imagen
            container.classList.add('none')
            containerPesquisa.classList.remove('none')
            inputPesquisar.value = ''
        } else if (pesquisaValue == '') {
            container.classList.remove('none')
            containerPesquisa.classList.add('none')
        }
    })
}

const btnBuscar = document.getElementById('btn-buscar')
btnBuscar.addEventListener('click', () => {
    pesquisarPerson()
})


const limparPesquisa = () => {
    const container = document.querySelector('.container')
    const containerPesquisa = document.querySelector('.container-pesquisa')
    let inputPesquisar = document.getElementById('input-pesquisar')
    container.classList.remove('none')
    containerPesquisa.classList.add('none')
    inputPesquisar.value = ''
}


const clear = document.getElementById('limpar')
clear.addEventListener('click', () => {
    limparPesquisa()
})