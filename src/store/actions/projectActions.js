export const createProject = (project) => {
   return (dispatch, getState, {getFirebase, getFirestore}) => {
      //make async call to database

      const firestore = getFirestore();

      firestore.collection('projects').add({
         ...project, // ovim dobijamo sva polja iz project (dekompozicija)
         authorFirstName: 'hjh',
         authorLastName: 'gfhdhf',
         authorId: 1234,
         createdAt :new Date()
      }).then(() => { 
         dispatch({type: 'CREATE_PROJECT', project });//project: project isto ime pa ne mora 2x         
      }).catch((err) => { 
         dispatch({type: 'CREATE_PROJECT_ERROR', err });
      })
   }
};
