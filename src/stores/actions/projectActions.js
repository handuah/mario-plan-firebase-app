import { todosRef } from '../../config/firebaseConfig' //importing firestore instance

export const createProject = (project) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call
        // const firestoreData = getFirestore;

        //adding data to our firestore database using a promise
        todosRef.collection('projects').add({
            ...project,
            authorFirstName: "Hannah",
            authorLastName: "Duah",
            authorId: "123",
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project : project});
        }).catch((error) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', error});
        })

        // todosRef.collection('projects');
        
    }
}