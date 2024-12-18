
export type Status = 'todo' | 'in-progress' | 'done'
export type Task = {
    title: string,
    id: string,
    status: Status,
    points?: number
  }

  export const statuses: Status[] = ['todo', 'in-progress', 'done']
  
  export const tasks: Array<Task> = [
    {
      title: 'Do Market',
      id: 'Bus-1',
      status: 'todo',
      points: 5,
    },
    {
      title: 'Do Market',
      id: 'Bus-1',
      status: 'todo',
      points: 5,
    },
    {
      title: 'Do Market',
      id: 'Bus-1',
      status: 'in-progress',
      points: 5,
    },
    {
      title: 'Do Market',
      id: 'Bus-1',
      status: 'done',
      points: 5,
    }
    ]