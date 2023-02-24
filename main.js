const listaDeTeclas = document.querySelectorAll('input[type=button]');
const campoDoTelefone = document.querySelector('input[type=tel]');

for(let i=0; i<listaDeTeclas.length; i++){
    
    const teclas = listaDeTeclas[i];
   
    teclas.onclick = function(){
        campoDoTelefone.value += teclas.value;
    }

    teclas.onkeydown = function(evento){
        if(evento.code ==="Enter" || evento.code === "Space"){
            teclas.classList.add('ativa');
        }
        
    }

    teclas.onkeyup = function(){
        teclas.classList.remove('ativa');
    }
}