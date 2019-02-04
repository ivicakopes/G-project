import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
   //console.log(this.props);
   return (
      <div className="project-list section">
         { projects && projects.map(project => {
            return (             
               <ProjectSummary project={project} key={project.id} />
            )
         })}  
      </div>
   )
}

export default ProjectList;