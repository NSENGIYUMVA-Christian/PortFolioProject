import React from 'react'
import {FaHtml5,FaCss3,FaJs,FaWordpress,FaBootstrap, FaReact} from 'react-icons/fa';
import {SiExpress,SiTailwindcss} from 'react-icons/si'
const About = () => {
  return (
    <div  id="about" className='about'>
        <section className='about-section-1' >
        <h3>About myself</h3>
        <p className='about-main-p'>
            
<q>I am a web developer specialized in creating modern, responsive websites using HTML, CSS, and JavaScript. With a passion for crafting engaging online experiences, I stay updated with the latest trends and technologies. I excel in transforming complex concepts into user-friendly interfaces and prioritize collaboration with clients, designers, and developers. My problem-solving skills, attention to detail, and agile approach ensure visually appealing and reliable websites. As a lifelong learner, I embrace emerging technologies to stay ahead in the industry. If you seek a skilled web developer for exceptional results, let's collaborate and bring your ideas to life.</q>
        </p>
        </section>
        
        <section className='about-section-2'>
         <div>
           <h4>Programming languages</h4> 
            <div><ul>
                <li><FaHtml5 className='about-icons' /> <br />HTML</li>
                <li><FaCss3 className='about-icons' /><br />CSS</li>
                <li><FaJs className='about-icons' /><br />JAVASCRIPT</li>
                </ul>
            </div>
            </div>
            <div>
           <h4>FRAMEWORKS</h4> 
            <p><ul>
                <li><FaBootstrap className='about-icons' /><br />BOOTSTRAP</li>
                <li><SiTailwindcss className='about-icons' /><br />TAILWIND</li>
                <li><FaReact className='about-icons' /><br />ReactJs</li>
                <li><SiExpress className='about-icons' /><br />ExpressJs</li>
                </ul>
            </p>
            </div>
            <div>
           <h4>OTHER TECHNOLOGY</h4> 
            <p><ul>
                <li><FaWordpress className='about-icons' /><br />WORDPRESS</li>
                </ul>
            </p>
            </div>

        </section>
    </div>
  )
}

export default About