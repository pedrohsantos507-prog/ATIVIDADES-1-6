//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divresultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) =>{
    evt.preventDefault()

    const form_num = new FormData (formDados)

     let largura = parseFloat(form_num.get('largura'))
    let altura = parseFloat(form_num.get('altura'))

    let area = largura * altura
    let tinta = area / 2
    

    //let media = parseFloat(num1) + parsefloat(num2)
  
    let media = parseFloat((altura + largura)) / parseFloat(2)
    

    divresultado.innerHTML = `
        <p class="area">Área da parede: ${area.toFixed(2)} m²</p>
        <p class="tinta">Quantidade de tinta: ${tinta.toFixed(2)} litros</p>
    `
})