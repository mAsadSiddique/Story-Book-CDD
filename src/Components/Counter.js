import React, { useState } from 'react'
import Text from './Text'
import Button from './Button'
import './Counter.css'

function Counter({ initialValue = 0 }) {

    let [count, setCount] = useState(initialValue)

    return (
        <div >
            <Text
                value={"Counter App"}
                style={{ fontSize: "24px", fontWeight: "bold"  }}

            />

            <Text
                value={`Counter Value is: ${count}`}
                style={{ fontSize: "24px" }}
            />
            <div className="counter-container">
                <Button
                    value={"Increment"}
                    onClick={() => setCount(count + 1)}
                    className="btn-inc"
                />

                <Button
                    value={"Decrement"}
                    onClick={() => setCount(count - 1)}
                    className="btn-dec"
                />

                <Button
                    value={"Reset"}
                    onClick={() => setCount(0)}
                    className="btn-reset"
                />
            </div>
        </div>
    )
}

export default Counter
