import React from 'react'
import {social} from "./social" 
import {HiMail , HiPhone}  from "react-icons/hi";
const aboutText = ` I'm Nsengiyumva Christian, a passionate web developer creating seamless online experiences. With creativity, technical expertise, and unwavering commitment to quality, I bring your visions to life. Let's reshape the digital landscape together with innovation and elegance.`

 


const myphoto = `https://media.licdn.com/dms/image/D4D03AQFFov7JZu54Qg/profile-displayphoto-shrink_400_400/0/1667823935550?e=1687996800&v=beta&t=hQPHTFQb8Pm0wpKszZcQWOFSP1JCj7UUZSDFF5BCUH4`

const Hero = () => {
  return (
   <section id="hero-section" className='hero' >
  <h2 className='hero__h2' >WELCOME TO MY PORTFOLIO</h2>
  <div className='hero__div' >
  <div>{aboutText}
  <br />
  <ul className='footer-icons' >
      
      {social.map((socialIc)=>{
          const {id,url,icon} = socialIc;
          return <li key={id} >
              <a href={url} target='_blank'  >{icon}</a>
          </li>
      }) }
     </ul>
  </div>
       <figure>
        <img  className='hero__img' src={myphoto} alt="christian"  width="400" height="400" />
       </figure>
  </div>
   </section>
  )
}

export default Hero

 {/* <BsFillTelephoneFill style={{fontSize:"20PX"}} />  */}
 {/* <AiOutlineMail  style={{fontSize:"20PX"}} /> */}












 {/* <section className="hero"id="hero-page"  >
      <div className="hero-center" >
        <div style={{display:"flex",width:"100%"}} >
        <div className="hero-title"  >
            <h1>I'M NSENGIYUMVA CHRISTIAN</h1>
       
           <p style={{marginBottom:"10px"}} >a skilled full-stack website developer specializing in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and WordPress.</p>
          
            
           
        
        </div>
        <div className="img-container">
            <img  src={myphoto} alt="chris" className="img" style={{width:"25vw", borderRadius:"50%" }} / >
        </div>
        </div>
       
        </div>  
    </section> */}