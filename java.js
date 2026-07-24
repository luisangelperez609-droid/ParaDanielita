/* ==========================================
        JAVA.JS VERSION 2 FINAL CORREGIDO
        DANIELA ❤️
        PARTE 1/3
========================================== */



/* ==========================================
        ABRIR CARTA
========================================== */


function abrirCarta(){


    const sobre = document.querySelector(".sobre");


    if(!sobre)return;


    sobre.classList.add("abierto");



    setTimeout(()=>{


        const inicio =
        document.getElementById("inicio");


        const contenido =
        document.getElementById("contenido");



        if(inicio)
        inicio.style.display="none";



        if(contenido)
        contenido.style.display="block";



       esperarMusica=true;



    },900);



}








/* ==========================================
        CARTA CON ESCRITURA
========================================== */




const textoCarta = `

Esta carta es para ti Danielita, mi corazón, quiero decirte que me encantó haberte conocido, eres una niña increíble, la niña más linda que he conocido, me encantó todo de ti, para empezar tienes un nombre muy bonito, tu pelo era tan suave, tu aroma, tus pestañas, tus cejas, tu nariz y tus labios, tu voz tan dulce, me encantó poder ver tus hermosos y perfectos ojitos, pasar un tiempo juntos fue suficiente para despertar mi interés por ti, me encantó tu personalidad, la forma en la que hablas,tu gran humor y tu bonita sonrisa, me encantó poder darte flores, escribir y dibujar para ti.


Me gustas tanto corazón, me atraes mentalmente, físicamente, sentimentalmente y simplemente eres perfecta en todos los sentidos, quisiera abrazarte, mientras me miras con tus ojos, que de todos los cafés, prefiero los tuyos.


Espero amarte como tú quieres, tenerte conmigo, me gustaría que me dieras la oportunidad de enamorarte, te entregaría todo de mí, mejoraría cada día para ti, haría lo que sea porque estés feliz, iría a donde fuera por ti, yo quisiera ser tu chico ideal.


El amor ha cambiado y ninguna persona está dispuesta a perder por otra, pero yo sí me arriesgaría por ti, amaría cada parte de ti, amaría cada defecto tan perfecto que te hace ser tú, te amaría de la forma más bonita que existe, te haría sentir la más capaz, la más graciosa, la más inteligente, la niña más bonita de todas, y si pudieras verte como te veo, te darías cuenta de lo hermosa y perfecta que eres.


Quiero tu cariño, quisiera ser yo el niño que te ame, y que tú amarás, que amarás cada parte de mí, estar conmigo, cada momento, que ames mis ojos, mi pelo, mi sonrisa, mi voz, quisiera agarrarte la mano, besar tu carita, inflarte los cachetes con un beso, ver películas, escuchar todos los álbumes de José José, quiero acostarme en tu pecho, en tus piernas, que acaricies mi pelo, que me des todo el cariño que quieras darme, que me des besos, que me abraces, que corras a abrazarme cuando nos veamos.


Quiero que me digas cuando te sientas mal, no quiero tu silencio, quiero saber que piensas, quiero entenderte, quiero saber qué pasa por tu mente cuando estás conmigo, que las palabras no queden atrapadas en ti por miedo a decírmelas, quiero que te abras conmigo, demuéstrame tus sentimientos, tu interés, demuéstramelo, dime que me quieres, que me extrañas, piensa en mí, escríbeme.


Quiero que te sientas segura en mis brazos, quiero que me mires y sepas que nunca haría nada para lastimarte, siente mi cariño, quiero seguir conociendo cada parte de ti, quiero saber que te hace sonreír, que te hace llorar, conocer tus miedos, quiero saber a qué saben tus labios, quiero saber qué se siente tocar cada parte de ti, cada parte de tu cuerpo, quiero besar cada parte de ti, quiero contar cada uno de tus lunares, quiero seguir escribiéndote cartas y poemas solo para ti, cuéntame tus fantasías, quiero saber hasta lo más íntimo de tus secretos.

`;




let posicionTexto=0;


let esperarMusica=false;



function escribirCarta(){



    const caja =
    document.getElementById("texto-carta");



    if(!caja)return;



    caja.innerHTML="";



    posicionTexto=0;



    function escribir(){



        if(posicionTexto < textoCarta.length){



            caja.innerHTML = textoCarta.substring(0, posicionTexto);


            posicionTexto++;



            setTimeout(escribir,35);



        }



    }



    escribir();



}









/* ==========================================
        CORAZONES FLOTANTES
========================================== */



function crearCorazon(){



    const corazon =
    document.createElement("div");



    corazon.className="corazon";



    const lista=[

        "❤️",
        "💗",
        "💕",
        "💗"

    ];



    corazon.innerHTML =
    lista[
    Math.floor(Math.random()*lista.length)
    ];



    corazon.style.left =
    Math.random()*100+"vw";



    corazon.style.fontSize =
    (Math.random()*12+15)+"px";



    corazon.style.animationDuration =
    (Math.random()*3+3)+"s";



    document.getElementById("corazones-container").appendChild(corazon);



    setTimeout(()=>{


        corazon.remove();


    },6000);



}



