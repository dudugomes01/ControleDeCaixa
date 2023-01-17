
    const form = document.getElementById("form-adiciona")
        
    form.addEventListener('submit',(event)=>{
        event.preventDefault()
        var nome = document.getElementById("nome").value
        var referencia = document.getElementById("Referencia").value
        var notaFiscal = document.getElementById("notaFiscal").value
        var quantiade = document.getElementById("quantidade").value
        var valor = parseFloat(document.getElementById("valor").value)
        var numeroCliente = document.getElementById("nDoCliente").value
        var formaDePagamento = document.getElementById("formaDePagamento").value
        console.log('Teste')
       
        if(nome === ""){
            validaNome()
            return
        }
        if(referencia ===""){
            validaRef()
            return
        }
        if(notaFiscal ===""){
            validaNf()
            return
        }
        if(quantiade ===""){
            validaQuantidade()
            return
        }
        if(valor ===""){
            validaValor()
            return
        }
        if(numeroCliente ===""){
            validaCliente()
            return
        }

        adicionarLinha()
        
    })
    
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
        var data = document.getElementById("data").value

        let imgEdit = document.createElement('img')
        
        

        var table = document.getElementById("tabela");
        table.classList.remove('removDisplay')
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);

        cell1.innerHTML = nome;
        cell2.innerHTML = referencia;
        cell3.innerHTML = notaFiscal;
        cell4.innerHTML = quantiade;
        cell5.innerHTML = `R$ ${valor}`;
        cell6.innerHTML = numeroCliente;
        cell7.innerHTML = data;
        cell8.innerHTML = formaDePagamento;

        // imgEdit.setAttribute("onclick", "nome.deletar()")

        imgEdit = `<svg xmlns="http://www.w3.org/2000/svg" id="imgLixo" width="16" height="16" fill="currentColor" class="excluir-btn" class="bi bi-trash3" viewBox="0 0 16 16">
        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
      </svg>`

        cell9.innerHTML = imgEdit;
         
        
        
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
        var quantiade = document.getElementById("quantidade").value = '1';
        var valor = document.getElementById("valor").value = '';
        var numeroCliente = document.getElementById("nDoCliente").value = '';
        var formaDePagamento = document.getElementById("formaDePagamento").value = '';
    }

    const campos = document.querySelectorAll('.campo')
    const spans = document.querySelectorAll('.span-required')

    function setError(index){
        campos[index].style.border = '2px solid #e63636'
        spans[index].style.display = 'block'
    }
    function removeError(index){
        campos[index].style.border = ''
        spans[index].style.display = 'none'
    }

    var nome = document.getElementById("nome").value
    function validaNome(){
        
        if(campos[0].value.length < 3){
            setError(0)
        }
        else{
            removeError(0)      
        }
    }
    function validaRef(){
        
        if(campos[1].value.length < 1){
            setError(1)
        }
        else{
            removeError(1)      
        }
    }
    function validaNf(){
        
        if(campos[2].value.length < 3){
            setError(2)
        }
        else{
            removeError(2)      
        }
    }
    function validaQuantidade(){
        
        if(campos[3].value.length < 1){
            setError(3)
        }
        else{
            removeError(3)      
        }
    }
    function validaValor(){
        
        if(campos[4].value.length < 1){
            setError(4)
        }
        else{
            removeError(4)      
        }
    }
    function validaCliente(){
        
        if(campos[5].value.length < 1){
            setError(5)
        }
        else{
            removeError(5)      
        }
    }
    function deletar(){
        alert("Ta OK")
    }