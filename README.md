# <img src="./public/assets/favicon.webp" alt="todo icon" width="30" /> Aplicación de Lista de Tareas

Esta es una aplicación simple de lista de tareas que te permite gestionar tus tareas por hacer. Puedes añadir nuevas tareas, marcarlas como completadas y eliminarlas.

## Funcionalidades

### Contenedor Todo

- **Header:** Muestra el título de la aplicación.
- **Botón Mostrar Completadas:** Permite mostrar u ocultar las tareas completadas.
- **Botón Añadir Tarea:** Abre el formulario para añadir una nueva tarea.

### Lista de Tareas

- Muestra todas las tareas por hacer.
- Cada tarea tiene:
  - **Miembro:** Foto y nombre del miembro encargado.
  - **Tarea:** Nombre de la tarea.
  - **Prioridad:** Indicada por colores: Alta (rojo), Media (naranja), Baja (verde).
  - **Acciones:** Botones para marcar como completada y eliminar la tarea.

![Lista de tareas](./screenshots/todo-list.png)

### Lista de Tareas Completadas

- Muestra las tareas que han sido marcadas como completadas.
- Cada tarea tiene un botón para eliminarla.

![Lista de tareas completadas](./screenshots/completed-list.png)

### Formulario para Agregar Tareas

- **Header:** Título "Nueva Tarea".
- **Cuerpo:** Dos secciones, una para seleccionar al miembro y otra para el nombre de la tarea y su prioridad.
- **Footer:** Botones para cancelar y agregar la tarea.

![Formulario de nueva tarea](./screenshots/form.png)

### Modal de Confirmación

- Se muestra al realizar operaciones como agregar tarea, marcar como completada y eliminar tarea.

<div style="display: flex; align-item: center; gap: 30px; width: 800px;overflow-x: auto;">
  <img src="./screenshots/modal-new-task.png" alt="Modal nueva tarea" width="500" />
  <img src="./screenshots/modal-confirm-task-completed.png" alt="Modal tarea completada" width="500" />
  <img src="./screenshots/modal-delete-task.png" alt="Modal eliminar tarea" width="500" />
</div>

### Toast

- Utiliza la librería `react-toastify` para mostrar notifiaciones sobre las operaciones confirmadas.

<div style="display: flex; align-item: center; gap: 30px; width: 800px;overflow-x: auto;">
  <img src="./screenshots/toast-tas-added.png" alt="Toast nueva tarea" width="500" />
  <img src="./screenshots/toast-task-mark-as-completed.png" alt="Toast tarea completada" width="500" />
  <img src="./screenshots/toast-task-deleted.png" alt="Toast eliminar tarea" width="500" />
</div>

### Librería 'react-header-watermark'

- Muestra un header en la parte superior de la aplicación con el título del proyecto y un enlace a los repositorios de GitHub.

![Header Watermark](./screenshots/header-watermark.png)

## Almacenamiento

- Utiliza el local storage para almacenar las tareas por hacer y las tareas completadas.

## Tecnologías Utilizadas

<ul class="technologies">
  <li>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/128px-HTML5_logo_and_wordmark.svg.png" alt="Icon HTML" />
    HTML
  </li>
  <li>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/128px-CSS3_logo_and_wordmark.svg.png" alt="Icon CSS" />
    CSS
  </li>
  <li>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/128px-React-icon.svg.png" alt="Icon React" />
    React
  </li>
  <li>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yarn-logo-kitten.svg/640px-Yarn-logo-kitten.svg.png" alt="Icon Yarn" />
    Yarn
  </li>
  <li>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/640px-Vitejs-logo.svg.png" alt="Icon Vite" />
    Vite
  </li>
</ul>

## Créditos

- **Autor:** [JuanBlancodev](https://github.com/JuanBlancodev)<br>
- **Repositorios en github:** [Ver](https://github.com/JuanBlancodev?tab=repositories)

<style>
  .technologies{
    list-style: none;
    display:flex;
    gap:15px;
  }
  .technologies li{
    display:flex;
    align-items:center;
    gap:5px;
  }
  .technologies li img{
    width: 35px;
  }
</style>