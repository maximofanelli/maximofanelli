const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    palabras: /^[a-zA-ZÀ-ÿ\s]*$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]*$/,
    numeros: /^([0-9])*$/,
    alfanumerico: /^[A-Za-z0-9]*$/
}

const campos = {
    nombre: false,
    apellido: false,
    mail: false,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
        case "apellido":
            validarCampo(expresiones.palabras, e.target, e.target.name);
            break;

        case "mail":
            validarCampo(expresiones.mail, e.target, e.target.name);
            break;

    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value) && input.value !== "") {
        document.getElementById(`input_${campo}`).classList.add('is-valid');
        document.getElementById(`input_${campo}`).classList.remove('is-invalid');
        campos[campo] = true;
    } else {
        document.getElementById(`input_${campo}`).classList.add('is-invalid');
        document.getElementById(`input_${campo}`).classList.remove('is-valid');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
        var campoInvalido = "";
        var flag = true;
        for (const [key, valor] of Object.entries(campos)) {
            flag = flag && valor;
            console.log(flag + key);
            if(!flag)
            {
                if(campoInvalido==""){
                    campoInvalido += key;
                    
                }else{
                    campoInvalido += ", ";
                    campoInvalido += key;
                }
            }
                
            
        }

        if (flag) {
            alert("Sus comentarios han sido enviados correctamente");
            // submit(); // No hay mail de destino, se cambió para que cuando este ok lo informe
            formulario.reset();
            location.reload();

        } else {
            alert("Para poder avanzar, debe completas los siguientes campos: " + campoInvalido);
        }
    }
,);
