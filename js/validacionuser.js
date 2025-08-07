function validar()
{
    var nombre, pass;

    nombre=document.getElementById("usuario").value;
    pass=document.getElementById("contrasena").vale;

    ERtexto= /^[a-zA-ZÁ-ÿ\s]{1,255}$/;

    if(nombre=="" || pass==" ")
    {
        alert("No puedes dejar espacios vacios");
        return false;
    }
    else if(!ERtexto.test(nombre))
    {
        alert("Nombre invalido");
        return false;
    }
    else{
        alert("Informacion valida, Gracias :)")
        return true;
    }
}