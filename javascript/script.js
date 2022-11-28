var enviar = document.querySelector(".btn-enviarDados");
enviar.addEventListener("click", function (event) {
    event.preventDefault();

    var formularioDados = document.querySelector("#formulario");

    var linhaDados = document.createElement("tr");

    var celulaNome = document.createElement("td");
    var celulaData = document.createElement("td");
    var celulaCategoria = document.createElement("td");
    var celulaValor = document.createElement("td");

    celulaNome.textContent = nome.value;
    celulaData.textContent = data.value;
    celulaCategoria.textContent = categoria.value;
    celulaValor.textContent = valor.value;

    linhaDados.appendChild(celulaNome);
    linhaDados.appendChild(celulaData);
    linhaDados.appendChild(celulaCategoria);
    linhaDados.appendChild(celulaValor);

    var tabelaGastos = document.querySelector(".informacoesCadastradas").querySelector("tbody");
    tabelaGastos.appendChild(linhaDados);
    dados

    console.log(dataEscolhida)
    console.log(dataEscolhida)
});



