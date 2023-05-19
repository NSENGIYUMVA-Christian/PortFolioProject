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
    <div>
  <section className="projects"  >

<div className="title">
    <h2>{projects.slice(0,1).length} Advanced project</h2>
    <div className="title-underline"></div>
   </div>

   <div className="projects-center"  >
    {projects.slice(0,1).map((project)=>{
        const {id,img,url,title} = project
        return <a key={id} href={url} target='_blank' rel="noreferrer" title="click to visit"  className="project" >
          <img src={img} alt={title} className="img" />
          <h5>{title}</h5>
        </a>

    }) }
   </div>
</section>

<section className="projects"  >
   <div className="title">
    <h2 >{projects.slice(1,23).length} Fundamental projects</h2>
    <div className="title-underline"></div>
   </div>

   <div className="projects-center">
    {projects.slice(1,23).map((project)=>{
        const {id,img,url,title} = project
        return <a title="click to visit" key={id} href={url} target='_blank' rel="noreferrer" className="project" >
          <img src={img} alt={title} className="img" />
          <h5>{title}</h5>
        </a>

    }) }
   </div>
</section>
</div>

  )
}

export default Projects