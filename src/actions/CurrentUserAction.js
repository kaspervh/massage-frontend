export const LoginUser = (email, password) =>{
  console.log('called')
  return async dispatch => {
    const currentUser = await fetch('http://localhost:3000/login', {
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