setInterval(crearCorazon,450);









/* ==========================================
        VISOR DE IMÁGENES CORREGIDO
========================================== */



function verImagen(src){



    const visor =
    document.getElementById("visor");



    const img =
    document.getElementById("imagen-grande");



    if(!visor || !img)return;



    img.src=src;



    visor.style.display="flex";



    crearCorazonesFoto();



}






function cerrarImagen(){



    const visor =
    document.getElementById("visor");



    if(visor){

        visor.style.display="none";

    }



}





const visorImagen =
document.getElementById("visor");



if(visorImagen){


visorImagen.addEventListener("click",(e)=>{



    if(e.target.id==="visor"){


        cerrarImagen();


    }



});


}









/* ==========================================
        CORAZONES EN FOTOS
========================================== */



function crearCorazonesFoto(){



    const visor =
    document.getElementById("visor");



    if(!visor)return;



    document
    .querySelectorAll(".corazon-modal")
    .forEach(c=>c.remove());



    for(let i=0;i<15;i++){



        const corazon =
        document.createElement("span");



        corazon.className="corazon-modal";



        corazon.innerHTML="💕";



        corazon.style.left =
        Math.random()*90+"%";



        corazon.style.top =
        Math.random()*90+"%";



        visor.appendChild(corazon);



        setTimeout(()=>{


            corazon.remove();



        },3000);



    }



}



/* ==========================================
        PARTE 2/3
        CANCIONES CORREGIDAS
========================================== */



let audioActual = null;

let botonActual = null;





const descripcionesCanciones = {



1:{

titulo:"Amtrak ",

texto:"Es viajar contigo,sentir que estamos siempre juntos aunque sea atraves de esta canción,quiero que nuestro amor sea perpetuo,que tomes mi mano y nunca la sueltes,un sentimiento puro y sincero,es la primera canción que quise dedicarte,y mi tristeza se va mientras tú te quedes.¿alguna vez encontraremos,una forma de hacer que nuestro tiempo dure para siempre?,porque empiezo a extrañarte."

},



2:{

titulo:"Cama y mesa",

texto:"Esta cancion representa ese deseo de estar en cada detalle de tu vida,ser indipensable en todos los aspectos,quiero ser todo para ti,es la necesidad y dependencia de tu amor,una metáfora de ser cada una de tus rutinas,ser el sol que te despierta o el alimento que te nutre,vivir los momentos intimos y dulces contigo,quiero ser la cosa buena,liberada o prohibida,ser todo en tu vida."

},



3:{

titulo:"Eres",

texto:"Esta canción es mi declaración de amor incondicional,sin miedo,es mi amor inmenso,eres mi centro,cada palabra es para ti,eres la melodía que suena en mis silencios,eres mi prioridad y mi tiempo,eres lo que la gente promete cuando se quiere,soy el que te quiere como a nadie soy,y espero por tu amor hasta el final,lo que yo amo en este mundo eso eres."

},



4:{

titulo:"Frances limon",

texto:"Desde que llegaste,tu das color a todo mi mundo,y nada volvió a ser igual,tu lenguaje tierno y sincero de amor es único,hermoso y perfecto,eres mi refugio emocional,vuelves especial cada momento,solo quedaran nuestros cuerpos,dos respiraciones que se buscan,en la oscuridad te besare,me besaras,porque nos entendemos con el idioma del alma,y con esperanza,en un barco de papel yo volveré por ti miamor."

},



5:{

titulo:"Lover is a day",

texto:"Quería dedicarte esta canción porque siento que describe una parte de mí,es más difícil de explicar.Mi cabeza funciona algo parecido cuando alguien empieza a importarme.Te has convertido en uno de mis pensamientos más frecuentes.Tal vez aún no eres “todo” para mí,pero me importas de una manera que no esperaba,me preocupa cómo estás y sin pensar te vuelves mi prioridad,pero también están mis miedos.A veces sobrepienso,me pregunto si algún día dejarás de verme como ahora,miedo a arruinar esto o si habrá un momento en el que simplemente te canses de mí,son pensamientos que aparecen de la nada,y no es desconfianza hacia ti, es mi cabeza haciéndome creer cosas que probablemente ni siquiera existen.Y aun con todo eso,seguiría eligiendo quedarme, porque no importa si no estoy del todo bien,seguiré amándote,aun cuando sobrepienso,en si me amaras,pero no importa,me quedo contigo,con el dolor,con el miedo,miedo a que un dia te vallas y no estes a mi lado.Siento tranquilidad contigo.Mi familia me dice que estoy loco,mis amigos dicen que soy un degenerado,pero tu  dices que soy bueno.Mi mente dice cosas redundantes ¿amarás esa parte de mí?."

}



};









