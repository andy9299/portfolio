import React from 'react'
import ReactDOM from 'react-dom/client'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main>
    <div className='flex h-screen w-full items-center justify-center'>
      {/* <div className='grid grid-cols-2 grid-rows-1 divide-x-2 divide-solid'>
        <div>
          <h1 className='text-[10rem] pr-8 '>At</h1>
        </div>
        <div className='pl-8 flex flex-col justify-center'>
          <a href='/projects/' className='text-2xl hover:underline'>Projects</a>
          <a className='text-2xl hover:underline'>About Me</a>
        </div>
      </div> */}
      <div className="flex flex-col lg:flex-row">
      <div>
        <h1 className='text-[10rem] '>At</h1>
      </div>
      <div className="divider lg:divider-horizontal"></div> 
      <div className='flex flex-col justify-center'>
          <a href='/projects/' className='text-2xl hover:underline'>Projects</a>
          <a href='/about/' className='text-2xl hover:underline'>About Me</a>
      </div>
    </div>
      <div className='absolute bottom-0 flex h-20 gap-10'>
        <div>
          <FontAwesomeIcon icon={faGithub} size="lg"/> <a href="https://github.com/andy9299" className='hover:underline'>GitHub</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faLinkedin} size="lg"/> <a href="https://www.linkedin.com/in/andy-tu-58a797149/" className='hover:underline'>LinkedIn</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} size="lg"/> <a href="mailto:andy.tu998@gmail.com" className='hover:underline'>andy.tu998@gmail.com</a>
        </div>
      </div>
    </div>
    </main>
  </React.StrictMode>,
)
