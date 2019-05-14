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

           
            elemento.style.border = '1px red solid'
            //elemento.className =''
            bandera = false
        }
    }
    if(!bandera){
        alert('Ahora si llena bn oe ')
    }
    return bandera
}