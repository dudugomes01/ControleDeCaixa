var tabela = document.getElementById("tabela")

tabela.addEventListener("click", function(event){
    var elementoClicado = event.target
    if(elementoClicado.classList.contains("excluir-btn")){
       var celula = elementoClicado.parentNode
       var linha = celula.parentNode
        linha.remove()
    }
})