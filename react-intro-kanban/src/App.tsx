
import './App.css'
import TaskCard from './task-card'


function App() {
  const title = "Do Market Research"
  const id = "BUS-1"
  const points = 5
  
  return (
    <>
      <TaskCard title = {title} id = {id} points = {points}></TaskCard>
      <TaskCard title = {title} id = {id} points = {points}></TaskCard>
      <TaskCard title = {title} id = {id} points = {points}></TaskCard>
      <TaskCard title = {title} id = {id} points = {points}></TaskCard>
    </>
    
  )
  
}

export default App
