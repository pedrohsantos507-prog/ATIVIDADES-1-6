//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) =>{
    evt.preventDefault()

    const form_num = new FormData (formDados)

    let num1 = parseFloat(form_num.get('num1'))
    let num2 = parseFloat(form_num.get('num2'))
    let num3 = parseFloat(form_num.get('num3'))

    console.log(num1, num2, num3)

    //let media = parseFloat(num1) + parsefloat(num2) + parsefloat
  
    let media = parseFloat((num1 + num2 + num3)) / parseFloat(3)
    

    divResultado.innerHTML = `A media do soma dos números ${media}`
})