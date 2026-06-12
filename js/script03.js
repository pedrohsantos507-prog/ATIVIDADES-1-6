/*1. Capturar submit
2. Impedir recarregamento da página
3. Ler os campos
4. Converter para número
5. Calcular litros necessários
6. Calcular valor total
7. Exibir resultado

 */
const formDados = document.querySelector('#formulario')
const divresultado = document.querySelector('#resultado')

formDados.addEventListener('submit', (evt) =>{
    evt.preventDefault()

const form_num = new FormData (formDados)
let distancia = parseFloat(form_num.get('distancia'))
let consumo = parseFloat(form_num.get('consumo'))
let preco = parseFloat(form_num.get('preco'))

let litros = distancia / consumo
let valortotal = litros * preco
divresultado.innerHTML = `combustivel necessário: ${litros}
litros - valor total: R$ ${valortotal}`
    })