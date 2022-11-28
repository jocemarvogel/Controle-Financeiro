function dados(){
    event.preventDefault();
var tdNome = document.querySelector(".td-nome");
var nome = document.querySelector("#nome").value;

var tdData = document.querySelector(".td-data");
var data = document.querySelector("#data").value;
//var dataEscolhida = data.replace(/(\d*)-(\d*)-(\d*).*/,`$3/$2/$1/`);

var tdCategoria = document.querySelector(".td-categoria");
var categoria = document.querySelector("#categoria").value;
//var categoriaEscolhida = String(categoria.options[categoria.SelectedIndex]);

var tdValor = document.querySelector(".td-valor");
var valor = Number(document.querySelector("#valor").value);
//var valorMonetario = valor.toLocaleString(`pt-br`,{style: `currency`, currency: `BRL`})

console.log(nome)
console.log(dataEscolhida)
console.log(categoria)
console.log(valorMonetario)
}