import './index.scss'
import React from 'react';
import { Link, } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Logos from '../../assets/Images/logo-s.png'
// import LogoSubtitle from '../../assets/Images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faHome, faUser, faGear, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faTwitter, } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
    const [showNav, setShowNav] = React.useState(false);
    return (
        <div>
            <div className='nav-bar'>
                <Link className='logo' to='/'>
                    <img src={Logos} alt="logo" />
                    {/* <img className='sub-logo' src={LogoSubtitle} alt="Thakur Ji"  /> */}
                    <span style={{ display: 'flex', justifyContent: 'center', color: 'darkseagreen', fontSize: '14px' }}>Coder</span>
                </Link>
                <nav className={showNav ? 'mobile-show' : ''}>
                    <NavLink
                        onClick={() => setShowNav(false)}
                        exact="true" activeclassname="active" to="/">
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                    </NavLink>
                    <NavLink
                        onClick={() => setShowNav(false)}
                        exact="true" activeclassname="active" className="about-link" to="/about">
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                    </NavLink>
                    <NavLink
                        onClick={() => setShowNav(false)}
                        exact="true" activeclassname="active" className="skill-link" to="/skill">
                        <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
                    </NavLink>
                    <NavLink
                        onClick={() => setShowNav(false)}
                        exact="true" activeclassname="active" className="MyWork-link" to="/mywork">
                        <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                    </NavLink>
                    <FontAwesomeIcon
                        onClick={() => setShowNav(false)}
                        icon={faClose}
                        color='#ffd700'
                        size='3x'
                        className='close-icon'
                    />
                </nav>
                <ul>
                    <li>
                        <a target="_blank"
                            rel='noreferrer'
                            href="https://www.linkedin.com/in/vinay-singh-102659235/">
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <a target="_blank"
                            rel='noreferrer'
                            href="https://github.com/Vinay876">
                            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <a target="_blank"
                            rel='noreferrer'
                            href="https://twitter.com/i/flow/login">
                            <FontAwesomeIcon icon={faTwitter} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <a target="_blank"
                            rel='noreferrer'
                            href="https://www.instagram.com/">
                            <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                        </a>
                    </li>
                </ul>
                <FontAwesomeIcon
                    onClick={() => setShowNav(true)}
                    icon={faBars}
                    color='#ffd700'
                    size='3x'
                    className='hamburger-icon'
                />
            </div>
        </div>
    )
}

export default Sidebar
