let listaDeNumerosSorteados = [];
let limiteNumeros = 20;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

mensagemInicial();

function exibirTextoNaTela (tag,texto) {
    let textoTags = document.querySelector(tag);
    textoTags.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}



function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertouuuuuuuuu!!!!!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }  else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior!');
        }
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteNumeros + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeElementosNaLista == limiteNumeros) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); 
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}