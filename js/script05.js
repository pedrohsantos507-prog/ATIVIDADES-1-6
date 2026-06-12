const formDados = document.querySelector('#formulario')
const divresultado = document.querySelector('#resultado')
formDados.addEventListener('submit', (evt) =>{
    evt.preventDefault()
 
    const form_num = new FormData(formDados)

    const lado1 = parseFloat(form_num.get('lado1'))
    const lado2 = parseFloat(form_num.get('lado2'))
    const lado3 = parseFloat(form_num.get('lado3'))

console.log(lado1,lado2,lado3)

    if (lado1 === lado2 && lado2 === lado3) {
        divresultado.innerHTML = "Triângulo Equilátero"
    } 
    else if (
        lado1 === lado2 ||
        lado1 === lado3 ||
        lado2 === lado3
    ) {
        divresultado.innerHTML = "Triângulo Isósceles"
    } 
    else {
        divresultado.innerHTML = "Triângulo Escaleno"
    }
    
})
