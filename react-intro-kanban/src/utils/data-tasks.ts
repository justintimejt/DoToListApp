
export type Status = 'todo' | 'in-progress' | 'done'
export type Priority = 'low' | 'medium' | 'high'
export type Task = {
    title: string,
    id: string,
    status: Status,
    priority: Priority,
    points?: number
  }

  export const statuses: Status[] = ['todo', 'in-progress', 'done']
  export const priorities: Priority[] = ['low', 'medium', 'high']

  export const tasks: Array<Task> = [
    {
      title: 'Do Market',
      id: 'Bus-1',
      status: 'todo',
      priority: 'low',
      points: 5,
    },
    {
      title: 'Do Market',
      id: 'Bus-1',
      status: 'todo',
      priority: 'low',
      points: 5,
    },
    {
      title: 'Do Market',
      id: 'Bus-1',
      status: 'in-progress',
      priority: 'medium',
      points: 5,
    },
    {
      title: 'Do Market',
      id: 'Bus-1',
      status: 'done',
      priority: 'high',
      points: 5,
    }
    ]