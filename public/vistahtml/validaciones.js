function validarCamposObligatorios(){
    var bandera = true
    for(var i = 0; i < document.forms[0].elements.length; i++){
        var elemento = document.forms[0].elements[i]
        if(elemento.value == '' && elemento.type == 'text'){
            if(elemento.id == 'cedula'){
                document.getElementById('mensajeCedula').innerHTML = '<br>La cedula esta vacia'
            }
            if(elemento.id == 'nombres'){
                document.getElementById('mensajeNombre').innerHTML = '<br>El nombre esta vacio'
            }  
            if(elemento.id == 'apellidos'){
                document.getElementById('mensajeApellido').innerHTML = '<br>El apellido esta vacio'
            }
            if(elemento.id == 'direccion'){
                document.getElementById('mensajeDireccion').innerHTML = '<br>La direccion esta vacia'
            }
            if(elemento.id == 'telefono'){
                document.getElementById('mensajeTelefono').innerHTML = '<br>El telefono esta vacio'
            }
            if(elemento.id == 'fecha_nacimiento'){
                document.getElementById('mensajeFecNac').innerHTML = '<br>La fecha de nacimiento esta vacia'
            }
            if(elemento.id == 'correo'){
                document.getElementById('mensajeCorreo').innerHTML = '<br>El correo esta vacio'
            }
            elemento.style.border = '1px red solid'
            //elemento.className =''
            bandera = false
        }
    }
    if(!bandera){
        //alert('Ahora si llena bn oe ')
    }
    return bandera
}

function soloLetras(){
    key = e.keyCode || e.which;
       tecla = String.fromCharCode(key).toUpperCase;
       letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
       especiales = "8-37-39-46";

       tecla_especial = false
       for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }

        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
        }
}
function validarCedulaEcuatoriana(){
    var cad = document.getElementById("cedula").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;

    if (cad !== "" && longitud === 10){
      for(i = 0; i < longcheck; i++){
        if (i%2 === 0) {
          var aux = cad.charAt(i) * 2;
          if (aux > 9) aux -= 9;
          total += aux;
        } else {
          total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
        }
      }

      total = total % 10 ? 10 - total % 10 : 0;

      if (cad.charAt(longitud-1) == total) {
        document.getElementById("mensajeCedula").innerHTML = '<br>Cedula Valida';
      }else{
        document.getElementById("MensajeCedula").innerHTML = '<br>Cedula Invalida';
      }
    }
  }
