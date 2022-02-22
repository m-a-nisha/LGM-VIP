import React from 'react'
import '../components/navbar.css'
export default function Navbar({ handleClick, disp }) {
    console.log(disp)
  return (
      <div className='Navbar'>
          <div className="logo">
              <img src="https://cdn-icons-png.flaticon.com/512/476/476863.png" alt="" />
          </div>
          {
              !disp &&
              <div className="get">
                  <button
                      className="btn"
                      disabled={disp}
                      onClick={handleClick}
                  >
                      Get Users
                  </button>
              </div>
          }
         
    </div>
  )
}
