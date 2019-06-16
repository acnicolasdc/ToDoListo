import * as types  from '../constants';
const initialState = {
    data:[],
    loginOn:false,
};
export default loginReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LOGIN_SUCCESS:
            return{
                ...state,
                data:action.data,
                loginOn:true
            }
        default:
            return state
    }
}