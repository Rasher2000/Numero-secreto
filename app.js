
    let numeroRa = numeroAleatrio();
    let intentos = 10;
    console.log(numeroRa);

function textoCondicion (id, text){
        const titulo = document.getElementById(id); //simplificar codigo
    titulo.innerHTML = (text);
}

function asignarTexto (elemento, texto){
    const titulo = document.querySelector(elemento); //simplificar codigo
    titulo.innerHTML = (texto);
}

function numeroAleatrio() {
    return parseInt(Math.random()* 10)+1;
}

function numeroIngresado() {
        let ingresoNumero = parseInt( document.getElementById('numeroDigitado').value);
       
        
         while(ingresoNumero != numeroRa  && --intentos < 0 ); //Los intentos bajan cuando fallan
        console.log(intentos);    
        
         if (numeroRa === ingresoNumero) {
                textoCondicion ('acierto', 'HAS ACERTADO!!');
                textoCondicion ('fallo', '');
                asignarTexto ('p','');
                document.getElementById('reiniciar').removeAttribute('disabled');
            }else{
                if (ingresoNumero > numeroRa) {
                    textoCondicion('fallo', `el numero es menor, quedan: ${intentos} `);
                    asignarTexto ('p','');
                    textoCondicion ('acierto', '');
                }else{
                    textoCondicion('fallo', `el numero es mayor, quedan: ${intentos} `);
                    asignarTexto ('p','');
                    textoCondicion ('acierto', '');

                }
                limpiaCampo();
            }
            if (intentos == 0) {
                textoCondicion('fallo', 'HAS FALLDO :(');
                textoCondicion ('acierto', '');
                document.getElementById('reiniciar').removeAttribute('disabled');
                return;
            }

       
        return;

}

function condicionInicial(){ //setea todo al inicio
    asignarTexto ('h1', 'Juego del Numero Secreto');
    asignarTexto ('p','Digite un Numero');
    textoCondicion ('acierto', '');
    textoCondicion ('fallo', '');
    numeroRa = numeroAleatrio();
    intentos = 10;
}

condicionInicial();


function limpiaCampo() { //limpia el campo
    document.getElementById('numeroDigitado').value = '';
}

function reiniciarGame(){  //boton de reinicio
    document.getElementById('reiniciar').setAttribute('disabled','true');
    limpiaCampo();
    condicionInicial();
}


