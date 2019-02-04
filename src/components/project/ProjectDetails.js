import React from 'react'

const ProjectDetails = (props) => {
   const id = props.match.params.id;
  return (
    <div className="container section project-details">    
      <div className="card z-depth-0">
         <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quod debitis cupiditate neque nesciunt molestias distinctio facilis aperiam? Perspiciatis tenetur repellat aperiam exercitationem sequi iure saepe rerum officiis assumenda sunt.</p>
         </div>
         <div className="card-action gret lighten-4 grey-text">
            <div>Posted by Me</div>
            <div>4 jan 2019</div>
         </div>         
      </div>
    </div>
  )
}

export default ProjectDetails

