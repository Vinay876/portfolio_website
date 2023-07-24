import React from 'react'
import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Scroll from '../scrollContainer/Scroll'
import Layout from '../Layout'

const Skill = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  function animated(){
    return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
  }

  useEffect(() => {
    animated()
  }, [])

  return (
    <>
    <Layout/>
    <div className='container skill-page'>
      <div className="text-zone">
      <h1 className='page-title'>
          <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}/>
          </h1>
          <p>
          Expert in front-end development including technologies like
          <span  style={{color:'#ffd700'}}>HTML5</span>
          ","
          <span  style={{color:'#ffd700'}}>CSS3</span>
          ","
          <span  style={{color:'#ffd700'}}>JavaScript</span>
          "," 
          <span  style={{color:'#ffd700'}}>React</span>
          ","
          <span  style={{color:'#ffd700'}}>TypeScript</span>
          ","
          <span  style={{color:'#ffd700'}}>Bootstrap</span>
          ","
          <span  style={{color:'#ffd700'}}>Sass</span>
          ","
          <span  style={{color:'#ffd700'}}>Git</span>
          ", etc."
   
          </p>
          <p>
          I'm not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment during work on
            your project.
            </p>
          
          <p>  
          Visit my 
          "<a href="https://www.linkedin.com/in/vinay-singh-102659235/" target='_blank'  style={{color:'#ffd700'}}>Linkdin</a>"
          profile for more details. Also you can checkout my cv on this"<a href="/" target='_blank' style={{color:'#ffd700'}}>link</a> "</p><br /><br />
      </div>
      <Scroll />
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Skill
