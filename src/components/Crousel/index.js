import React from 'react'
import './index.scss'
import image1 from '../../assets/profiel images/profile1.jpg'
import image2 from '../../assets/profiel images/profile2.jpg'
import image3 from '../../assets/profiel images/profile3.jpg'
import image4 from '../../assets/profiel images/profile4.jpg'
import image5 from '../../assets/profiel images/profile5.jpg'
import image6 from '../../assets/profiel images/profile6.jpg'
const Crousel = () => {
 return (
    <>
    <div className="maincontainer">
    <span className='gallery_text'>Hover On Image</span>
   <div className="crousel-box">
  <div className='imagebox'>
  <img src={image1} alt="" className="images first" />
  </div>
  <div className='imagebox'>
  <img src={image2} alt="" className="images second"/>
  </div>
  <div className='imagebox'>
  <img src={image3} alt="" className="images third"/>
  </div>
  <div className='imagebox'>
  <img src={image4} alt="" className="images fourth"/>
  </div>
</div>
</div>
    </>
  )
}

export default Crousel
