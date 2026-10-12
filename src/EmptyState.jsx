import { ClipboardCheck } from 'lucide-react'
import React from 'react'

function EmptyState({ tasks, filter }) {
  const hasNoTasks = tasks.length === 0
  const hasNoActive = tasks.filter((t) => !t.completed).length === 0
  const hasNoCompleted = tasks.filter((t) => t.completed).length === 0

  const shouldShow =
    hasNoTasks ||
    (filter === 'active' && hasNoActive) ||
    (filter === 'completed' && hasNoCompleted)

  if (!shouldShow) return null

  let message = 'No tasks yet. Add your first task!'

  if (filter === 'active' && hasNoActive) {
    message = 'No active tasks. Add some tasks!'
  } else if (filter === 'completed' && hasNoCompleted) {
    message = 'No completed tasks yet. Complete some tasks!'
  }

  return (
    <div className="w-full flex flex-col items-center gap-3 py-10">
      <ClipboardCheck size={56} strokeWidth={1.2} className="text-gray-400" />
      <p className="text-gray-500 text-center text-sm">{message}</p>
    </div>
  )
}

export default EmptyState
