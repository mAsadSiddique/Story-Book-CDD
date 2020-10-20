import React, { Component } from 'react'
import Counter from '../Components/Counter'
// import Counter from '../Components/Counter.css'

export default {
    title: "Counter",
    component: Counter
}

export const defaultCounter = () => {
    return (
        <Counter

        />
    )
}

export const CounterStartWith10 = () => {
    return (
        <Counter
            initialValue={10}
        />
    )
}