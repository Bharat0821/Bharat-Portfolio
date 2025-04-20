import React from 'react'
import ProjectCard from './ProjectCard';


const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
     <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1> 
     <div className='py-12 px-8 flex flex-wrap gap-5'>
      <ProjectCard source="src\assets\components\Projects\bloggin.jpg" title="Blogging Website" main="This is a bloggin website created in next js and used some component library" />
      <ProjectCard source="src\assets\components\Projects\youtube.jpeg" title="Youtube Clone" main="This is a Youtube Clone created in next js and used some component library" />
      <ProjectCard source="src\assets\components\Projects\Netflix.jpeg" title="Netflix Clone" main="This is a Netflix Clone created in next js and used some component library" />
     </div>
    </div>
  )
}

export default Projects;
