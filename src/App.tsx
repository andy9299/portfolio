import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className='flex h-screen w-full items-center justify-center'>
      <div className='grid grid-cols-2 grid-rows-1 divide-x-2 divide-solid'>
        <div className=''>
          <h1 className='text-[10rem] pr-8 '>At</h1>
        </div>
        <div className='pl-8 flex flex-col justify-center'>
          <a className='text-2xl hover:underline'>Projects</a>
          <a className='text-2xl hover:underline'>About Me</a>
        </div>
      </div>
      <div className='absolute bottom-0 flex h-20 gap-10'>
        <a href="https://github.com/andy9299" className='hover:underline'>GitHub</a>
        <a href="https://www.linkedin.com/in/andy-tu-58a797149/" className='hover:underline'>LinkedIn</a>
      </div>
    </div>
    </>
  )
}

export default App
