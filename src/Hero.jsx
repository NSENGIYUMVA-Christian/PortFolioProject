import React from 'react'
import {social} from "./social" 
import {BsFillTelephoneFill}  from "react-icons/Bs";
import {AiOutlineMail}  from "react-icons/Ai";



const myphoto = `https://media.licdn.com/dms/image/D4D03AQFFov7JZu54Qg/profile-displayphoto-shrink_400_400/0/1667823935550?e=1687996800&v=beta&t=hQPHTFQb8Pm0wpKszZcQWOFSP1JCj7UUZSDFF5BCUH4`

const Hero = () => {
  return (
    <section className="hero" >
      <div className="hero-center" >
        <div style={{display:"flex",width:"100%"}} >
        <div className="hero-title"  >
            <h1>I'm NSENGIYUMVA CHRISTIAN</h1>
       
           <p style={{marginBottom:"10px"}} >a junior software developer with a specialization in web development using ReactJs and NodeJs. This portfolio project serves as a testament to my skills and expertise in the field.

My passion lies in creating dynamic and intuitive web applications that enhance user experience. If you are looking for a dedicated and skilled developer to work on your project or join your team, I would be thrilled to hear from you. Please feel free to reach out to me with any opportunities or questions you may have.</p>
            {social.map((socialIc)=>{
                const {id,url,icon} = socialIc;
                return <a style={{fontSize:"30PX",margin:"10px",color:"#2d4144"}} target='_blank' key={id} href={url}>{icon}</a>
            }) }
            <ul>
                <li style={{display:"flex",color:"#2d4144"}}> <BsFillTelephoneFill style={{fontSize:"20PX"}} />  +250786457338 </li>
                 <li style={{display:"flex",color:"#2d4144"}} >  <AiOutlineMail  style={{fontSize:"20PX"}} /> cristiannsengi@gmail.com </li>
            </ul>
        
        </div>
        <div className="img-container">
            <img  src={myphoto} alt="chris" className="img" style={{width:"25vw", borderRadius:"50%" }} / >
        </div>
        </div>
       
        </div>  
    </section>
  )
}

export default Hero