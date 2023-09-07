const listaDeTareas = document.getElementById("listaDeTareas");
const tareaInput = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("ingresarTarea");
const totalTareas = document.getElementById("totalTarea");
const tareas = [];
const realizadas = false

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
    html += `<li>${tarea.tarea} <button onclick=>OK</button> <button
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

/*<body>
<input id="nuevaTarea">
<button id="agregarTarea">Agregar</button><br>
<input id = "buscarTarea">
<button id="btnBuscarTarea">Buscar</button>
<h3>Tareas: </h3>
<span id="cuenta-tareas"> </span>
<ul id="tareas"></ul>


const listaDeTareas = document.querySelector("#tareas")
const tareaInput = document.querySelector("#nuevaTarea")
const buscadorInput = document.querySelector("#buscarTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const btnBuscar = document.querySelector("#btnBuscarTarea")
const cuentaTareas = document.querySelector("#cuenta-tareas");
const tareas = []

btnAgregar.addEventListener("click", () => {
const tarea = tareaInput.value
tareas.push({id: Date.now(), tarea: tarea})
tareaInput.value = ""
renderList(tareas)
});
function renderList(tareas){
let html = ""
for (let tarea of tareas) {
html += `<li>${tarea.tarea} <button
onclick="borrar(${tarea.id})"> eliminar </button></li>`;
}
listaDeTareas.innerHTML = html;
cuentaTareas.textContent = `Total de tareas: ${tareas.length}`;
}
_ 34
www.desafiolatam.com
function borrar(id){
const index = tareas.findIndex((ele) => ele.id == id)
tareas.splice(index, 1)
renderList(tareas)
}
btnBuscar.addEventListener("click", () => {
const tareaBuscada = buscadorInput.value;
const tareasFiltradas = tareas.filter(
(tarea) => tarea.tarea.includes(tareaBuscada)
);
renderList(tareasFiltradas);
})*/
