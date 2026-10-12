import React from 'react'

function Footer({ tasks, setTasks }) {
  const remaining = tasks.filter((t) => !t.completed).length
  const completedCount = tasks.filter((t) => t.completed).length
  return (
    <>
      <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4 text-sm text-gray-500">
        <span>
          {tasks.length === 0
            ? 'No tasks added'
            : remaining === 1
              ? '1 task left'
              : `${remaining} tasks left`}
        </span>
        <button
          onClick={() => setTasks((prev) => prev.filter((t) => !t.completed))}
          disabled={completedCount === 0}
          className={`
    transition-colors
    ${
      completedCount === 0
        ? 'text-gray-300 cursor-not-allowed'
        : 'text-gray-500 hover:text-red-400 hover:underline cursor-pointer'
    }
  `}
        >
          Clear completed
        </button>
      </div>
    </>
  )
}

export default Footer
