//Script de la pregunta 1:

const borde =() =>{

    //Selección de la foto
    let foto = document.querySelector('#foto01');

    //Determinar si el borde es rojo  se le quita el borde y el color.
    
    if(foto.style.borderColor=='red'){
        foto.style.border = "";
    } 
    else{
        foto.style.border='2px solid red';
    }
};

//Script de la pregunta 2:

const verificar=() =>{

    //Selecionar el valor almacenado en los campos bajo las fotos.

    foto02= Number(document.querySelector('#num_foto02').value);
    foto03= Number(document.querySelector('#num_foto03').value);
    foto04= Number(document.querySelector('#num_foto04').value);

    //Sumar los valores en la variable suma.
    suma=foto02+foto03+foto04;

    //Seleccionar el texto del div de id estado para cambiar su valor cuando se presione el botón. 

    texto= document.querySelector('#estado');
    
    //Determinar si la suma es menor o igual a 10.

    if (suma<=10){
        texto.innerHTML='<p>Has selecionado '+suma+' Stickers.</p>';
    }
    else{
        texto.innerHTML="<p>Llevas demasiados Stickers.</p>";
    }
};

//Script de la pregunta 3:

const seleccionar=() =>{
    select01= String(document.querySelector('#select01').value);
    select02= String(document.querySelector('#select02').value);
    select03= String(document.querySelector('#select03').value);

    password=select01+select02+select03;

    texto= document.querySelector('#mensaje');

    if (password=='911'){
        texto.style.color="blue";
        texto.innerHTML='<p>Password 1 correcto.</p>';
    }
    else if (password=='714'){
        texto.style.color="blue";
        texto.innerHTML="<p>Password 2 correcto.</p>";
    }
    else{
        texto.style.color="red";
        texto.innerHTML="<p>Password incorrecto.</p>";
    }
};
