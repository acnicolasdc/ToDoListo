import * as types  from '../constants';

export const open_modal = () => {
    return {
        type: types.OPEN_MODAL,
    }
}

export const close_modal = () => {
    return {
        type: types.CLOSE_MODAL,
    }
}

export const open_modal_op = () => {
    return {
        type: types.OPEN_MODAL_OPTION,
    }
}

export const close_modal_op = () => {
    return {
        type: types.CLOSE_MODAL_OPTION,
    }
}


export const open_modal_close = () => {
    return {
        type: types.OPEN_MODAL_SESION,
    }
}

export const close_modal_close = () => {
    return {
        type: types.CLOSE_MODAL_SESION,
    }
}