import React from 'react'
import {social} from "./social" 
import {HiMail , HiPhone}  from "react-icons/hi";
const aboutText = `Experienced junior software developer specializing in ReactJs and NodeJs for web development. Passionate about creating dynamic web applications that enhance user experience. Available for project work or team collaboration. Feel free to reach out for any opportunities or questions.`

 


const myphoto = `https://media.licdn.com/dms/image/D4D03AQFFov7JZu54Qg/profile-displayphoto-shrink_400_400/0/1667823935550?e=1687996800&v=beta&t=hQPHTFQb8Pm0wpKszZcQWOFSP1JCj7UUZSDFF5BCUH4`


// used classes
//hero
//hero-title

// {social.map((socialIc)=>{
//   const {id,url,icon} = socialIc;
//   return <a  style={{fontSize:"30PX",margin:"10px",color:"#2d4144"}} target='_blank' key={id} href={url}>{icon}</a>
// }) }
// <ul>

//   <li style={{display:"flex",color:"#2d4144"}}><HiPhone style={{fontSize:"20PX"}} /> +250786457338 </li>
//    <li style={{display:"flex",color:"#2d4144"}} > <HiMail style={{fontSize:"20PX"}} /> cristiannsengi@gmail.com </li>

// </ul>

const Hero = () => {
  return (
   <section className='hero' >
  <h1>WELCOME TO MY PORTFOLIO</h1>
  <div className='hero__div' >
  <p> {aboutText}</p>
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