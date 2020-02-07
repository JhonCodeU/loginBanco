function ValidarNombre() {
    var elemento = document.getElementById('txtNombre');
    var nombreEmpresa = elemento.value;
    if (nombreEmpresa != undefined && nombreEmpresa != '') {
        var patron = /^[a-zA-Z]+$/;

        if (patron.test(nombreEmpresa))
            elemento.style.background = '';
        else
            elemento.style.background = '#ee6e73';
    } else {
        elemento.style.background = 'rgba(234, 27, 27, 0.34)'
    }
}

function ValidarApellido() {
    var elemento = document.getElementById('txtApellido');
    var nombreEmpresa = elemento.value;
    if (nombreEmpresa != undefined && nombreEmpresa != '') {
        var patron = /^[a-zA-Z]+$/;

        if (patron.test(nombreEmpresa))
            elemento.style.background = '';
        else
            elemento.style.background = '#ee6e73';
    } else {
        elemento.style.background = 'rgba(234, 27, 27, 0.34)'
    }
}

function ValidarUsuario() {
    var elemento = document.getElementById('txtUsuario');
    var nombreEmpresa = elemento.value;
    if (nombreEmpresa != undefined && nombreEmpresa != '') {
        var patron = /^[a-zA-Z][a-zA-Z0-9\.]*$/

        if (patron.test(nombreEmpresa))
            elemento.style.background = '';
        else
            elemento.style.background = '#ee6e73';
    } else {
        elemento.style.background = 'rgba(234, 27, 27, 0.34)'
    }
}

function validarCorreo() {
    var elemento = document.getElementById('txtCorreo');
    var correo = elemento.value;

    if (correo != undefined && correo != '') {
        var patron = /^([A-Za-z0-9\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (patron.test(correo))
            elemento.style.background = '';
        else
            elemento.style.background = '#ee6e73';
    } else {
        elemento.style.background = 'rgba(234, 27, 27, 0.34)'
    }
}

function validarPassword() {
    var elemento = document.getElementById('password');
    var password = elemento.value;

    if (password != undefined && password != '') {
        var patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
        if (patron.test(password))
            elemento.style.background = '';
        else
            elemento.style.background = '#ee6e73';
    } else {
        elemento.style.background = 'rgba(234, 27, 27, 0.34)'
    }
}

function validarPassword1() {
    var elemento = document.getElementById('password1');
    var password = elemento.value;

    if (password != undefined && password != '') {
        var patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
        if (patron.test(password))
            elemento.style.background = '';
        else
            elemento.style.background = '#ee6e73';
    } else {
        elemento.style.background = 'rgba(234, 27, 27, 0.34)'
    }
}