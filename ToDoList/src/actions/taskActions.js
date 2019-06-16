import * as types  from '../constants';

export const create_task = (data) => {
    return {
        type: types.TODOLIST_CREATE,
        data
    }
}

export const delete_task = (data) => {
    return {
        type: types.TODOLIST_DELETE,
        data
    }
}

export const chack_task = (data) => {
    return {
        type: types.TODOLIST_CHECK,
        data
    }
}

export const get_task_id = (data) => {
    return {
        type: types.TODOLIST_GET_ID,
        data
    }
}