const numeroSenha = document.querySelector('.paramero-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.paramero-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > 1){
        tamanhoSenha = tamanhoSenha - 1;
    }
    numeroSenha.textContent=tamanhoSenha;
}