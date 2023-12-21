import React from 'react'

export default function PopUp({ children, setEdit }) {

    const handleClick = (e) => {
        if (e.target.classList.contains('layer')) {
            setEdit(false)
        }
    }

    return (
        <div className='layer h-screen w-screen bg-black bg-opacity-60 flex absolute top-0 items-center justify-center' onClick={handleClick}>
            {children}
        </div>
    )
}
