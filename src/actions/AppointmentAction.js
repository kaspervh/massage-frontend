export const GetAppointmentTimesAction = (duration) =>{
	return async dispatch => {
		const appointmentTimes = await fetch('https://massage-backend.herokuapp.com/appointments',{
			method: "GET",
			headers: {"Content-Type": "application/json", "duration": duration.toString()}
		})

		dispatch({
			type: 'GetAppointmentTimesAction',
			payload: await appointmentTimes.json()
		})
	}
}

export const bookAppointment = (appointment) => {
	return async dispatch => {
		const bookAppointment = await fetch('https://massage-backend.herokuapp.com/appointments', {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(appointment)
		})

		dispatch({
			type: 'BookAppointment',
			payload: await bookAppointment.json()
		})
	}
}

export const DeleteAppointment = (id) => {
	return async dispatch => {
		const deleteAppointment = await fetch(`https://massage-backend.herokuapp.com/appointments/${id}`, {
			method: "DELETE",
		})

		dispatch({
			type: 'DeleteAppointments',
			payload: id
		})
	}
}