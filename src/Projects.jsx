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
    <div id="all-projects" className='all-projects' >
    <section className='select-project' >
      <h3>Select projects category</h3>
<ul className='projects-select-list' >
<li><a href="#adv-projects">ADVANCED</a></li>
<li><a href="#fund-projects">FUNDAMENTAL</a></li>
</ul>  
      </section>  
  <section id="adv-projects" className="projects adv-projects"  >

<div className="title ">
    <h2  >{projects.filter((proj)=>proj.title === "E commerce store").length} Advanced project</h2>
    <div className="title-underline"></div>
   </div>

   <div className="projects-center"  >
    {projects.filter((proj)=>proj.title === "E commerce store").map((project)=>{
        const {id,img,url,title} = project
        return <a key={id} href={url} target='_blank' rel="noreferrer" title="click to visit"  className="project" >
          <img src={img} alt={title} className="img" />
          <h5>{title}</h5>
        </a>

    }) }
   </div>
</section>

<section  id="fund-projects" className="projects fund-projects"  >
   <div className="title">
    <h2 >{projects.slice(1).length} Fundamental projects</h2>
    <div className="title-underline"></div>
   </div>

   <div className="projects-center">
    {projects.slice(1).map((project)=>{
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