import React, {Component} from 'react';
import Notifications from './Notifications.js';
import ProjectList from '../projects/ProjectList.js';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends React.Component {

    render(){

        const { projects } = this.props;

        return(
            <div className="dashboard container">

                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projectsToDisplay = {projects}/>
                    </div>

                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapProjectStateToProps = (state) => {
    console.log(state);
    return{
        // projects: state.project.projectsWritten
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapProjectStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard)