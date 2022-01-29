import React, { useState, useEffect } from 'react';

const Clock = ({fixTime}) => {
    const [time, setTime] = useState(null);
    const timeInUkrainian = Date.now() - (fixTime * 3600000)

    useEffect(() => {
        setTimeout(() => setTime(new Date().toLocaleTimeString()), 1000)
    },[time])

    return (
    <p>
        {fixTime ? 'Время в Украине:' : 'Текущее время:'}
        {' '}
        {fixTime ? new Date(timeInUkrainian).toLocaleTimeString() : time}
    </p>
    );
}

export default Clock;