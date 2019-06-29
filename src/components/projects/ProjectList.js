import React from 'react'
import ProjectSummary from './ProjectSummary.js';

const ProjectList = ({projectsToDisplay}) => {
    return(
        <div className="project-list secton">
            {projectsToDisplay && projectsToDisplay.map(project => {
                return(
                    <ProjectSummary project = {project} key= {project.id}/> 
                )
            })}
            
        </div>
    )
} 

export default ProjectList