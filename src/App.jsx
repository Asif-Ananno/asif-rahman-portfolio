import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Study from './Components/Study/Study'
import Projects from './Components/projects/projects'
import Research from './Components/Research/Research'
import Skills from './Components/Skills/Skills'
import Extra from './Components/Extra/Extra'
import Contact from './Components/Contact/Contact'
import '@fortawesome/fontawesome-free/css/all.min.css';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Study/>
      <Projects/>
      <Research/>
      <Skills/>
      <Extra/>
      <Contact/>
      
         
    </div>
  )
}

export default App