const saveToLocalStorage = (payload) => {
  try {
    
    const localStoragePayload = JSON.stringify(payload);
    sessionStorage.setItem('currentUser', localStoragePayload);
    
  } catch (error) {
    console.log(error);
  }
}

const loadCurrentUser = () => {
  try{
    const localStoragePayload =sessionStorage.getItem('currentUser');
    if(localStoragePayload === null){return []}
    return JSON.parse(localStoragePayload)
  }catch(error){
    console.log(error)
  }
}

const destroyCurrentUser = () => {
  try {
    localStorage.removeItem('currentUser')
  } catch (error) {
    console.log(error)
  }
}


const CurrentUserReducer = (state = loadCurrentUser(), action) => {
  switch(action.type){
    case 'Login':
      console.log(action.payload)
      if(action.payload.status === 200){
        saveToLocalStorage(action.payload)
        return state = action.payload
      }else{
        return state
      }
      
    case 'Logout':
      destroyCurrentUser()
      return state = null
    default:
      return state;
  }
}

export default CurrentUserReducer;