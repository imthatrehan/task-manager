import { Check, Trash2 } from 'lucide-react'
import React, { useState } from 'react'

function TaskList({ tasks, setTasks }) {
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')
  const [removingId, setRemovingId] = useState(null)
  const [exitingCheckId, setExitingCheckId] = useState(null)

  function deleteTask(id) {
    setRemovingId(id)
    setTimeout(() => {
      setTasks((prev) => prev.filter((task) => task.id !== id))
      setRemovingId(null)
    }, 200)
  }

  return (
    <>
      <ul className="border-t border-gray-200 px-6 py-3 flex flex-col gap-1">
        {tasks.map((t) => {
          return (
            <li
              key={t.id}
              className={`${editingId === t.id ? 'flex items-center gap-4 py-2.5 px-4 rounded-lg bg-[#F1F6EF] border border-[#C9D9C6]' : 'group flex items-center gap-4 py-3 px-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors'} ${removingId === t.id ? 'task-exit' : 'task-enter'} `}
            >
              {editingId === t.id ? (
                ''
              ) : (
                <button
                  onClick={() => {
                    if (t.completed) {
                      setExitingCheckId(t.id)
                      setTimeout(() => {
                        setTasks((prev) =>
                          prev.map((task) =>
                            task.id === t.id
                              ? { ...task, completed: false }
                              : task,
                          ),
                        )
                        setExitingCheckId(null)
                      }, 200)
                    } else {
                      setTasks((prev) =>
                        prev.map((task) =>
                          task.id === t.id
                            ? { ...task, completed: true }
                            : task,
                        ),
                      )
                    }
                  }}
                  className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center cursor-pointer transition-colors
                  ${
                    t.completed || exitingCheckId === t.id
                      ? 'bg-[#8AA787] text-white'
                      : 'border-2 border-gray-300 hover:border-[#9DB89A]'
                  }`}
                >
                  {t.completed === true ? (
                    <Check
                      size={16}
                      className={
                        exitingCheckId === t.id ? 'check-exit' : 'check-enter'
                      }
                    />
                  ) : (
                    ''
                  )}
                </button>
              )}
              {editingId === t.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setEditingId(null)
                    if (editText.trim() === '') return
                    if (e.key === 'Enter') {
                      setTasks((prev) =>
                        prev.map((task) =>
                          task.id === t.id
                            ? { ...task, text: editText.trim() }
                            : task,
                        ),
                      )
                      setEditingId(null)
                    }
                  }}
                  className="flex-1 min-w-0 bg-transparent outline-none text-gray-800"
                />
              ) : (
                <span
                  onDoubleClick={() => {
                    if (t.completed === true) return
                    setEditingId(t.id)
                    setEditText(t.text)
                  }}
                  className={`${t.completed === true ? 'line-through text-gray-400' : ''} flex-1 text-gray-800`}
                >
                  {t.text}
                </span>
              )}
              {editingId === t.id ? (
                <button
                  onClick={() => {
                    if (editText.trim() === '') return
                    setTasks((prev) =>
                      prev.map((task) =>
                        task.id === t.id
                          ? { ...task, text: editText.trim() }
                          : task,
                      ),
                    )
                    setEditingId(null)
                  }}
                  className="w-6 h-6 shrink-0 rounded-full bg-gray-500 hover:bg-[#8AA787] flex items-center justify-center text-white cursor-pointer"
                >
                  <Check size={16} />
                </button>
              ) : (
                <button
                  onClick={() => deleteTask(t.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <Trash2 size={20} />
                </button>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TaskList
