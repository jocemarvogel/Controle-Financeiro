var saldo = Number(prompt("Qual o valor do saldo atual?"));
var textoSaldo = document.querySelector("#textoSaldo");
textoSaldo.textContent = saldo.toLocaleString(`pt-br`, { style: `currency`, currency: `BRL` });

var enviar = document.querySelector(".btn-enviarDados");

enviar.addEventListener("click", function (event) {
    event.preventDefault();

    var tdNome = document.querySelector(".td-nome");
    var tdData = document.querySelector(".td-data");
    var tdCategoria = document.querySelector(".td-categoria");
    var tdValor = document.querySelector(".td-valor");

    var form = document.querySelector("#formulario")
    //var nome = document.querySelector("#nome").value;
    // var data = (document.querySelector("#data").value).replace(/(\d*)-(\d*)-(\d*).*/, `$3/$2/$1`);
    //var categoria = document.querySelector("#categoria").value;
    //var valorDespesa = Number(document.querySelector("#valor").value);
    //var valorDespesaMonetario = valorDespesa.toLocaleString(`pt-br`, { style: `currency`, currency: `BRL` })

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

    function montaTd(dado){
        var td = document.createElement("td");
        td.textContent = dado;
    //    add.classList.add(classe);
        return td;
    }

    /*
        var linhaDados = document.createElement("tr");
    
        var celulaNome = document.createElement("td");
        var celulaData = document.createElement("td");
        var celulaCategoria = document.createElement("td");
        var celulaValor = document.createElement("td");
    
        celulaNome.textContent = nome;
        celulaData.textContent = data;
        celulaCategoria.textContent = categoria;
        celulaValor.textContent = valorDespesaMonetario;
    
        linhaDados.appendChild(celulaNome);
        linhaDados.appendChild(celulaData);
        linhaDados.appendChild(celulaCategoria);
        linhaDados.appendChild(celulaValor);
    
        var tabelaGastos = document.querySelector(".informacoesCadastradas").querySelector("tbody");
        tabelaGastos.appendChild(linhaDados);
        
        var saldoTotal = saldo - valorDespesa;
        textoSaldo.textContent = saldoTotal.toLocaleString(`pt-br`, { style: `currency`, currency: `BRL` });
    
    */
})





