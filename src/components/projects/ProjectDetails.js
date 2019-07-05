import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails  = (props) => {

   // const id = props.match.params.id;   
    const { project } = props;
    if (project) {
        return(
          <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{project.title}</span>
                    <p>{project.content}</p>
                    <div className="card-action grey lighten-4 grey-text">
                        <p>Posted by {project.authorFirstname}</p>
                        <p>4th May, 2am</p>
                    </div>
                </div>
            </div>
        </div>
        )
    } else{
    return (
      <div className="container center">
        <p>Loading...</p>
      </div>
    )
    }
}

const mapToStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const projectsinFirestore = state.firestore.data.projects;
    const projectClicked = projectsinFirestore ? projectsinFirestore[id] : null
    return {
        //project: projectClicked  -- 
           project: state.firestore.data[projectClicked] && state.firestore.data.project
    }
}

export default compose(
    connect(mapToStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
) (ProjectDetails)



//Cleaner way to fetch a specific project document from projects collection:

//const mapStateToProps = (state) => {
 //    return {
  //        project: state.firestore.data[project] && state.firestore.data.project
          // Not state.firestore.ordered as a single project document will be fetched so technically there is no order needed.
          // If you still want state.firestore.ordered, you can try the following:        
          // project: state.firestore.ordered.project[0]
          // But be aware that ordered will have just one document so you will need extra [0] 
 //    }
//}

//export default compose(
 //    connect(
 //         mapStateToProps
 //    ),
 //    firestoreConnect(props => {

          // console.log("firestoreConnect props are the same that are passed to the component, ", props);
 //         return [
 //              { collection: "projects", doc: props.match.params.id, storeAs: "project" },
 //         ];
 //    })
//)(Quiz);