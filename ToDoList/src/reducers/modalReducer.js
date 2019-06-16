import * as types  from '../constants';
const initialState = {
    modalOn:false,
    modalOnOp:false,
    closeSession:false,
};
export default modalReducer = (state = initialState, action) => {
    switch(action.type){
        case types.OPEN_MODAL:
            return{
                ...state,
                modalOn:true,
            }
        case types.CLOSE_MODAL:
                return{
                    ...state,
                    modalOn:false,
                }
        case types.OPEN_MODAL_OPTION:
            return{
                ...state,
                modalOnOp:true,
            }
        case types.CLOSE_MODAL_OPTION:
                return{
                    ...state,
                    modalOnOp:false,
                }
        

                ///
        case types.CLOSE_MODAL_SESION:
                return{
                    ...state,
                    closeSession:false,
                }
        case types.OPEN_MODAL_SESION:
                return{
                    ...state,
                    closeSession:true,
                }
        default:
            return state
    }
}