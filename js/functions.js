
class Empleado {
    constructor(nombre, apellido, sexo, fechaNacimiento, fechaIngreso, salario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
        this.fechaIngreso = fechaIngreso;
        this.salario = salario;
    }

    darNombre() {
        return this.nombre;
    }
    darApellido() {
        return this.apellido;
    }
    darSexo() {
        return this.sexo;
    }
    darFechaNacimiento() {
        return this.fechaNacimiento;
    }
    darFechaIngreso() {
        return this.fechaIngreso;
    }
    darSalario() {
        return this.salario;
    }
    cambiarSalario(nuevoSal) {
        this.salario = nuevoSal;
    }
    darEdad() {
        let fecha = this.fechaNacimiento;
        let hoy = new Date();///obtenter la fecha actual
        let naci = new Date(fecha);///Guardar la fecha de nacimiento
        let edad = hoy.getFullYear() - naci.getFullYear();///Restar los años del añño actual menos el año de nacimiento
        let m = hoy.getMonth() - naci.getMonth();///Obtener mes=mes actual menos el mes de nacimiento

        if (m < 0 || (m === 0 && hoy.getDate() < naci.getDate())) {
            edad--;///aun no cumple años en el año actual
        }

        return edad;
    }
    darAntiguedad() {
        let fecha = this.fechaIngreso;
        let hoy = new Date();///obtenter la fecha actual
        let ingreso = new Date(fecha);///Guardar la fecha de ingreso
        let antiguedad = hoy.getFullYear() - ingreso.getFullYear();///Restar los años del añño actual menos el año de ingreso
        let m = hoy.getMonth() - ingreso.getMonth();///Obtener mes=mes actual menos el mes de ingreso

        if (m < 0 || (m === 0 && hoy.getDate() < ingreso.getDate())) {
            antiguedad--;///aun no cumple años en el año actual
        }

        return antiguedad;
    }
    darPrestaciones(salario, antiguedad){
        let prestaciones = (antiguedad * salario)/12;
        return prestaciones;
    }

}

let nombre = "";
let apellido = "";
let sexo = "";
let fechaNacimiento = "";
let fechaIngreso = "";
let salario = "";

let empleado = new Empleado();//nombre, apellido, sexo, fechaNacimiento, fechaIngreso, salario

function guardarDatos() {
    nombre = document.getElementById("Nombre").value;
    apellido = document.getElementById("Apellido").value;
    sexo = document.getElementById("sexo").value;
    fechaNacimiento = document.getElementById("Fecha-Na").value;
    fechaIngreso = document.getElementById("Fecha-In").value;
    salario = document.getElementById("salario").value;

    carga = document.getElementById("cargar");
 

    if (nombre == "") {
        alert("El nombre está vacío");
        document.getElementById("Nombre").focus();
    } else if (apellido == "") {
        alert("El apellido está vacío");
        document.getElementById("Apellido").focus();
    } else if (sexo == "") {
        alert("El sexo está vacío");
        document.getElementById("sexo").focus();
    } else if (fechaNacimiento == "") {
        alert("La fecha de nacimiento está vacío");
        document.getElementById("Fecha-Na").focus();
    } else if (fechaIngreso == "") {
        alert("La fecha de ingreso está vacío");
        document.getElementById("Fecha-In").focus();
    } else if (salario == "") {
        alert("El salario está vacío");
        document.getElementById("salario").focus();
    }
    else {
        carga.style.display = 'block';///mostrar los campos de la infoemacion
        empleado.nombre = nombre;
        empleado.apellido = apellido;
        empleado.sexo = sexo;
        empleado.fechaNacimiento = fechaNacimiento;
        empleado.fechaIngreso = fechaIngreso;
        empleado.salario = salario;
        document.getElementById('NombreGuardado').value = empleado.darNombre();
        document.getElementById('ApellidoGuardado').value = empleado.darApellido();
        document.getElementById('sexoGuardado').value = empleado.darSexo();
        document.getElementById('FechaNaGuardada').value = empleado.darFechaNacimiento();
        document.getElementById('FechaInGuardada').value = empleado.darFechaIngreso();
        document.getElementById('salarioGuardado').value = '$ ' + empleado.darSalario();
    }


}

function modificarSalario() {
    let sal = prompt("Salario actual: " + empleado.darSalario() + "\nIngrese el nuevo salario: ");
    if (sal > 0) {
        let s = parseFloat(sal);
        empleado.cambiarSalario(s);
        document.getElementById('salarioGuardado').value = '$ ' + empleado.darSalario();
        alert("Su sa lario ha sido modificado a: " + empleado.darSalario());
    }
    else {
        alert('Debe ingresar un salario válido');
    }

}

function calcularEdad() {
    let ed = empleado.darEdad();
    document.getElementById('edad').value = ed;
}
function calcularAntiguedad() {
    let ant = empleado.darAntiguedad();
    document.getElementById('antiguedad').value = ant;
}
function calcularPrestaciones() {
    let salario = empleado.darSalario();
    let ant = empleado.darAntiguedad();
    let prest = empleado.darPrestaciones(salario, ant);
    document.getElementById('prestaciones').value = prest;
}

function CambiarNombre() {

    let cambio = prompt("Nombre actual: " + empleado.darNombre() + "\nIngrese el nuevo Nombre: ");
    if (cambio.length > 0) {
        
        empleado.cambiarNombre(cambio);
        document.getElementById('nombreGuardado'). empleado.darNombre();
        alert("Su Nombre ha sido modificado a: " + empleado.darNombre());
    }
    else {
        alert('Debe ingresar un nombre');
    }
    
}
function Link() {
location.href="https://www.udenar.edu.co/";
   
    
}
