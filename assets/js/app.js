//capturar el tweet del usuario con el boton
const btnTweet = document.getElementById('btn');

/*
const inputTexto= document.querySelector('input')
const counter= document.querySelector('span')
console.log(inputTexto)
const btnClick= document.querySelector('button')
btnClick.disabled=true;
inputTexto.addEventListener('input',()=>{
    if(inputTexto.value.length>0){
        btnClick.disabled=false;
    }else{
        btnClick.disabled=true;
    }
});
inputTexto.addEventListener('keyup',()=>{
    console.log(inputTexto.value);
    counter.innerHTML = 249 - inputTexto.value.length;
});

inputTexto.addEventListener('keydown',()=>{ //este lo hace mejor
    console.log(inputTexto.value);
    counter.innerHTML = 249 - inputTexto.value.length;
});

*/ 

btnTweet.addEventListener('click', ()=>{
    let newTweet = document.getElementById('tweet').value;
   
    document.getElementById("tweet").value=" ";//despues que el usuario agregue el comentario quiero que se limpie el input o textarea
    const cont = document.getElementById("cont");

    const newTweetPublish = document.createElement("div");//aca vinculamos el div con los tweets que se quieren mostrar
    //do{
    if(newTweet.length === 0 || newTweet === null){ //validando que el usuario no pueda ingresar comentarios vacios
        document.getElementById("btn").style.display = "none"; 
        return 0;
      // return btn.disable="true";
    }else{
        alert("hi");
        document.getElementById("btn").style.display = "inline"; 
        
        //return btn.disable="false";
        
    }


    //}while(newTweet.length === 0 || newTweet === null)
    
    //btn.enable="true";
    
    let contador;

    //mostrar el tweet publicado
    let tweetPublish = document.createTextNode(newTweet);
    const content = document.createElement('p');
    content.appendChild(tweetPublish);

    cont.appendChild(content);
    
});

function contar() {
    const max = "140";
    let cadena = document.getElementById("tweet").value;
    let longitud = cadena.length;

        if(longitud <= max) {
             document.getElementById("contador").value = max-longitud;
        } else {
             document.getElementById("tweet").value = cadena.substr(0, max);
        }
} 
//contar el numero de caracteres que esta ingresando el usuario
//no dejar que el usuario ingrese mas de 144 caracteres
//limpiar la text area

//LMS->UNIT 4-> XHR Y PTO 8 Y PTO 16, AJAX CON FETCH