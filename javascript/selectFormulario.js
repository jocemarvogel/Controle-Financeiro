function checar() {

    if (document.querySelector("#adicinarDespesa").checked) {
        document.querySelector("#formularioReceita").style.display = "none";
        document.querySelector("#formularioDespesa").style.display = "block";
        document.querySelector("#nome").focus();
    } else if (document.querySelector("#adicinarReceita").checked) {
        document.querySelector("#formularioDespesa").style.display = "none";
        document.querySelector("#formularioReceita").style.display = "block";
        document.querySelector("#nomeReceita").focus();
    }
}