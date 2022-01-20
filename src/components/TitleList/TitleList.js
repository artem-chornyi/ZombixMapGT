import React, { useState } from 'react';
import { CustomCard, Clock } from '..';
import dates from '../dates';



const TitleList = () => {
    const newDate = new Date();
    const list = () => {
        return dates.map(date => {
            if (date.timeAdd > 0) {
                return (
                <li key={ date.id } >
                    <CustomCard date={ date } />
                </li>
                )
            }
        })
    }

    const onClick = () => {
        console.log(Date.now() );
    }
    const onClick2 = () => {
        console.log(1642718941617 + 180000 + 33000);
    }

    return (
        <div>
            <Clock/>
            <button onClick={ onClick } >
                test
            </button>
            <button onClick={ onClick2 } >
                test 2
            </button>
            <ul>
                {list()}
            </ul>
        </div>
    )
}

export default TitleList;