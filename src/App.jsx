import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-red-600 text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">YouTube by IST</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto p-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to YouTube Clone
          </h2>
          <p className="text-gray-600 mb-8">
            This project is for beginners who want to start their open source contribution journey!
          </p>
          
          <div className="bg-gray-100 p-6 rounded-lg inline-block">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
              Count is {count}
            </button>
            <p className="mt-4 text-gray-600">
              Edit <code className="bg-gray-200 px-1 rounded">src/App.jsx</code> and save to test HMR
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
