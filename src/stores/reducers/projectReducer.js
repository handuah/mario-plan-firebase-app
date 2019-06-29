const initState = {
    projectsWritten: [
        {id: '1' , title: 'Hannah loves music', content: 'You have absolutely no idea'},
        {id: '2' , title: 'Hannah chases dreams', content: 'You have absolutely no idea'},
        {id: '3' , title: 'Working my but off here', content: 'You have absolutely no idea'}
    ]
}

const projectReducer = (state = initState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT':
           console.log('created project', action.project)
    }

    return state
}

export default projectReducer