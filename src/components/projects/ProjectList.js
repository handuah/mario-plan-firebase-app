import React from 'react'
import ProjectSummary from './ProjectSummary.js';
import { Link } from 'react-router-dom';

const ProjectList = ({projectsToDisplay}) => {
    return(
        <div className="project-list secton">
            {projectsToDisplay && projectsToDisplay.map(project => {
                return(
                    <Link to={"/project/" + project.id}>
                        <ProjectSummary project = {project} key= {project.id}/> 
                    </Link>
                    
                )
            })}
            
        </div>
    )
} 

export default ProjectList