var enviarDadosReceita = document.querySelector("#btn-enviarDadosReceita")
enviarDadosReceita.addEventListener("click", function (adicionarReceita) {

    adicionarReceita.preventDefault();

    var tdNome = document.querySelector(".td-nome");
    var tdData = document.querySelector(".td-data");
    var tdCategoria = document.querySelector(".td-categoria");
    var tdValor = document.querySelector(".td-valor")

    var formReceita = document.querySelector("#formularioReceita");

    var dadosReceita = coletaDadosReceitaFormuladio(formReceita);

    adicionarDadosTabela(dadosReceita) ;

    function adicionarDadosTabela(dadosReceita) {
        var dadosReceitaTr = montaTr(dadosReceita);
        var tabela = document.querySelector("#tabela-dados");
        tabela.appendChild(dadosReceitaTr);
    }

    function coletaDadosReceitaFormuladio(formReceita) {
        var dadosReceita = {
            nomeReceita: formReceita.nomeReceita.value,
            dataReceita: (formReceita.dataReceita.value).replace(/(\d*)-(\d*)-(\d*).*/, `$3/$2/$1`),
            categoriaReceita: formReceita.categoriaReceita.value,
            valorReceita: parseFloat((formReceita.valorReceita.value).replace(`,`,`.`)),
        }
        return dadosReceita
    }


    function montaTr(dadosReceita){
        var linhaDados = document.createElement("tr");

        linhaDados.appendChild(montaTd(dadosReceita.nomeReceita, "receitaAdicionada"));
        linhaDados.appendChild(montaTd(dadosReceita.dataReceita, ));
        linhaDados.appendChild(montaTd(dadosReceita.categoriaReceita, ));
        linhaDados.appendChild(montaTd(dadosReceita.valorReceita.toLocaleString(`pt-br`, { style: `currency`, currency: `BRL` }), ));

        return linhaDados
    }

    function montaTd(dados, classe) {
        var td = document.createElement("td");
        td.textContent = dados;
        td.classList.add(classe);
        return td
    }
    
    document.querySelector(".informacoesCadastradas").style.display = "block";
})