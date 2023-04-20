import * as counter from './Constains'

let inisialState = {
    count : 0
}

const counterReducer = (state=inisialState, action) => {
    switch(action.type) {
        case counter.INC :
            return {
                ...state,
                count: state.count + action.value
            }
        case counter.DEC :
            return {
                count: state.count - action.value
            }
            default:
                return state
    }
}

export default counterReducer