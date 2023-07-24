import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/Images/logo-s.png'
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
// import Logo from './Logo';
import Crousel from '../Crousel';
import Loader from 'react-loaders';
import Layout from '../Layout';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['I', 'N', 'A', 'Y', ' ', 'K', 'U', 'M', 'A', 'R',]
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    function abcd(){
        return setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000)
    }

    useEffect(()=>{
  abcd()
    },[])

    function Logout(){
        localStorage.removeItem('user','')
        window.location.href='/'
       
    }

    return (
        <>
        <Layout/>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass}_12`}>i,</span>
                    <br />
                    <span className={`${letterClass}_13`}>I</span>
                    <span className={`${letterClass}_14`}>'m</span>
                    <span>
                        <img src={LogoTitle} alt="developer" style={{
                            width:'50px',
                            height:'50px'
                        }} />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        /></span>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={22} />
                </h1>
                <h2>Frontend Developer / JavaScript Learner</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                <button className='logout-button' onClick={Logout}>Logout</button>
            </div>
            {/* <Logo/> */}
   
            <Crousel/>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Home