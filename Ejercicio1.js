

//Calculando sueldos
function calcularSueldos(){

    //Variables-Datos html ID
    let bono = 0;
    let sueldobasico = 0;
    let nombre=document.getElementById("nombre").value
    let horas=document.getElementById("horas").value
    let categoria=document.getElementById("categoria").value
    let tiemposervicio=document.getElementById("tiemposervicio").value
    //Calcular segun categoria y años de servicio, ingresados en el formulario
    switch (categoria) {
        case 'A':
            sueldobasico=horas*40
            break;
        case 'B':
            sueldobasico=horas*35
            break;
        case 'C':
            sueldobasico=horas*30
            break;
    }
    switch (tiemposervicio) {
        case '1':
            bono=sueldobasico*0.15
            break;
        case '2':
            bono=sueldobasico*0.20
            break;
        case '3':
            bono=sueldobasico*0.30
            break;
        case '4':
            bono=sueldobasico*0.35
            break;
    }
    sueldoneto=sueldobasico+bono
    //Mostrar Resultados
    document.write(`${nombre} de categoria: ${categoria} <br> Horas de trabajo: ${horas} <br> Sueldo Basico: ${sueldobasico} <br>
     Bonificacion: ${bono} <br> Sueldo Neto: ${sueldoneto}`)
}