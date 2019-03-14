const initState = {
   authError : null
}

const authReducer = (state= initState, actions) => {
   switch(actions.type){
      case 'LOGIN_ERROR':
      console.log('Login errroorrr')
         return {
            ...state,
            authError: 'Login failed'
      }
      case 'LOGIN_SUCCESS':
         console.log('Login success')
         return{
            ...state,
            authError: null
         }
      default:
         return state;
   }
}

export default authReducer