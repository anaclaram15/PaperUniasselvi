
const p1 = document.querySelector('.p1');
const arbusto = document.querySelector('.arbusto');
const tronco = document.querySelector('.tronco');
const nuvens = document.querySelector('.nuvens');
const telaStart = document.querySelector('.tela-start');
const pontosUi = document.querySelector('.pontos-ui');
const pontosElement = pontosUi.querySelector('.pontos');
const botaoPlay = document.querySelector('.botao-play');

let pontos = 0;
let jogoAtivo = false;
let loop; /* Variável para armazenar o loop*/

/*Função para iniciar o jogo */
function startGame() {

    telaStart.remove()
    pontosUi.style.display = 'block';
    p1.style.display = 'block';
    arbusto.style.display = 'block';
    tronco.style.display = 'block';
    nuvens.style.display = 'block';
    pontos = 0;
    pontosElement.textContent = pontos; /*Reseta a pontuação exibida*/
    jogoAtivo = true;


/*Programa todo o processo de batida dos sprites*/
loop = setInterval(() =>{

    console.log('loop')

    const arbustoPosition = arbusto.offsetLeft;
    const troncoPosition = tronco.offsetLeft;
    const p1Position = +window.getComputedStyle(p1).bottom.replace('px', '');

    console.log(`Arbusto: ${arbustoPosition}, Tronco: ${troncoPosition} , Jogador: ${p1Position}`);
    
    if ((arbustoPosition <= 95 && arbustoPosition > -90 && p1Position < -50) ||
    (troncoPosition <= 95 && troncoPosition > -90 && p1Position < -60)){
       
        arbusto.style.animation = 'none';
        arbusto.style.left = `${arbustoPosition}px`;

        tronco.style.animation = 'none';
        tronco.style.left = `${troncoPosition}px`;

        p1.style.animation = 'none';
        p1.style.bottom = `${p1Position}px`;

        p1.src = './Larrypato-spritederrota.png';
       p1.style.marginLeft = '20px';

        clearInterval(loop);
        jogoAtivo = false;
    } else {

        pontos++;
        pontosElement.textContent = pontos; /* Atualiza a pontuação exibida*/
    }

}, 200);

}
/*Adiciona o clicar do botão de play */
botaoPlay.addEventListener('click' , startGame);
/*Programa o pulo do p1*/
function jump() {
    if (jogoAtivo) {
        p1.classList.add('jump');

        setTimeout(() => {
    
            p1.classList.remove('jump');
    
        }, 500);
    }

}
/*Adiciona o evento de apertar tecla e pular*/
document.addEventListener('keydown' , jump);
