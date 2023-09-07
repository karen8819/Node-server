const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

function listarTareas(){
if (tasks.length === 0) {
  console.log('No hay tareas')
} else {
    console.log('Lita de tareas:');
    tasks.forEach((task, index)=>{
        console.log(`${index + 1}. [${task.completada ? 'X' : ' '}]${task.descripcion}`);
    });
}
}

// Se modificó agregarTarea para que retorne una promesa
function agregarTarea() {
  return new Promise((resolve) => {
    rl.question('Descripción de la tarea: ', (descripcion) => {
      tasks.push({ descripcion, completada: false });
      console.log('Tarea agregada exitosamente.');
      listarTareas();
      resolve();
    });
  });
}

// Se modifico eliminarTarea para que retorne una promesa
function eliminarTarea() {
  return new Promise((resolve) => {
    listarTareas();
    rl.question('Número de la tarea a eliminar: ', (numero) => {
      const index = parseInt(numero) - 1;
      if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log('Tarea eliminada.');
      } else {
        console.log('Número de tarea no válido.');
      }
      listarTareas();
      resolve();
    });
  });
}

// Modificamos completarTarea para que retorne una promesa
function completarTarea() {
  return new Promise((resolve) => {
    listarTareas();
    rl.question('Número de la tarea completada: ', (numero) => {
      const index = parseInt(numero) - 1;
      if (index >= 0 && index < tasks.length) {
        tasks[index].completada = true;
        console.log('Tarea marcada como completada.');
      } else {
        console.log('Número de tarea no válido.');
      }
      listarTareas();
      resolve();
    });
  });
}


async function mostrarMenu(){
    console.log('\nSeleccione una acción:');
    console.log('1 Listar tareas');
    console.log('2 Agregar tarea');
    console.log('3 Eliminar tarea');
    console.log('4 Completar tarea');
    console.log('5 Salir');

    rl.question('Elija una acción por número: ', async (accion) => {
        switch (parseInt(accion)) {
          case 1:
            listarTareas();
            await mostrarMenu();
            break;
          case 2:
            await agregarTarea();
            break;
          case 3:
            await eliminarTarea();
            break;
          case 4:
            await completarTarea();
            break;
          case 5:
            rl.close();
            break;
          default:
            console.log('Número de acción no válido.');
            await mostrarMenu();
            break;
        }
      });
    // rl.question('Elija una acción por número: ', (accion) => {
    //     switch (parseInt(accion)) {
    //       case 1:
    //         listarTareas();
    //         mostrarMenu().then();
    //         break;
    //       case 2:
    //         agregarTarea().then();
    //         break;
    //       case 3:
    //         eliminarTarea().then();
    //         break;
    //       case 4:
    //         completarTarea().then();
    //         break;
    //       case 5:
    //         rl.close();
    //         break;
    //       default:
    //         console.log('Número de acción no válido.');
    //         mostrarMenu().then();
    //         break;
    //     }
    //   });
    }

    rl.question('¿Qué acción deseas realizar? (listar/agregar/eliminar/completar/salir): ', (accion) => {
        if (accion === 'listar') {
          listarTareas();
        } else if (accion === 'agregar') {
          agregarTarea();
        } else if (accion === 'eliminar') {
          eliminarTarea();
        } else if (accion === 'completar') {
          completarTarea();
        } else if (accion === 'salir') {
          rl.close();
        } else {
          console.log('Acción no válida.');
          rl.close();
        }
    });
