export const GetAppointmentTimesAction = (duration) =>{
	console.log(duration)
	return async dispatch => {
		const appointmentTimes = await fetch('http://localhost:3000/appointments',{
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
		const bookAppointment = await fetch('http://localhost:3000/appointments', {
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