/* ==========================================
        REPRODUCIR CANCIONES
========================================== */


function reproducirCancion(id,boton){



const audio =
document.getElementById(id);



if(!audio)return;





/* detener otras canciones */


document
.querySelectorAll(".canciones audio")
.forEach(a=>{


    if(a!==audio){


        a.pause();

        a.currentTime=0;


    }


});







/* cambiar botones */


document
.querySelectorAll(".canciones button")
.forEach(btn=>{


    if(btn!==boton){


        btn.innerHTML="▶ Reproducir";


    }


});







if(audio.paused){



    audio.play();



    boton.innerHTML="⏸ Pausar";



    audioActual=audio;

    botonActual=boton;



}else{



    audio.pause();



    boton.innerHTML="▶ Reproducir";



    audioActual=null;

    botonActual=null;



}



}









/* ==========================================
        CUANDO TERMINA UNA CANCIÓN
========================================== */



document
.querySelectorAll(".canciones audio")
.forEach(audio=>{



audio.addEventListener("ended",()=>{



document
.querySelectorAll(".canciones button")
.forEach(btn=>{


btn.innerHTML="▶ Reproducir";


});



});



});









/* ==========================================
        ABRIR DESCRIPCIÓN CANCIÓN
========================================== */



function abrirDescripcionCancion(numero){



const modal =
document.getElementById("modal-cancion");



const titulo =
document.getElementById("titulo-modal-cancion");



const texto =
document.getElementById("texto-modal-cancion");



const datos =
descripcionesCanciones[numero];



if(!modal || !datos)return;





titulo.innerHTML =
datos.titulo;



texto.innerHTML =
datos.texto;



modal.classList.add("mostrar");



}









/* ==========================================
        CERRAR MODAL
========================================== */


function cerrarDescripcionCancion(){



const modal =
document.getElementById("modal-cancion");



if(modal){


modal.classList.remove("mostrar");


}



}









window.addEventListener("click",(e)=>{



const modal =
document.getElementById("modal-cancion");



if(e.target===modal){



cerrarDescripcionCancion();



}



});



/* ==========================================
        PARTE 3/3
        FINAL
========================================== */





/* ==========================================
        MUSICA DE FONDO
========================================== */


const musicaFondo =
document.getElementById("musica-fondo");


const botonMusica =
document.getElementById("boton-musica");




if(musicaFondo && botonMusica){



    musicaFondo.volume = 0.45;



    botonMusica.addEventListener("click",()=>{



        if(musicaFondo.paused){



            musicaFondo.play();

            if(esperarMusica){

    escribirCarta();

    esperarMusica=false;

}



            botonMusica.innerHTML="⏸";



            botonMusica.classList.add("activo");



        }else{



            musicaFondo.pause();



            botonMusica.innerHTML="🎵";



            botonMusica.classList.remove("activo");



        }



    });



}









/* ==========================================
        MENSAJE SECRETO
========================================== */



function mostrarSecreto(){



const mensaje =
document.getElementById("mensaje-secreto");



if(!mensaje)return;



mensaje.classList.toggle("mostrar");



}








/* ==================================
          MODO NOCHE
================================== */



const botonNoche=
document.getElementById("boton-noche");




let modo=
localStorage.getItem("modo");



if(modo==="noche"){


activarNoche();


}





botonNoche.addEventListener("click",()=>{



if(document.body.classList.contains("noche")){


desactivarNoche();


}

else{


activarNoche();


}



});







function activarNoche(){



document.body.classList.add("noche");
document.getElementById("corazones-container").style.display="none";



botonNoche.innerHTML="☀️";



crearEstrellas();



localStorage.setItem(
"modo",
"noche"
);



}







function desactivarNoche(){


document.body.classList.remove("noche");
document.getElementById("corazones-container").style.display="block";



botonNoche.innerHTML="🌙";



document.querySelectorAll(".estrella")
.forEach(e=>e.remove());



localStorage.setItem(
"modo",
"dia"
);



}







/* ==================================
           ESTRELLAS
================================== */


function crearEstrellas(){


document.querySelectorAll(".estrella")
.forEach(e=>e.remove());



for(let i=0;i<120;i++){


let estrella=document.createElement("div");


estrella.className="estrella";



estrella.style.left=
Math.random()*100+"vw";



estrella.style.top=
Math.random()*100+"vh";



estrella.style.animationDelay=
Math.random()*3+"s";



document.body.appendChild(estrella);



}



}







/* ==========================================
        EFECTO CARGA
========================================== */



window.addEventListener("load",()=>{



document.body.classList.add("pagina-lista");



});









/* ==========================================
        CONTROL DE ERRORES AUDIO
========================================== */



document
.querySelectorAll("audio")
.forEach(audio=>{



audio.addEventListener("error",()=>{



console.log(
"No se encontró:",
audio.src
);



});



});