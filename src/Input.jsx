import { Plus } from 'lucide-react'
import React, { useState } from 'react'

function Input({ addTask }) {
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      <div className="flex gap-3 px-6 pb-6">
        <input
        onKeyDown={(e)=>{
          if (inputValue.trim() === '') return
          if(e.key === 'Enter'){
            addTask(inputValue)
            setInputValue('')
          }
        }}
          type="text"
          value={inputValue}
          placeholder="Add a new task..."
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 min-w-0 h-12 px-4 rounded-xl border border-gray-300 bg-white outline-none focus:border-[#9DB89A] placeholder:text-gray-400"
        />
        <button
          onClick={(e) => {
            if (inputValue.trim() === '') return
            addTask(inputValue)
            setInputValue('')
          }}
          className="cursor-pointer flex items-center gap-2 h-12 px-5 rounded-xl bg-[#9DB89A] text-white font-medium hover:bg-[#8AA787] transition-colors"
        >
          <Plus size={20} />
          <span className="hidden sm:inline">Add Task</span>
        </button>
      </div>
    </>
  )
}

export default Input
