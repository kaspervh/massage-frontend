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
    default:
      return state
  }  
} 

export default WorkDayReducer;