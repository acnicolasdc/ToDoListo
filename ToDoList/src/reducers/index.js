import { combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import modalReducer from './modalReducer';
import taskReducer from './taskReducer';
import loginReducer from './loginReducer';
// import modalReducer from './modalReducer';
const appReducers =  combineReducers({
    login:loginReducer, //p
    task:taskReducer,
    modalHandle:modalReducer,
});

export default rootReducer = (state, action) => {
    if (action.type === 'FETCHING_LOGOUT') {
        Object.keys(state).forEach(key => {
            if(key != 'params'){
            storage.removeItem(`persist:${key}`);
           // state.addressSelect = undefined;
            }else{
                //alert('params')
            }
        });
    }
    return appReducers(state, action);
};