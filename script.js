const inputTexto = document.querySelector(".input-area");
const mensaje = document.querySelector(".mensaje");
const botoncopiar = document.querySelector(".copiar");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
    mensaje.Placeholder = "";
        
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"] , ["a" , "ai"], ["o" , "ober"],["u" ,"ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);    

        }

   }  

    return stringEncriptada;  
    
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"],["u" ,"ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }        
        
    }    

    return stringDesencriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    get.clipboard(mensaje.value);
    mensaje.value = "";
    alert("Texto copiado")
}


/*El método includes() determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda
.replaceall: Método que busca todas las apariciones de una expresión regular en una cadena y las cambia por un nuevo valor*/