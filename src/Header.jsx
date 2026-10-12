import React from 'react'

function Header({filter, setFilter}) {
  const filterRanges = [
    { key: 'all', title: 'All' },
    { key: 'active', title: 'Active' },
    { key: 'completed', title: 'Completed' },
  ]
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 p-6 pb-4 transition-all">
        <div className="flex flex-col">
          <h1 className="font-libre text-4xl text-gray-900">Tasks Manager</h1>
          <p className="text-gray-500 ml-1 font-quick">Stay organized</p>
        </div>
        <div className="flex items-center bg-gray-100 rounded-full p-1 self-start">
          {filterRanges.map((r) => (
            <button
              key={r.key}
              onClick={() => setFilter(r.key)}
              className={`px-5 py-1.5 rounded-full text-sm cursor-pointer transition-all ${
                filter === r.key
                  ? 'bg-[#9DB89A] text-white font-medium'
                  : 'text-gray-600 hover:bg-gray-200 transition-colors'
              }`}
            >
              {r.title}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header
