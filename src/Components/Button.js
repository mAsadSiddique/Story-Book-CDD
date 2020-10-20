import React from 'react'

function Button({ value, style, className, onClick }) {
    return (
        <div>
            <button
                style={style}
                className={className}
                onClick={onClick}
            >
                {value}
            </button>
        </div>
    )
}

export default Button
