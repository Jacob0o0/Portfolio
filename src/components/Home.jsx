import React from 'react'

// =============== STYLE ===============
import '../styles/Home.css'

// =============== ASSETS ===============
import my_picture from '../assets/images/Me_happy.png'

const Home = () => {
  return (
    <section className='screen_size center'>
      <div className='home_page'>
        <div className="blob-left-blur">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" background-color="transparent">
                <path fill="#0099DB" transform="translate(100 100)">
                    <animate attributeName="d" dur="15000ms" repeatCount="indefinite"
                        values="M48.1,-47.2C63.3,-32.9,77.3,-16.4,75.5,-1.7C73.8,12.9,56.3,25.9,41.1,36.9C25.9,47.8,12.9,56.9,-3.1,60C-19.1,63,-38.2,60.1,-46.2,49.1C-54.3,38.2,-51.3,19.1,-53,-1.7C-54.7,-22.4,-61,-44.8,-52.9,-59.2C-44.8,-73.5,-22.4,-79.8,-3,-76.8C16.4,-73.8,32.9,-61.5,48.1,-47.2Z;
                                M42.2,-48.5C48.7,-35.7,43.7,-17.9,44.1,0.4C44.6,18.7,50.4,37.4,43.9,53.7C37.4,70.1,18.7,84,3.6,80.4C-11.6,76.8,-23.2,55.8,-31,39.5C-38.8,23.2,-42.9,11.6,-47.9,-5C-53,-21.7,-59,-43.4,-51.2,-56.1C-43.4,-68.8,-21.7,-72.6,-1.9,-70.7C17.9,-68.8,35.7,-61.2,42.2,-48.5Z;
                                M41.4,-43.6C53.8,-28.9,64.3,-14.5,63.5,-0.8C62.6,12.8,50.5,25.6,38.1,33.8C25.6,41.9,12.8,45.5,-3.8,49.3C-20.5,53.1,-40.9,57.2,-50.4,49.1C-60,40.9,-58.6,20.5,-54.8,3.8C-50.9,-12.8,-44.6,-25.5,-35.1,-40.2C-25.5,-54.9,-12.8,-71.5,0.8,-72.4C14.5,-73.2,28.9,-58.3,41.4,-43.6Z;
                                M37.1,-28.6C52.3,-21.9,71.6,-11,74.4,2.8C77.2,16.6,63.5,33.1,48.3,45.4C33.1,57.6,16.6,65.5,-2.9,68.5C-22.5,71.4,-44.9,69.4,-51.7,57.2C-58.5,44.9,-49.6,22.5,-45.8,3.8C-41.9,-14.8,-43.2,-29.7,-36.4,-36.3C-29.7,-42.9,-14.8,-41.4,-1.9,-39.4C11,-37.5,21.9,-35.2,37.1,-28.6Z;
                                M51.6,-57.2C61,-42.2,58.8,-21.1,55.7,-3.1C52.5,14.8,48.5,29.6,39,45.4C29.6,61.1,14.8,77.9,-4.2,82.1C-23.2,86.3,-46.4,77.9,-55,62.2C-63.5,46.4,-57.5,23.2,-55.6,1.9C-53.7,-19.4,-56,-38.9,-47.4,-53.9C-38.9,-68.9,-19.4,-79.5,0.8,-80.3C21.1,-81.2,42.2,-72.2,51.6,-57.2Z;
                                M48.1,-47.2C63.3,-32.9,77.3,-16.4,75.5,-1.7C73.8,12.9,56.3,25.9,41.1,36.9C25.9,47.8,12.9,56.9,-3.1,60C-19.1,63,-38.2,60.1,-46.2,49.1C-54.3,38.2,-51.3,19.1,-53,-1.7C-54.7,-22.4,-61,-44.8,-52.9,-59.2C-44.8,-73.5,-22.4,-79.8,-3,-76.8C16.4,-73.8,32.9,-61.5,48.1,-47.2Z">
                    </animate>
                </path>
            </svg>
        </div>
        <div className="blob-left">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" background-color="transparent">
                <path fill="#0099DB" transform="translate(100 100)">
                    <animate attributeName="d" dur="15000ms" repeatCount="indefinite"
                        values="M48.1,-47.2C63.3,-32.9,77.3,-16.4,75.5,-1.7C73.8,12.9,56.3,25.9,41.1,36.9C25.9,47.8,12.9,56.9,-3.1,60C-19.1,63,-38.2,60.1,-46.2,49.1C-54.3,38.2,-51.3,19.1,-53,-1.7C-54.7,-22.4,-61,-44.8,-52.9,-59.2C-44.8,-73.5,-22.4,-79.8,-3,-76.8C16.4,-73.8,32.9,-61.5,48.1,-47.2Z;
                                M42.2,-48.5C48.7,-35.7,43.7,-17.9,44.1,0.4C44.6,18.7,50.4,37.4,43.9,53.7C37.4,70.1,18.7,84,3.6,80.4C-11.6,76.8,-23.2,55.8,-31,39.5C-38.8,23.2,-42.9,11.6,-47.9,-5C-53,-21.7,-59,-43.4,-51.2,-56.1C-43.4,-68.8,-21.7,-72.6,-1.9,-70.7C17.9,-68.8,35.7,-61.2,42.2,-48.5Z;
                                M41.4,-43.6C53.8,-28.9,64.3,-14.5,63.5,-0.8C62.6,12.8,50.5,25.6,38.1,33.8C25.6,41.9,12.8,45.5,-3.8,49.3C-20.5,53.1,-40.9,57.2,-50.4,49.1C-60,40.9,-58.6,20.5,-54.8,3.8C-50.9,-12.8,-44.6,-25.5,-35.1,-40.2C-25.5,-54.9,-12.8,-71.5,0.8,-72.4C14.5,-73.2,28.9,-58.3,41.4,-43.6Z;
                                M37.1,-28.6C52.3,-21.9,71.6,-11,74.4,2.8C77.2,16.6,63.5,33.1,48.3,45.4C33.1,57.6,16.6,65.5,-2.9,68.5C-22.5,71.4,-44.9,69.4,-51.7,57.2C-58.5,44.9,-49.6,22.5,-45.8,3.8C-41.9,-14.8,-43.2,-29.7,-36.4,-36.3C-29.7,-42.9,-14.8,-41.4,-1.9,-39.4C11,-37.5,21.9,-35.2,37.1,-28.6Z;
                                M51.6,-57.2C61,-42.2,58.8,-21.1,55.7,-3.1C52.5,14.8,48.5,29.6,39,45.4C29.6,61.1,14.8,77.9,-4.2,82.1C-23.2,86.3,-46.4,77.9,-55,62.2C-63.5,46.4,-57.5,23.2,-55.6,1.9C-53.7,-19.4,-56,-38.9,-47.4,-53.9C-38.9,-68.9,-19.4,-79.5,0.8,-80.3C21.1,-81.2,42.2,-72.2,51.6,-57.2Z;
                                M48.1,-47.2C63.3,-32.9,77.3,-16.4,75.5,-1.7C73.8,12.9,56.3,25.9,41.1,36.9C25.9,47.8,12.9,56.9,-3.1,60C-19.1,63,-38.2,60.1,-46.2,49.1C-54.3,38.2,-51.3,19.1,-53,-1.7C-54.7,-22.4,-61,-44.8,-52.9,-59.2C-44.8,-73.5,-22.4,-79.8,-3,-76.8C16.4,-73.8,32.9,-61.5,48.1,-47.2Z">
                    </animate>
                </path>
            </svg>
        </div>
        <aside className='left'>
              <div className="main_card shadow debbug">
                  <img src={my_picture} alt="Jacobo Escorcia" className='main_picture'/>
                  <div className='social_media'>
                    <a href="https://www.linkedin.com/in/jacobo-escorcia-alcantara-392bb8208/" class="social_button linkedin" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Jacob0o0" class="social_button github" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                  </div>
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
      <div className="blob-right">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" background-color="transparent">
            <path fill="#0099DB" transform="translate(100 100)">
                <animate attributeName="d" dur="10000ms" repeatCount="indefinite"
                    values="M44.4,-51.2C58.6,-50.7,71.9,-39.2,76.5,-24.9C81.1,-10.6,77,6.5,69.7,20.8C62.5,35,52.1,46.2,40,52.7C27.9,59.2,13.9,60.9,-1.7,63.3C-17.4,65.7,-34.8,68.8,-47.1,62.4C-59.5,55.9,-66.7,40,-71.8,23.5C-76.8,7.1,-79.7,-9.9,-71.9,-20.2C-64.2,-30.4,-45.8,-34,-32,-34.6C-18.2,-35.2,-9.1,-32.8,3,-36.9C15.1,-41,30.2,-51.6,44.4,-51.2Z;
                            M40.2,-50.3C54.8,-44.8,71,-36.6,71,-25.7C70.9,-14.7,54.6,-1.1,47.3,13.5C40,28.2,41.7,43.9,35.3,56.8C28.9,69.6,14.5,79.5,-1.8,82C-18.1,84.5,-36.2,79.6,-44.6,67.5C-53,55.3,-51.8,35.9,-51.6,20.5C-51.4,5.2,-52.2,-6,-47.9,-14.4C-43.6,-22.8,-34.1,-28.3,-25.2,-35.6C-16.4,-43,-8.2,-52.1,2.3,-55.3C12.8,-58.5,25.7,-55.8,40.2,-50.3Z;
                            M45.1,-56.8C55.1,-54.9,57.3,-37.1,63.1,-20.3C69,-3.4,78.3,12.5,76.1,26.4C73.8,40.2,60,51.9,45.4,60.1C30.8,68.4,15.4,73.2,-1.1,74.7C-17.6,76.1,-35.1,74.3,-46.2,64.9C-57.3,55.6,-62,38.6,-65.2,22.6C-68.4,6.6,-70.2,-8.4,-68,-24.2C-65.8,-40.1,-59.6,-56.8,-47.6,-58C-35.6,-59.2,-17.8,-44.8,-0.1,-44.7C17.6,-44.6,35.2,-58.6,45.1,-56.8Z;
                            M26.7,-39.1C38,-28.6,52.9,-25.3,56.2,-17.7C59.6,-10,51.3,2,46.7,14.9C42.1,27.7,41.1,41.5,33.9,47.2C26.7,52.9,13.4,50.7,-2.5,54.1C-18.4,57.6,-36.8,66.7,-45.2,61.4C-53.6,56.1,-52,36.2,-48.6,21.7C-45.2,7.2,-39.9,-2,-40.4,-17C-40.9,-32,-47.2,-52.8,-41.4,-65.1C-35.6,-77.4,-17.8,-81.2,-5.1,-74.3C7.7,-67.3,15.4,-49.6,26.7,-39.1Z;
                            M42.2,-55.9C53.4,-50,60.2,-35.9,57.2,-23.6C54.2,-11.4,41.4,-1,39.9,15.9C38.4,32.7,48.1,56.2,43.3,68.1C38.6,80,19.3,80.4,4,74.8C-11.2,69.3,-22.4,57.8,-28.1,46.2C-33.9,34.6,-34.1,22.9,-39.4,11.6C-44.8,0.3,-55.4,-10.6,-57.8,-23.5C-60.1,-36.5,-54.2,-51.5,-43.2,-57.4C-32.2,-63.3,-16.1,-60.2,-0.3,-59.8C15.5,-59.4,31.1,-61.7,42.2,-55.9Z;
                            M44.4,-51.2C58.6,-50.7,71.9,-39.2,76.5,-24.9C81.1,-10.6,77,6.5,69.7,20.8C62.5,35,52.1,46.2,40,52.7C27.9,59.2,13.9,60.9,-1.7,63.3C-17.4,65.7,-34.8,68.8,-47.1,62.4C-59.5,55.9,-66.7,40,-71.8,23.5C-76.8,7.1,-79.7,-9.9,-71.9,-20.2C-64.2,-30.4,-45.8,-34,-32,-34.6C-18.2,-35.2,-9.1,-32.8,3,-36.9C15.1,-41,30.2,-51.6,44.4,-51.2Z">
                </animate>
            </path>
        </svg>
      </div>
      <div className="blob-right-blur">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" background-color="transparent">
            <path fill="#0099DB" transform="translate(100 100)">
                <animate attributeName="d" dur="10000ms" repeatCount="indefinite"
                    values="M44.4,-51.2C58.6,-50.7,71.9,-39.2,76.5,-24.9C81.1,-10.6,77,6.5,69.7,20.8C62.5,35,52.1,46.2,40,52.7C27.9,59.2,13.9,60.9,-1.7,63.3C-17.4,65.7,-34.8,68.8,-47.1,62.4C-59.5,55.9,-66.7,40,-71.8,23.5C-76.8,7.1,-79.7,-9.9,-71.9,-20.2C-64.2,-30.4,-45.8,-34,-32,-34.6C-18.2,-35.2,-9.1,-32.8,3,-36.9C15.1,-41,30.2,-51.6,44.4,-51.2Z;
                            M40.2,-50.3C54.8,-44.8,71,-36.6,71,-25.7C70.9,-14.7,54.6,-1.1,47.3,13.5C40,28.2,41.7,43.9,35.3,56.8C28.9,69.6,14.5,79.5,-1.8,82C-18.1,84.5,-36.2,79.6,-44.6,67.5C-53,55.3,-51.8,35.9,-51.6,20.5C-51.4,5.2,-52.2,-6,-47.9,-14.4C-43.6,-22.8,-34.1,-28.3,-25.2,-35.6C-16.4,-43,-8.2,-52.1,2.3,-55.3C12.8,-58.5,25.7,-55.8,40.2,-50.3Z;
                            M45.1,-56.8C55.1,-54.9,57.3,-37.1,63.1,-20.3C69,-3.4,78.3,12.5,76.1,26.4C73.8,40.2,60,51.9,45.4,60.1C30.8,68.4,15.4,73.2,-1.1,74.7C-17.6,76.1,-35.1,74.3,-46.2,64.9C-57.3,55.6,-62,38.6,-65.2,22.6C-68.4,6.6,-70.2,-8.4,-68,-24.2C-65.8,-40.1,-59.6,-56.8,-47.6,-58C-35.6,-59.2,-17.8,-44.8,-0.1,-44.7C17.6,-44.6,35.2,-58.6,45.1,-56.8Z;
                            M26.7,-39.1C38,-28.6,52.9,-25.3,56.2,-17.7C59.6,-10,51.3,2,46.7,14.9C42.1,27.7,41.1,41.5,33.9,47.2C26.7,52.9,13.4,50.7,-2.5,54.1C-18.4,57.6,-36.8,66.7,-45.2,61.4C-53.6,56.1,-52,36.2,-48.6,21.7C-45.2,7.2,-39.9,-2,-40.4,-17C-40.9,-32,-47.2,-52.8,-41.4,-65.1C-35.6,-77.4,-17.8,-81.2,-5.1,-74.3C7.7,-67.3,15.4,-49.6,26.7,-39.1Z;
                            M42.2,-55.9C53.4,-50,60.2,-35.9,57.2,-23.6C54.2,-11.4,41.4,-1,39.9,15.9C38.4,32.7,48.1,56.2,43.3,68.1C38.6,80,19.3,80.4,4,74.8C-11.2,69.3,-22.4,57.8,-28.1,46.2C-33.9,34.6,-34.1,22.9,-39.4,11.6C-44.8,0.3,-55.4,-10.6,-57.8,-23.5C-60.1,-36.5,-54.2,-51.5,-43.2,-57.4C-32.2,-63.3,-16.1,-60.2,-0.3,-59.8C15.5,-59.4,31.1,-61.7,42.2,-55.9Z;
                            M44.4,-51.2C58.6,-50.7,71.9,-39.2,76.5,-24.9C81.1,-10.6,77,6.5,69.7,20.8C62.5,35,52.1,46.2,40,52.7C27.9,59.2,13.9,60.9,-1.7,63.3C-17.4,65.7,-34.8,68.8,-47.1,62.4C-59.5,55.9,-66.7,40,-71.8,23.5C-76.8,7.1,-79.7,-9.9,-71.9,-20.2C-64.2,-30.4,-45.8,-34,-32,-34.6C-18.2,-35.2,-9.1,-32.8,3,-36.9C15.1,-41,30.2,-51.6,44.4,-51.2Z">
                </animate>
            </path>
        </svg>
      </div>
    </section>
  )
}

export default Home