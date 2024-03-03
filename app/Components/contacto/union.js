let taskData = JSON.parse(localStorage.getItem('taskData')) || { tasks: [] };

taskData.tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = `Descripción: ${task.description}, Fecha de inicio: ${task.startDate}, Fecha de fin: ${task.endDate}, Dificultad: ${task.difficulty}, Estado: ${task.status}`;

    if (task.status === 'Pendiente') {
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completada';
        completeButton.addEventListener('click', () => {
            task.status = 'Completado';
            localStorage.setItem('taskData', JSON.stringify(taskData));
            li.textContent = `Descripción: ${task.description}, Fecha de inicio: ${task.startDate}, Fecha de fin: ${task.endDate}, Dificultad: ${task.difficulty}, Estado: ${task.status}`;
            this.shadowRoot.querySelector('#completedTasks').appendChild(li);
        });
        const incompleteButton = document.createElement('button');
        incompleteButton.textContent = 'Incompleta';
        incompleteButton.addEventListener('click', () => {
            task.status = 'Fallida';
            localStorage.setItem('taskData', JSON.stringify(taskData));
            li.textContent = `Descripción: ${task.description}, Fecha de inicio: ${task.startDate}, Fecha de fin: ${task.endDate}, Dificultad: ${task.difficulty}, Estado: ${task.status}`;
            this.shadowRoot.querySelector('#failedTasks').appendChild(li);
        });
        li.appendChild(completeButton);
        li.appendChild(incompleteButton);
    }

const currentDate = new Date();
const endDate = new Date(task.endDate);
if (endDate < currentDate) {
    task.status = 'Fallida';
    localStorage.setItem('taskData', JSON.stringify(taskData));
    li.textContent = `Descripción: ${task.description}, Fecha de inicio: ${task.startDate}, Fecha de fin: ${task.endDate}, Dificultad: ${task.difficulty}, Estado: ${task.status}`;
}

// Añade la tarea a la lista correspondiente según su estado
if (task.status === 'Completado') {
    this.shadowRoot.querySelector('#completedTasks').appendChild(li);
} else if (task.status === 'Fallida') {
    this.shadowRoot.querySelector('#failedTasks').appendChild(li);
} else {
    this.shadowRoot.querySelector('#tasks').appendChild(li);
}
});
this.shadowRoot.querySelector('#deleteTasks').addEventListener('click', () => {
    localStorage.removeItem('taskData');
    location.reload();
});



this.innerHTML.querySelector('#btnGuardar').addEventListener('click', () => {
  const nombreContacto = this.innerHTML.querySelector('#nombreContacto').value;
  const descripcionTarea = this.innerHTML.querySelector('#descripcionTarea').value;
  const fechaInicio = this.innerHTML.querySelector('#fechaInicio').value;
  const fechaFinal = this.innerHTML.querySelector('#fechaFinal').value;
  const clasificacionTarea = this.innerHTML.querySelector('#clasificacionTarea').value;

  if (nombreContacto && descripcionTarea && fechaInicio && fechaFinal && clasificacionTarea) {
      const newTask = {
          name: nombreContacto,
          description: descripcionTarea,
          startDate: fechaInicio,
          endDate: fechaFinal,
          difficulty: clasificacionTarea,
          status: 'Pendiente'
      };
      taskData.tasks.push(newTask);
      localStorage.setItem('taskData', JSON.stringify(taskData));
      location.reload();
  }
});
