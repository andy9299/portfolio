import React from 'react'
import ReactDOM from 'react-dom/client'
import './About.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className='flex flex-col max-w-3xl items-center content-center space-y-2'>
      <h1 className='text-6xl font-bold	p-8'>
        About Me
      </h1>
      <h2 className='font-semibold pb-3 text-2xl'>
        🗺️ My Journey 🗺️
      </h2>
      <p className='indent-8'>
        I graduated from NYU Tandon School of Engineering with a Bachelors of Science in Mathematics and minored in Computer 
        Science. Covid struck at a bad time for me but I got through it by getting a part-time and continuing my education 
        through a bootcamp called "Springboard." From there I learned about web development with 1-on-1 oversight with an 
        industry mentor 1-on-1, and completed multiple projects. Check it out at 
        my <a href='/projects/' className='hover:underline'>projects</a> page!
      </p>
      <p className='indent-8'>
        Some of the stuff I learned throughout the years include: JavaScript, jQuery, Python, C++, HTML, CSS, Node.js, React.js,
        SQL, and much more. Backend, frontend, you name it. As well as, the things I learned from my background in Mathematics.
      </p>
      <h2 className='font-semibold py-3 text-2xl'>
        🌎 Seeking Opportunities 🌎
      </h2>
      <p className='indent-8'>
        Nowadays, I do LeetCode, and work on my projects when I have time. But, I'm eager to contribute my skills in a 
        tech role! I'm looking for a role as a Backend Developer but would love opportunities as a Full-stack or Frontend 
        Developer to get started! I'm also improving myself mentally by taking walks daily. Staying inside from Covid really
        took a toll.
      </p>
      <h2 className='font-semibold py-3 text-2xl'>
        🎮 My Hobbies 🎮
      </h2>
      <p className='indent-8'>
        When I'm not working, I love to play games, watch anime, read manga, or try out different food places!
      </p>
      <p className='indent-8'>
        Some trading card games I enjoy playing are: Magic the Gathering, Yu-Gi-Oh!, and WIXOSS. However, I love trying out 
        new games! I recently tried out Grand Archive.
      </p>
      <p className='indent-8'>
        Some video games I enjoy playing are: League of Legends, Counter Strike 2, Apex Legends, and Genshin Impact. Once again, I love 
        trying out new games! I recently got into playing Arknights. Not only that but also I really want to get into single-player 
        games, so please suggest me some!
      </p>
      <a href="/" className='hover:underline p-20'>Home</a>  
    </main>
  </React.StrictMode>,
)
