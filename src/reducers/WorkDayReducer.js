const WorkDayReducer = (state = [], action) => {
  switch(action.type){
    case 'GetWorkDays':
      state = action.payload;
    case 'GetWorkDay':
      state = action.payload;
    case 'NewWorkDay':
      state = action.payload;
    case 'UpdateWorkDay':
      state = action.payload;
    case 'DeleteWorkday':
      return state;
    default:
      return state
  }  
} 

export default WorkDayReducer;