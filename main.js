//Seleção de Elementos
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const starButton = document.querySelector('.starButton'); 
const restarButton = document.querySelector('.restarButton');
const gameOver = document.querySelector('.gameOver'); 
//Definição de audios
const audioStart = new Audio('./sound/audio_theme.mp3');
const audioGameOver = new Audio('./sound/audio_gameOver.mp3');

// Variaveis de Controle do Jogo
let gameInterval = mull;

// Função para iniciar o jogo
const starGame = () => {
    pipe.classList.add('pipe-animation');
    starButton.Style.display = 'none';
    gameOver.style.display= 'none';
    audioStart.currentTime = 0;
    audioStart.play();

        if(gameInterval) {
        gameInterval = retInterval(gameLoop,10);
    }
};