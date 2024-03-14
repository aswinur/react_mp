import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='w-100 d-flex flex-column justify-content-center bg-light' >
        <div className='row p-5'>
          <div className="col">
            <h4>Media player 2024</h4>
            <p style={{ textAlign: 'justify' }}>Font Awesome is a font and icon toolkit based on CSS and Less. As of 2023, Font Awesome
              was used by 30% of sites that use third-party font scripts, placing Font Awesome in second
              place after Google Fonts. Wikipedia</p>
          </div>
          <div className="col">
            <h4>Links</h4>
            <Link to="/" style={{color:'black'}}>Landing</Link><br />
            <Link to="/dash" style={{color:'black'}}> Dashboard</Link><br />
            <Link to="/his" style={{color:'black'}}>History</Link>
          </div>
          <div className="col">
            <h4>Reference</h4>
            <a href="https://getbootstrap.com/" target='_blank' style={{color:'black'}}>Bootstrap</a><br />
            <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{color:'black'}}>React-Bootstrap</a><br />
            <a href="https://react.dev/" target='_blank' style={{color:'black'}}>React</a>
          </div>
        </div>
        <div className='text-center'>
          <p>&copy; media player 2024 </p>
        </div>
      </div>
    </>

  )
}

export default Footer