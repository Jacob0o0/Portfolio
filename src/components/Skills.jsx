import React from 'react'

// =============== STYLE ===============
import '../styles/Skills.css'

// =============== ASSETS ===============
import unity_logo from '../assets/images/unity-logo.png'
import swiftui_logo from '../assets/images/swiftui-logo.png'
import coreml_logo from '../assets/images/coreml-logo.png'
import arkit_logo from '../assets/images/arkit-logo.webp'

import html_logo from '../assets/images/html_logo.png'
import css_logo from '../assets/images/css_logo.png'
import JavaScript_logo from '../assets/images/JavaScript_logo.png'
import php_logo from '../assets/images/php_logo.png'
import django_logo from '../assets/images/django_logo.jpg'
import xampp_logo from '../assets/images/xampp_logo.png'
import react_logo from '../assets/images/react_logo.png'
import bootstrap_logo from '../assets/images/bootstrap_logo.png'

import c_logo from '../assets/images/c_logo.png'
import cpp_logo from '../assets/images/cpp_logo.png'
import csharp_logo from '../assets/images/csharp_logo.png'
import python_logo from '../assets/images/python_logo.png'

function Skills() {
  return (
    <section className='screen_size center'>
      <div className="skills_page column">
        <p className="page_name">Skills</p>
        <div className='cards_skills'>
            <div className="rowR">
                <div className='card_l'>
                    <div className="title gradient_text">Web Development</div>
                    <div className="stack">
                        <img src={html_logo} alt="" style={{width:'75px', borderRadius:'0px'}}/>
                        <img src={css_logo} alt="" style={{width:'75px', borderRadius:'0px'}}/>
                        <img src={php_logo} alt="" style={{width:'75px', borderRadius:'20px'}}/>
                        <img src={JavaScript_logo} alt="" style={{width:'75px', borderRadius:'20px'}}/>
                        <img src={django_logo} alt="" style={{width:'75px', borderRadius:'20px'}}/>
                        <img src={xampp_logo} alt="" style={{width:'75px', borderRadius:'20px'}}/>
                        <img src={react_logo} alt="" style={{width:'75px', borderRadius:'20px'}}/>
                        <img src={bootstrap_logo} alt="" style={{width:'75px', borderRadius:'20px'}}/>
                    </div>
                    <div className="icon_s">
                        <i class="fa-solid fa-laptop-code"></i>
                    </div>
                </div>
                <div className='card_r'>
                    <div className="title gradient_text">Mobile Development</div>
                    <div className="stack">
                        <img src={unity_logo} alt="" style={{width:'75px', borderRadius:'20px'}}/>
                        <img src={swiftui_logo} alt="" style={{width:'75px', borderRadius:'20px'}}/>
                        <img src={arkit_logo} alt="" style={{width:'75px'}}/>
                        <img src={coreml_logo} alt="" style={{width:'75px'}}/>
                    </div>
                    <div className="icon_s">
                        <i class="fa-solid fa-mobile-screen-button"></i>
                    </div>
                </div>
            </div>
            <div className="rowL">
                <div className='card_l'>
                    <div className="title gradient_text">Technologies</div>
                    <div className="stack">
                        <img src={unity_logo} alt="" style={{width:'75px', borderRadius:'20px'}}/>
                        <img src={swiftui_logo} alt="" style={{width:'75px', borderRadius:'20px'}}/>
                        <img src={arkit_logo} alt="" style={{width:'75px'}}/>
                        <img src={coreml_logo} alt="" style={{width:'75px'}}/>
                    </div>
                    <div className="icon_s">
                        <i class="fa-solid fa-gears"></i>
                    </div>
                </div>
                <div className='card_r'>
                    <div className="title gradient_text">Coding Languages</div>
                    <div className="stack">
                        <img src={c_logo} alt="" style={{height:'75px', borderRadius:'20px'}}/>
                        <img src={cpp_logo} alt="" style={{height:'75px', borderRadius:'20px'}}/>
                        <img src={csharp_logo} alt="" style={{height:'75px'}}/>
                        <img src={python_logo} alt="" style={{height:'75px'}}/>
                    </div>
                    <div className="icon_s">
                        <i class="fa-solid fa-code"></i>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills