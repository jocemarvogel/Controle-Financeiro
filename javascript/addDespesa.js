
var enviar = document.querySelector(".btn-enviarDados");
enviar.addEventListener("click", function (event) {
    event.preventDefault();

    var tdNome = document.querySelector(".td-nome");
    var tdData = document.querySelector(".td-data");
    var tdCategoria = document.querySelector(".td-categoria");
    var tdValor = document.querySelector(".td-valor");

    var form = document.querySelector("#formularioDespesa")

    var dadosDespesa = coletaDadosDespesasFormuladio(form)

    adicionaDadosTabela(dadosDespesa)

    function adicionaDadosTabela(dadosDespesa){
        var dadosDespesaTr = montaTr(dadosDespesa);
        var tabela = document.querySelector("#tabela-dadosDespesas");
        tabela.appendChild(dadosDespesaTr);
    }

    function coletaDadosDespesasFormuladio(form) {
        var dadosDespesa = {
            nome: form.nome.value,
            dataDespesa: (form.data.value).replace(/(\d*)-(\d*)-(\d*).*/, `$3/$2/$1`),
            categoriaDespesa: form.categoria.value,
            valorDespesa: Number(form.valor.value),
        }
        return dadosDespesa;
    }

    function montaTr(dadosDespesa){
        var linhaDados = document.createElement("tr");
        linhaDados.classList.add("dadosDespesaStyle");

        linhaDados.appendChild(montaTd(dadosDespesa.nome, "info-nome"));
        linhaDados.appendChild(montaTd(dadosDespesa.dataDespesa, "info-data"));
        linhaDados.appendChild(montaTd(dadosDespesa.categoriaDespesa, "info-categoria"))
        linhaDados.appendChild(montaTd(dadosDespesa.valorDespesa.toLocaleString(`pt-br`, { style: `currency`, currency: `BRL` }), "info-valorDespesa"))

        return linhaDados;
    }

    function montaTd(dado,classe){
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);
        return td;
    }

    document.querySelector(".informacoesCadastradas").style.display = "block";
})





