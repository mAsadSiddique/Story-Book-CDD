import React from 'react';
import Button from '../Components/Button';


export default {
    title: "Button",
    component: Button
}

export const btnLg = () => {
    return (
        <Button
            value={"Button Large"}
            style={{ padding: "15px 100px", backgroundColor: "blue" }}
            // className={className}
            onClick={() => alert("Clicked !")}
        />
    )
}

export const btnMd = () => {
    return (
        <Button
            value={"Button Medium"}
            style={{ padding: "15px 50px", backgroundColor: "darkcyan" }}
            // className={className}
            onClick={() => alert("Clicked !")}
        />
    )
}