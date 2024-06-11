import React from 'react'

// =============== STYLE ===============
import '../styles/Home.css'

// =============== ASSETS ===============
import my_picture from '../assets/images/Me_happy.png'

const Home = () => {
  return (
    <section className='screen_size center'>
      <div className='home_page'>
        <aside className='left'>
              <div className="main_card shadow">
                  <img src={my_picture} alt="Jacobo Escorcia" className='main_picture'/>
              </div>
          </aside>
          <aside className='right'>
              <h3>Hello World, I'm</h3>
              <h1>Jacobo Escorcia,</h1>
              <h2 className='gradient_text'>Application Developer</h2>

              <p>
                  I'm a versatile, curious and <span class="gradient_text">self-taught</span> programmer who is always willing to learn and improve my skills. 
                  <br />
                  <br />
                  I love making enjoyable, innovative and creative products.
              </p>

              <div className='quote shadow'>
                <p>“The people who are crazy enough to think they can change the world, are the ones who do.”</p>
                <p className='reference'>- Steve Jobs</p>
              </div>
          </aside>
      </div>
    </section>
  )
}

export default Home