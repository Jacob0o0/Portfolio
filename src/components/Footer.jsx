import React from 'react'

// =============== STYLE ===============
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <div className="card_f">
            <div className="contact shadow">
                <i class="fa-solid fa-phone"></i>
                <p className="contact_data">+52 55 4359 5779</p>
            </div>
            <div className="contact shadow">
                <i class="fa-solid fa-envelope"></i>
                <p className="contact_data">jacoboeadev@gmail.com</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer