import React from 'react'
import {social} from "./social" 
import {HiMail , HiPhone}  from "react-icons/hi";
import {ImLocation} from "react-icons/im"

 const Contact = () => {
  return (
    <section id="contact" className='contact__section' >
      <h3 className='contact-me-header' >CONTACT ME</h3>
      <p>Looking for new opportunities in website development? Don't hesitate to reach out and drop me a message! Whether it's about your project requirements, collaboration ideas, or any related concepts, I'm here to help you bring your vision to life.</p>
      <div> <h3 className='connect' >LET'S CONNECT</h3> 
    <div className='contact-cons'>
    <ul className='contact-social-links' >
      
      {social.map((socialIc)=>{
          const {id,url,icon} = socialIc;
          return <li key={id}  >
              <a href={url} target='_blank'  >{icon}</a>
          </li>
      }) }
     </ul>
<ul >
<li><span className='extra-icon' ><HiMail/> </span> cristiannsengi@gmail.com</li>
<li> <span className='extra-icon' ><HiPhone/></span>  +250786457338</li>
<li><span className='extra-icon' ><ImLocation/> </span>  KIGALI-RWANDA</li>
</ul>
      </div> 
     
      </div>
      <form
  action="https://formspree.io/f/mrgvvbrp"
  method="POST"
>
  <h3>Leave a message or comment</h3>
  <input type="text" name="name" placeholder='enter your name' />
  
  <input type="email" name="email" placeholder='enter your email'/>
  
  <textarea name="message" placeholder='write your message here' ></textarea>
  
  <button type="submit">Submit</button>

</form>
    </section>
  )
}
export default Contact;
