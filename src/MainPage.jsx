import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Input from './Input'
import TaskList from './TaskList'
import EmptyState from './EmptyState'

function MainPage() {
  const [filter, setFilter] = useState('all')
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch {
        return []
      }
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function addTask(text) {
    const newTask = { id: Date.now(), text: text, completed: false }
    setTasks((prev) => [...prev, newTask])
  }

  function filterTask() {
    return tasks.filter((e) => {
      if (filter === 'active') return !e.completed
      if (filter === 'completed') return e.completed
      return true
    })
  }

  const visibleTasks = filterTask()
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-6 bg-[#F1F1EF] p-4 transition-all">
      <div className="w-full max-w-2xl bg-[#FEFDFB] rounded-3xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-1200">
        <Header filter={filter} setFilter={setFilter} />
        <Input addTask={addTask} />
        <TaskList tasks={visibleTasks} setTasks={setTasks} />
        <EmptyState tasks={tasks} filter={filter} />
        <Footer tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  )
}

export default MainPage
