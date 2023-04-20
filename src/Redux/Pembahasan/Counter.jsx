import { useSelector } from "react-redux/es/exports"
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { decrementWithCheckingActions, increment } from "../../app/features/Counter/Actions";

const Counter = () => {
    let {count} = useSelector(state => state.counter)
    const dispatch = useDispatch();
    
    return (
        <div>
            <button onClick={() => dispatch(decrementWithCheckingActions(1))}>-</button>
            {' '} <span>{count}</span> {' '}
            <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
    )
}

export default Counter