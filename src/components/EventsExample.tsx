import React, { FC, useState } from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag!')
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }
    return (
        <div>
            <input type='text' value={value} onChange={changeHandler} />
            <button onClick={clickHandler}>Send the information</button>
            <div
                draggable
                onDrag={dragHandler}
                style={{ width: 200, height: 200, background: 'red' }}
            ></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{ width: 200, height: 200, background: isDrag ? 'blue' :'red', marginTop: 15 }}
            ></div>
        </div>
    )
}

export default EventsExample
