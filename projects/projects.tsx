import React from 'react'
import ReactDOM from 'react-dom/client'
import './Projects.css'
import { data } from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className='flex flex-col items-center content-center static'>
      <div className="absolute inset-8 ">
       <a href='/portfolio/' className='hover:underline'>← Go Home</a>
      </div>
      <h1 className='text-6xl font-bold p-8'>
        Projects
      </h1>
      <div className='grid  items-center justify-items-center gap-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {data.map((proj) => (
          <div key={proj.name} className="card w-96 bg-base-100 shadow-xl card-bordered	border-white">
            <figure className='border'><img src={proj.imageURL} alt={proj.name} /></figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">{proj.name}</h2>
                <p>{proj.description}</p>
              <div className="card-actions justify-end">
                {proj.technologies.map((tech) => (
                  <div className="badge badge-outline" key={tech}>{tech}</div> 
                ))}
              </div>
              <div className="card-actions justify-end">
                {proj.deploymentURL ? 
                  <a href={proj.deploymentURL }><FontAwesomeIcon icon={faGlobe} size="lg"/></a>
                :
                  <></>
                }
                {proj.githubURL ? 
                  <a href={proj.githubURL}><FontAwesomeIcon icon={faGithub} size="lg"/></a>
                :
                  <></>
                }
              </div>
              <div className="card-actions justify-end text-xs italic">
                Last Update: {proj.lastUpdate}
              </div>
            </div>
          </div>)
        )}
        
      </div>
    </main>
  </React.StrictMode>,
)
