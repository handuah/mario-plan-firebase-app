import React, { Component } from 'react'
import { connect } from 'react-redux' // importing connect
import { createProject } from '../../stores/actions/projectActions' //import createProject from projectActions 

export class CreateProject extends Component {

    state = {
        title: '', 
        content: ''
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.id] : [event.target.value]
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state); //passing createdProject to the state.
    }

    render() {
        return (
            <div className="container">

                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

//functtion to map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

//wrapping connect around createProject but state is the first argument so must be null
export default connect(null, mapDispatchToProps)(CreateProject) 
