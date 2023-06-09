import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    incrementByAmount,
    multiplyByAmount,
} from "./counterSlice";

export function Counter() {
    const count = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();

    const [incerementAmount, setIncrementAmount] = React.useState(2);

    return (
        <div>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <input
                    type="number"
                    defaultValue={incerementAmount}
                    onChange={(e) => setIncrementAmount(Number(e.target.value))}
                />
                <button
                    onClick={() =>
                        dispatch(incrementByAmount(incerementAmount))
                    }
                >
                    Increment by Amount
                </button>
                <button
                    onClick={() => dispatch(multiplyByAmount(incerementAmount))}
                >
                    Multiply By Amount by Amount
                </button>
            </div>
        </div>
    );
}
