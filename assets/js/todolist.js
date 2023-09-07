const listaDeTareas = document.getElementById("listaDeTareas");
const tareaInput = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("ingresarTarea");
const totalTareas = document.getElementById("totalTarea");
const checkTarea = document.getElementById("checkTarea")
const tareas = [];
const realizadas = false;

btnAgregar.addEventListener("click", () => {
  const tarea = tareaInput.value;
  tareas.push({ id: Date.now(), tarea: tarea });
  tareaInput.value = "";
  renderList(tareas);
  if ((tareaInput.value = null)) {
    btnAgregar = false;
  }
});
function renderList(tareas) {
  let html = "";
  for (let tarea of tareas) {
    html += `<li>${tarea.tarea} <button onclick="check">OK</button> <button
onclick="borrar(${tarea.id})"> eliminar </button></li>`;
  }
  listaDeTareas.innerHTML = html;
  totalTareas.textContent = `${tareas.length}`;
  checkTarea.textContent = `${check.length}`
}

function borrar(id) {
  const index = tareas.findIndex((ele) => ele.id == id);
  tareas.splice(index, 1);
  renderList(tareas);
}

function check() {
  const checklist = checkTarea.findIndex((ele) => ele.id == id);
  checkTarea.push("")
  renderList(checkTarea)
}


