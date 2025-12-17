let notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];

var btn_calcular = document.getElementById("btn_calcular");
var btn_limpiar = document.getElementById("btn_limpiar");

var total_aprobados = document.getElementById("total_aprobados");
var total_supletorio = document.getElementById("total_supletorio");
var total_reprobados = document.getElementById("total_reprobados");
var promedio_curso = document.getElementById("promedio_curso");
var estado_curso = document.getElementById("estado_curso");
var lista_notas = document.getElementById("lista_notas");

let textoNotas = "";
notas.forEach(function(nota, pos){
    textoNotas += `Estudiante ${pos + 1}: ${nota} <br>`;
});
lista_notas.innerHTML = textoNotas;

btn_calcular.addEventListener("click", function(event){
    let cont_aprobados = 0;
    let cont_supletorio = 0;
    let cont_reprobados = 0;

    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        let nota_actual = notas[i];
        suma += nota_actual;

        if (nota_actual >= 7 && nota_actual <= 10) {
            cont_aprobados++;
        } else if (nota_actual >= 5 && nota_actual <= 6) {
            cont_supletorio++;
        } else if (nota_actual >= 0 && nota_actual <= 4) {
            cont_reprobados++;
        }
    }

    let promedio = suma / notas.length;

    let estado = "";
    if (promedio >= 7) {
        estado = "APROBADO";
    } else {
        estado = "EN RIESGO";
    }

    total_aprobados.value = cont_aprobados;
    total_supletorio.value = cont_supletorio;
    total_reprobados.value = cont_reprobados;
    promedio_curso.value = promedio;
    estado_curso.value = estado;
});

btn_limpiar.addEventListener("click", function(event){
    total_aprobados.value = "";
    total_supletorio.value = "";
    total_reprobados.value = "";
    promedio_curso.value = "";
    estado_curso.value = "";
});
