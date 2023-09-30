import React from 'react'
import { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import portfolioData from "../../data/portfolio.json"
import Layout from '../Layout'
import { portfolioDataa } from '../../data/data'

const Mywork = () => {
  const [letterClass, setLetterClass] = useState('text-animate')


  function animated() {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
    return () => {
      clearTimeout(timer)
    }
  }

  useEffect(() => {
    animated()
  }, [])


  const renderPortfolio = ({ portfolio }) => {
    return (
      <>
     <div className='images-container'>
        {
          portfolio.map((port, idx) => {
            return (
              <div className="image-box" key={idx}>
                <img
                  src={port.cover}
                  className="portfolio-image"
                  alt="portfolio" 
                  
                  />
                <div className="content">
                  <p className="title">{port.title}</p>
                  <h4 className="description">{port.description}</h4>
                  <button
                    className="btn"
                    onClick={() => window.open(port.url)}
                  >View</button>
                </div>
              </div> 

            )
          })
        }
      </div>
      </>
    )
  }


  return (
    <>
     <Layout/>
      <div className='container mywork-page'>
        <h1 className='page-title'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15} />
        </h1>
        <div>{renderPortfolio(portfolioDataa)}</div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Mywork
