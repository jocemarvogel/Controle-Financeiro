
var enviarDadosDespesa = document.querySelector(".btn-enviarDadosDespesa");
enviarDadosDespesa.addEventListener("click", function (adicionarDespesa) {
    adicionarDespesa.preventDefault();

    var tdNome = document.querySelector(".td-nome");
    var tdData = document.querySelector(".td-data");
    var tdCategoria = document.querySelector(".td-categoria");
    var tdValor = document.querySelector(".td-valor");

    var formDespesa = document.querySelector("#formularioDespesa")

    var dadosDespesa = coletaDadosDespesasFormuladio(formDespesa)

    adicionaDadosTabela(dadosDespesa)

    function adicionaDadosTabela(dadosDespesa){
        var dadosDespesaTr = montaTr(dadosDespesa);
        var tabela = document.querySelector("#tabela-dados");
        tabela.appendChild(dadosDespesaTr);
    }
    
    function coletaDadosDespesasFormuladio(formDespesa) {
        var dadosDespesa = {
            nomeDespesa: formDespesa.nome.value,
            dataDespesa: (formDespesa.data.value).replace(/(\d*)-(\d*)-(\d*).*/, `$3/$2/$1`),
            categoriaDespesa: formDespesa.categoria.value,
            valorDespesa: parseFloat((formReceita.valorReceita.value).replace(`,`,`.`)),
        }
        return dadosDespesa;
    }

    function montaTr(dadosDespesa){
        var linhaDados = document.createElement("tr");
        linhaDados.classList.add("dadosDespesaStyle");

        linhaDados.appendChild(montaTd(dadosDespesa.nomeDespesa, "despesaAdicionada"));
        linhaDados.appendChild(montaTd(dadosDespesa.dataDespesa, ));
        linhaDados.appendChild(montaTd(dadosDespesa.categoriaDespesa, ))
        linhaDados.appendChild(montaTd(dadosDespesa.valorDespesa.toLocaleString(`pt-br`, { style: `currency`, currency: `BRL` }),))

        return linhaDados;
    }

    function montaTd(dados,classe){
        var td = document.createElement("td");
        td.textContent = dados;
        td.classList.add(classe);
        return td;
    }

    document.querySelector(".informacoesCadastradas").style.display = "block";
    
})





