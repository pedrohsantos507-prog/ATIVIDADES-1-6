/*1. Capturar submit
2. Pegar nome
3. Pegar nota1
4. Pegar nota2
5. Pegar nota3
6. Calcular média
7. Verificar:
   média >= 6 ?
8. Mostrar:
   nome
   média
   situação */

const formDados = document.querySelector('#formulario')
const divresultado = document.querySelector('#resultado')

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let nome = (form_num.get('nome'))
    let nota1 = parseFloat(form_num.get('nota1'))
    let nota2 = parseFloat(form_num.get('nota2'))
    let nota3 = parseFloat(form_num.get('nota3'))

let media = (nota1 + nota2 + nota3) / 3

 let situacao 
if(media >= 6) { 
    // aprovado
    
    situacao = "Aprovado"
}else{
    // reprovado
   
    situacao = "Reprovado"
}
divresultado.innerHTML = `
Aluno: ${nome}
<br>
Média: ${media.toFixed(2)}
<br>
Situacao: ${situacao}`
})