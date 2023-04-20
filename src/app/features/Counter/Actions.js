import * as counter from './Constains'

export const decrement = (value)=>{
    return{
        type : counter.DEC,
        value: value
    }
}

export const increment = (value)=>{
    return{
        type : counter.INC,
        value: value
    }
}

export const decrementWithCheckingActions = (value) => {
    return (dispatch, getState) => {
        if(getState().counter.count > 0){
            dispatch(decrement(value));
        }
    }
}