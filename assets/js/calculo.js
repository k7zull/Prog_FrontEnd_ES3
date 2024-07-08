function calcularCalorias() {
    // Obtener los datos
    var peso = parseFloat(document.getElementById('peso').value);
    var tiempo = parseFloat(document.getElementById('tiempo').value);
    var actividad = document.getElementById('actSeleccionada').value;

    // Validar peso
    if (isNaN(peso) || peso < 1 || peso > 120) {
        mostrarAlerta('Valor de peso no válido. Por favor introduzca un valor entre 1 y 120 kg.', 'danger');
        return;
    }

    // Validar tiempo
    if (isNaN(tiempo) || tiempo < 5 || tiempo > 150) {
        mostrarAlerta('Tiempo ingresado no válido. Por favor introduzca un valor de tiempo entre 5 a 150 minutos.', 'danger');
        return;
    }

    // Determinar el MET según la actividad
    var met = 0;
    if (actividad === 'caminar') {
        met = 3.5;
    } else if (actividad === 'correr') {
        met = 8.0;
    }

    // Calcular las calorías
    var calorias = met * 3.5 * peso * (tiempo / 200);

    // Verificar entradas no válidas
    if (isNaN(calorias)) {
        mostrarAlerta('Algo salió mal con el cálculo. Por favor verifique los datos ingresados.', 'danger');
        return;
    }

    // Mostrar el resultado
    var caloriasText = "Se quemaron aproximadamente " + calorias.toFixed(2) + " calorías en " + tiempo + " minutos de " + actividad + ".";
    document.getElementById('caloriasText').textContent = caloriasText;
    document.getElementById('resultadoCalorias').style.display = 'block';

    setTimeout(() => {
        document.getElementById('resultadoCalorias').style.display = 'none';
    }, 10000);
    document.getElementById('peso').value = '';
    document.getElementById('tiempo').value = '';
}

function mostrarAlerta(mensaje, tipo) {
    var alerta = document.getElementById('alerta');
    alerta.className = 'alert alert-' + tipo;
    alerta.textContent = mensaje;
    alerta.style.display = 'block';

    setTimeout(() => {
        alerta.style.display = 'none';
    }, 8000);
}
