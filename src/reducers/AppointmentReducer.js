const AppointmentReducer = (state = [], action) => {
  switch(action.type){
    case 'GetAppointmentTimesAction':
      return state = action.payload
    case 'BookAppointment':
      return state = action.payload
    case 'DeleteAppointment':
      return state
    default:
      return state
  }
}

export default AppointmentReducer;