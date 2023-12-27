import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-4xl'> Test</h1>
<a className="inline-flex flex-wrap
items-center justify-center text-center
cursor-pointer select-none border
transition duration-200 ease-in-out
flex-shrink-0 font-semibold py-2 px-4
rounded-md disabled:opacity-80
disabled:pointer-events-none
focus:outline-none focus:ring-2
focus:ring-opacity-50 hover:no-underline
bg-blue-600 text-white
hover:bg-blue-700
py-3 px-5 text-lg">Button</a>
<a className="btn btn-primary btn-lg">Button</a>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
