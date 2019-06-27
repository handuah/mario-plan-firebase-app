import React from 'react'

const ProjectDetails  = (props) => {

    const id = props.match.params.id;   

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quae necessitatibus in earum ratione corporis magnam aut, provident vel perspiciatis inventore, deleniti, voluptas ullam consequuntur vero accusantium quaerat officia totam.</p>
                    <div className="card-action grey lighten-4 grey-text">
                        <p>Posted by Hannah Duah</p>
                        <p>4th May, 2am</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
