import React from 'react'

const Message = ({counter}) => {
    return (
        <div className = {`${counter < 5 ? 'danger' : 'success'}`}>
            <h1>The count is : {counter}</h1>
        </div>
    )
}

export default Message
