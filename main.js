function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);  

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log('Elemento não encontrado ou seletor inváido.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string.
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}