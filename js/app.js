function comprar() {
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let qtde = parseInt(document.getElementById("qtd").value);
    if (qtde < 0) {
        alert("Insira uma qtde maior que zero.");
        return;
    }

    if (tipoIngresso == "pista") {
        if (disponivelPista >= qtde) disponivelPista -= qtde;
        else mostrarMensagem();
    }
    if (tipoIngresso == "superior") {
        if (disponivelSuperior >= qtde) disponivelSuperior -= qtde;
        else mostrarMensagem();
    }
    if (tipoIngresso == "inferior") {
        if (disponivelInferior >= qtde) disponivelInferior -= qtde;
        else mostrarMensagem();
    }

    document.getElementById("qtd").value = 0;

    mostrarQtdeDisponivel();
}

function mostrarQtdeDisponivel() {
    document.getElementById("qtd-pista").textContent = disponivelPista;
    document.getElementById("qtd-superior").textContent = disponivelSuperior;
    document.getElementById("qtd-inferior").textContent = disponivelInferior;
}

function mostrarMensagem() {
    alert("Qtde indisponível para o tipo de ingresso.");
}

let disponivelPista = parseInt(document.getElementById("qtd-pista").textContent);
let disponivelSuperior = parseInt(document.getElementById("qtd-superior").textContent);
let disponivelInferior = parseInt(document.getElementById("qtd-inferior").textContent);

