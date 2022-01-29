import React, { useState, useEffect } from 'react';

const Clock = ({fixTime}) => {
    const [time, setTime] = useState(null);
    const timeInUkrainian = Date.now() - (fixTime * 3600000)

    useEffect(() => {
        setInterval(() => setTime(new Date().toLocaleTimeString()))
    },[])

    return (
    <p>
        {fixTime ? 'Time in Ukrainian:' : 'Current time:'}
        {' '}
        {fixTime ? new Date(timeInUkrainian).toLocaleTimeString() : time}
    </p>
    );
}

export default Clock;