function altera_color() {
    const cabecalho = document.querySelector('h1');
    const paragrafo = document.querySelector('p');
    const corpo = document.querySelector('body');
    const botao = document.querySelector('button');
    const botao_padrao = document.getElementById('button_padrao')

    cabecalho.style.color = 'blue';
    paragrafo.style.color = 'blue';
    corpo.style.backgroundColor = 'lightblue';
    botao.style.color ='white';
    botao.style.backgroundColor ='#dc143c';
    botao_padrao.style.backgroundColor = '#dc143c'


}

function padrao_color() {
    const cabecalho = document.querySelector('h1');
    const paragrafo = document.querySelector('p');
    const corpo = document.querySelector('body');
    const botao = document.querySelector('button');
    const botao_padrao = document.getElementById('button_padrao')

    cabecalho.style.color = 'white';
    paragrafo.style.color = 'white';
    corpo.style.backgroundColor = '#6e6ec1';
    botao.style.color ='white'
    botao.style.backgroundColor ='#6495ed';
    botao_padrao.style.backgroundColor = '#6495ed'
}

window.confirm('Atividade da última aula de Autoria Web, atividade livre de Js');
