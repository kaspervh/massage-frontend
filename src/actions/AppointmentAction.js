export const GetAppointmentTimes = (duration) =>{
	return async dispatch => {
		const appontmentTimes = await fetch('http://localhost:3000/appointments',{
			method: 'GET',
			headers: {'Content-Type': 'application/json', "duration": duration}
		})

		dispatch({
			type: 'GetAppointmentTimes',
			payload: await appontmentTimes,
		})
	}
} 