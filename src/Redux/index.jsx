import { Provider } from "react-redux"
import store from "../app/Store"
import Counter from "./Pembahasan/Counter"

const Redux = () => {
    return (
        <div>
            <Provider store={store}>
                <Counter />
            </Provider>
        </div>
    )
}

export default Redux