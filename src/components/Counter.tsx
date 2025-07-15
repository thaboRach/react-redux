import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../state/store'
import { decrement, incrementAsync } from '../state/counter/counterSlice';

export default function Counter() {
    // "selects"/ retrieves a value from state
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>();

    return (
        <section>
            <h2>{count}</h2>
            <div>
                <button type='button' onClick={() => dispatch(incrementAsync(10))}>
                    Increment
                </button>
                <button type='button' onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
        </section>
    )
}
