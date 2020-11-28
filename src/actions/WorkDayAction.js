export const GetWorkDays = (userId) => {
  return async dispatch => {
    const workDays = await fetch(`https://massage-backend.herokuapp.comwork_days/?userId=${userId}`, {
      method: "GET",
      headers: {'Content-Type': 'application/json'},
    })

    dispatch({
      type: 'GetWorkDays',
      payload: await workDays.json()
    })
  }
}

export const GetWorkDay = (workDayId) => {
  console.log(workDayId)
  return async dispatch =>{
    const workDay = await fetch(`https://massage-backend.herokuapp.com/work_days/${workDayId}`,{
      method: 'GET',
      headers: {"content-Type": "Application/json"}
    })

    dispatch({
      type: 'GetWorkDay',
      payload: await workDay.json()
    })
  }
}

export const NewWorkDayAction = (userId, startTime, endTime) => {
  return async dispatch => {
    const WorkDay = await fetch('https://massage-backend.herokuapp.com/work_days', {
      method: 'POST',
      headers: {"Content-Type": "Application/json"},
      body: JSON.stringify({userId, startTime, endTime})
    })

    dispatch({
      type: 'NewWorkDay',
      payload: await WorkDay.json()
    })
  }
}

export const UpdateWorkDayAction = (id, start_time, end_time) => {
  return async dispatch => {
    const WorkDay = await fetch('https://massage-backend.herokuapp.com/work_day',{
      method: 'PATCH',
      headers: {"Content-Type": "Application/json"},
      body: JSON.stringify({id, start_time, end_time})
    })

    dispatch({
      type: 'UpdateWorkDay',
      payload: await WorkDay.json()
    })
  }
}