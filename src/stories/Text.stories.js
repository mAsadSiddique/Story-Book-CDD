import React from 'react';
import Text from '../Components/Text';

export default {
    title: "Text",
    component: Text
}

export const TextLg = () => {
    return (
        <Text
            value={"Text Large"}
            style={{ fontSize: "32px" }}
        // className={className}
        />
    )
}

export const TextMd = () => {
    return (
        <Text
            value={"Text Medium"}
            style={{ fontSize: "20px" }}
        // className={className}
        />
    )
}