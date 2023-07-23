const clientes=[
    {usuario: "Mali", Saldo: 800, clave: "pasword"},
    {usuario: "Jenn", saldo: 990, clave: "snoopy"},
    {usuario: "Joss", saldo: 400, clave: "blink182"},
];

function Validator (dataBase,username,pass) {
    dataBase.forEach((element,index)=> {
        if (element.usuario === username && element.clave === pass){
            alert ('Ingreso Exitoso');
            window.location = "bienvenida.html"
        } else {
            alert ('Error en usuario o contraseña');
        }
    });
}

const log = ()=>{
    let usuario= document.getElementById('usuario').value;
    console.log(usuario)
    let clave= document.getElementById('clave').value;
    console.log(clave)
    Validator(clientes,usuario,clave);
}

