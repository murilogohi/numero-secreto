/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoConsole() {
    console.log('O botão console foi clicado!');
}

function botaoAlerta() {
    alert('Eu amo JS!');
}


function botaoPrompt() {
    let nomeCidade = prompt('Informe o nome de uma cidade');
    alert(`Estive em ${nomeCidade} e lembrei de voce!`);
}


function botaoSoma() {
    let numero1 = prompt('Informe um número qualquer');
    let numero2 = prompt('Informe outro número qualquer');
    let soma = Number(numero1) + Number(numero2);
    alert(`A soma dos números informados ${numero1} e ${numero2} é igual a ${soma}`);
}
*/

/*let numero = parseInt(prompt('Informe um numero aleatorio para calcular o fatorial'));
console.log('O numero informado foi ' + numero);

function fatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }

    let calculo = 1;
    let cont = num;
    while(cont > 1) {
        calculo = calculo * (cont * (cont - 1));
        cont = cont - 2;
    }
    return calculo;
}

let resultado = fatorial(numero);
console.log('O numero Fatorial de ' + numero + ' é ' + resultado);
*/

/*let numero = parseInt(prompt('Informe um numero para calculo da tabuada'));


function tabuada(num) {
    let contador = 1;
    while(contador < 11) {
        let resultado = num * contador;
        console.log(`${num} x ${contador} = ${resultado}`);
        contador++;
    }
}

tabuada(numero);*/

let listaGenerica = [];
let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];

console.log(linguagensDeProgramacao);

linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

console.log(linguagensDeProgramacao);

listaGenerica.push('murilo','marco','uendel');
console.log(listaGenerica);
console.log(listaGenerica[0]);
console.log(listaGenerica[1]);
console.log(listaGenerica[listaGenerica.length - 1]);
