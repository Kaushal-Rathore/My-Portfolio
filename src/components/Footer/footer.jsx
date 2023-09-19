import React from 'react'
import'./footer.css'
import Github from'../../img/github.png';
import Instagram from'../../img/instagram.png';
import Linkedin from'../../img/linkedin.png';

const footer = () => {
  return (
    <div className='footer'>
        <hr/>
      <span className="text-body-secondary">© 2023 Creation Year of The Portfolio</span>
      <a href='https://github.com/Kaushal-Rathore'>
    <img className="photo" src={Github} width23 alt="Github"></img></a>
    <a href='https://www.instagram.com/kaushalrathore.09/'>
    <img className="photo" src={Instagram} width23 alt="Instagram"></img></a>
    <a href='https://www.linkedin.com/in/kaushal-rathore-a9408921b'>
    <img className="photo" src={Linkedin} width23 alt="Linkedin"></img></a>
  
 </div>
  )
}

export default footer
