// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector("#formulario");
const divresultado = document.querySelector("#resultado");

// EVENTO DE SUBMIT
formDados.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const form_num = new FormData(formDados)

    // CAPTURANDO DADOS

    const nome = form_num.get("nome");
    const peso = Number(form_num.get("peso"));
    const altura = Number(form_num.get("altura"));
    // CALCULANDO IMC
    const imc = peso / (altura * altura);

    let faixa = "";

    // VERIFICANDO A FAIXA DE RISCO
    if (imc < 20) {
        faixa = "Abaixo do peso";
    } else if (imc < 25) {
        faixa = "Normal";
    } else if (imc < 30) {
        faixa = "Excesso de peso";
    } else if (imc < 35) {
        faixa = "Obesidade";
    } else {
        faixa = "Obesidade mórbida";
    }

    // EXIBINDO RESULTADO
    divresultado.innerHTML = `
        <h3>Resultado</h3>
        <p><strong>Paciente:</strong> ${nome}</p>
        <p><strong>IMC:</strong> ${imc.toFixed(2)}</p>
        <p><strong>Faixa de Risco:</strong> ${faixa}</p>
    `;
});