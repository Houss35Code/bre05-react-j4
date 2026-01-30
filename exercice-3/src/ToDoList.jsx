import { useState } from 'react'

function ToDoList() {
  const [tasks, setTasks] = useState(['Tache 1', 'Tache 2', 'Tache 3'])
  const [taskInput, setTaskInput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput])
      setTaskInput('')
    }
  }

  return (
    <>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Tâche :</label>
        <input 
          type="text" 
          id="task" 
          name="task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </>
  )
}

export default ToDoList