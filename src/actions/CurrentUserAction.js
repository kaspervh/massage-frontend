//const url = "http://localhost:3000"; // https://massage-backend.herokuapp.com

export const LoginUser = (email, password) =>{
  return async dispatch => {
    const currentUser = await fetch("https://massage-backend.herokuapp.com" + '/login', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"email":  email, "password": password})
    })

    dispatch({
      type: 'Login',
      payload: await currentUser.json()
    })
  }
}