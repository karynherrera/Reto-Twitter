//capturar el tweet del usuario con el boton
const btnTweet = document.getElementById('btn');

btnTweet.addEventListener('click', ()=>{
    let newTweet = document.getElementById('tweet').value;
    document.getElementById("tweet").value=" ";//despues que el usuario agregue el comentario quiero que se limpie el input o textarea
    const cont = document.getElementById("cont");

    const newTweetPublish = document.createElement("div");//aca vinculamos el div con los tweets que se quieren mostrar
    //mostrar el tweet publicado
    let tweetPublish = document.createTextNode(newTweet);
    const content = document.createElement('p');
    content.appendChild(tweetPublish);

    cont.appendChild(content);
});
//contar el numero de caracteres que esta ingresando el usuario
//no dejar que el usuario ingrese mas de 144 caracteres
//limpiar la text area
