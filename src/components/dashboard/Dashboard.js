import React, {Component} from 'react';
import Notifications from './Notifications.js';
import ProjectList from '../projects/ProjectList.js';
import { connect } from 'react-redux';

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
    return{
        projects: state.project.projectsWritten
    }
}

export default connect(mapProjectStateToProps)(Dashboard)