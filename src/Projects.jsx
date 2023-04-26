import React from 'react'
import   { useFetchProjects} from "./fetchProjects.jsx"

const Projects = () => {
 const {loading,projects} = useFetchProjects()
 

 if(loading){
    return <section className="projects">
        <div className="loading" ></div>
    </section>
 }

  return (
    <section className="projects">
   <div className="title">
    <h2 id="top" > {projects.length} Projects</h2>
    <div className="title-underline"></div>
   </div>

   <div className="projects-center">
    {projects.map((project)=>{
        const {id,img,url,title} = project
        return <a key={id} href={url} target='_blank' rel="noreferrer" className="project" >
          <img src={img} alt={title} className="img" />
          <h5>{title}</h5>
        </a>

    }) }
   </div>
   <a href='#top'  style={{textAlign:"center"}} ><h4 style={{marginTop:"25px",color:"#dededc", width:"80%",background:"#24241f",margin:"0 auto", borderRadius:"10px", padding:"3px"}} > BACK TO THE TOP </h4></a> 
</section>
  )
}

export default Projects