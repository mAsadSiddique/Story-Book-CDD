import React from 'react'

function Text({ value, style, className }) {
    return (
        <div>
            <p style={style}
                className={className}>
                {value}
            </p>
        </div>
    )
}

export default Text
