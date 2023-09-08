const listaDeTareas = document.getElementById("listaDeTareas");
const tareaInput = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("ingresarTarea");
const totalTareas = document.getElementById("totalTarea");
const checkTarea = document.getElementById("checkTarea")
const tareas = [];
let realizadas = 0;

btnAgregar.addEventListener("click", () => {
  const tarea = tareaInput.value;
  if ((tarea != '')) {
    tareas.push({ id: Date.now(), tarea: tarea });
    tareaInput.value = "";
    renderList(tareas);
  }
});
function renderList(tareas) {
  let html = "";
  for (let tarea of tareas) {
    html += `<li>${tarea.tarea} <button onclick="check(this)">OK</button> <button
onclick="borrar(${tarea.id})"> eliminar </button></li>`;
  }
  listaDeTareas.innerHTML = html;
  totalTareas.textContent = `${tareas.length}`;
}

function borrar(id) {
  const index = tareas.findIndex((ele) => ele.id == id);
  tareas.splice(index, 1);
  renderList(tareas);
}

function check(target) {
  target.classList.add('checkButton');
  realizadas++;
  checkTarea.innerHTML = realizadas;

}


