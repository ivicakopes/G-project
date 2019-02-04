const initState = {
   projects:[
      {id: '1', title: 'nesto malo', content: 'dfgjoerglnejćegće' },
      {id: '2', title: 'nesto malo vise', content: 'dfgjoerglnejćegće' },
      {id: '3', title: 'nesto malo jos vise', content: 'dfgjoerglnejćegće' },
   ]
}

const projectReducer = (state = initState, action) => {
   switch (action.type) {
      case 'CREATE_PROJECT':
         console.log('created project', action.project);
         return state;         
      case 'CREATE_PROJECT_ERROR':
         console.log('created project', action.err);
         return state;
      default:
         console.log('default case');
         return state;
   }  
}

export default projectReducer;