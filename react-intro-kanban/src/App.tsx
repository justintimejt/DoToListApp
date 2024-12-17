
import './App.css'
import TaskCard from './task-card'
import { Task } from './data-tasks'

function App() {
  const task: Task = {
    title: "Do Mark",
    id: 'BUS-1',
    points: 5,
  }
  
  return (
    <>
      <TaskCard task={task} ></TaskCard>
    
    </>
    
  )
  
}

export default App
