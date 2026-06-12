//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#Resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) =>{
    evt.preventDefault()

    const form_num = new FormData (formDados)

    let largura = parseFloat(form_num.get('largura'))
    let altura = parseFloat(form_num.get('altura'))
    

    //let media = parseFloat(num1) + parsefloat(num2)
  
    let media = parseFloat((num1 + num2)) / parseFloat(2)
    

    divresultado.innerHTML = `quantidade de tinta ${media}`
})