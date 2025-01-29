$(document).ready(function() { 


    async function carregarDados(){
        //Esconder a div-erro
        $('#div-erro').hide(); // Usa o JQuery para esconder a div-erro
        try{
            // Chamar a API para obter os dados
            const response = await fetch('https://api.coinbase.com/v2/currencies');
            const dados = await response.json(); // Converte a resposta em JSON
            prepararTabela(dados); // Chama a função prepararTabela passando os dados
        }catch(e){
            //Mostrar a div-erro
            $('#div-erro').show(); // Usa o JQuery para mostrar a div-erro
            $('#div-erro').html('<b>Erro ao acessar a API</b> <br />' + e ); // Usando jQuery para inserir o texto do erro
        }
    }
    
    function prepararTabela(dados){
        // Pegar elemento tbody da tabela
        var linhas = $('#linhas');
        // Limpar o conteúdo do tbody
        linhas.empty();
        // Percorrer o Array de moedas e inserir no HTML da tabela


        $.each(dados['data'], function(i, moeda){
            var linhaAuxiliar = '';


            linhaAuxiliar += '<tr>' + 
                                '<td>' + moeda.id + '</td>' + 
                                '<td>' + moeda.name + '</td>' + 
                            '</tr>'
            linhas.append(linhaAuxiliar);
        })
    }


    // Expondo a função no escopo global para acesso via onclick
    window.carregarDados = carregarDados;
});