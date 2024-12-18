import { useState } from 'react'
import { Task } from "../utils/data-tasks"

const lowPriorityIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 9l7 7 7-7" />
</svg>
const mediumPriorityIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10h14" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 14h14" />
</svg>
const highPriorityIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
</svg>
const TaskCard = ({task, updateTaskPoints}: {
  task: Task
  updateTaskPoints: (task:Task, points: number) => void
}) => {
  const points = task.points || 0 
  const updatePoints = (direction: 'up' | 'down') => {
    
    const fib = [0, 1, 2, 3, 5, 8, 13]
    const index = fib.indexOf(points)
    const nextIndex = direction === 'up' ? index + 1 : index -1
    const newPoints = fib[nextIndex]
    if (newPoints) {
      updateTaskPoints(task, newPoints)
    }

    updateTaskPoints(task, points)
  }
    return <div className="border rounded-lg px-2 m-2 bg-gray-50 w-52">
      <div className="text-base font-base py-2">
        {task.title} 
      </div>
      <div className ='flex gap-4 justify-between py-2 text-gray-500 text-sm'>
        <div className='flex gap-2'>
          <div>{task.id}</div>
          <div>{task.priority}</div>
          {task.priority === 'high' && <div>{lowPriorityIcon}</div>}
          {task.priority === 'medium' && <div>{mediumPriorityIcon}</div>}
          {task.priority === 'low' && <div>{highPriorityIcon}</div>}
          </div> 
        <div className='flex gap-2 items-center'>
          <button onClick={() => updatePoints('down')}>-</button>
          <div className='font-bold'>{points}</div>
          <button onClick={() => updatePoints('up')}>+</button>
        </div>
      </div>
    </div>
  }


  export default TaskCard