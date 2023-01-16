
    
    function adicionarLinha(){

        
        this.valorTotal()
        
        
        this.montarTabela()
        
        
        this.limparCampos()    
    }
    
    function montarTabela(){
        var nome = document.getElementById("nome").value
        var referencia = document.getElementById("Referencia").value
        var notaFiscal = document.getElementById("notaFiscal").value
        var quantiade = document.getElementById("quantidade").value
        var valor = document.getElementById("valor").value
        var numeroCliente = document.getElementById("nDoCliente").value
        var formaDePagamento = document.getElementById("formaDePagamento").value


        var table = document.getElementById("tabela");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        cell1.innerHTML = nome;
        cell2.innerHTML = referencia;
        cell3.innerHTML = notaFiscal;
        cell4.innerHTML = quantiade;
        cell5.innerHTML = valor;
        cell6.innerHTML = numeroCliente;
        cell7.innerHTML = formaDePagamento;
    }

    // Para calcular a quantidade de peças iguais X o valor
    function valorTotal(){

        var quantiade = parseFloat(document.getElementById("quantidade").value);
        var valor = parseFloat(document.getElementById("valor").value);

        var res = quantiade * valor
        
        console.log(res)
    
    }

    function limparCampos(){
        var nome = document.getElementById("nome").value = ''; 
        var referencia = document.getElementById("Referencia").value = '';
        var notaFiscal = document.getElementById("notaFiscal").value = '';
        var quantiade = document.getElementById("quantidade").value = '';
        var valor = document.getElementById("valor").value = '';
        var numeroCliente = document.getElementById("nDoCliente").value = '';
        var formaDePagamento = document.getElementById("formaDePagamento").value = '';
    }

    
    