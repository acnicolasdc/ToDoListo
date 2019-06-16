import * as types  from '../constants';
const initialState = {
    data:[],
    taskid:{},
};
export default taskReducer = (state = initialState, action) => {
    switch(action.type){
        case types.TODOLIST_CREATE:
            return{
                ...state,
                data:action.data
            }
        case types.TODOLIST_DELETE:
                return{
                    ...state,
                    data:action.data
                }
        case types.TODOLIST_CHECK:
            return{
                ...state,
                data:action.data
            }
        case types.TODOLIST_GET_ID:
            return{
                ...state,
                taskid:action.data
            }
        default:
            return state
    }
}