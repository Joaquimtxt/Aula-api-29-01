$(document).ready(function() {
    async function carregarDados() {
        //Esconder a div de erro
        $('#div-erro').hide();// Usa o Jquery para esconder a div-erro
    try{
        const response = await fetch('https://api.coinbase.com/v2/curriencies');
        const dados = await response.json();//Converte a resposta em json
        prepararTabela(dados);//Chama a função prepararTabela passando os dados
    } catch (error) {
//Mostrar a div de erro
        $('#div-erro').show(error); //Use o Jquery para mostrar a div-erro  
    }
}
});