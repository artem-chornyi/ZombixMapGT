import React, { useState,useEffect } from 'react';
import { CustomCard, Clock } from '..';
import dates from '../dates';
import styles from './styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => styles(theme));



const TitleList = () => {
    const classes = useStyles();
    const [time, setTime] = useState('');
    const [ localStor, setLocalStor ] = useState([]);
    const [filterDate, setFilterDate] = useState([]);

    const local = localStorage.getItem('currentTime');

    useEffect(() => {
        setTimeout(() => {
            const newDates = dates.map(date => {
                const currentTime = local ? Date.now() - (JSON.parse(local) * 3600000) : Date.now();
                const timeUpdate = date.timeUpdate + date.error;
                let timeAdd = date.timeAdd;
                let countUpdate = 0;


                for (; timeAdd < currentTime ; countUpdate++ ) {
                    timeAdd = timeAdd + timeUpdate;
                }

                // const time = currentTime - date.timeAdd;
                // const countUpdate = Math.ceil((time) / date.timeUpdate);

                const finTime = date.timeAdd + (timeUpdate * countUpdate);

                const timeLeft = finTime - currentTime;

                return {
                    ...date,
                    filterTime: timeLeft,
                }
            })
            newDates.sort((date1, date2) => date1.filterTime - date2.filterTime)
            setFilterDate(newDates)
    }, 1000)
    },[filterDate])




    const list = () => {
        return filterDate.map(date => {
            if (date.timeAdd > 0) {
                return (
                    <li className={ classes.li } key={ date.id } >
                        {date.timeAdd > 0 ? <CustomCard date={ date }/> : 'error ' + date.id }
                    </li>
                    )
            } else {
                return (
                    <div>
                        error {date.id}
                        error {date.id}
                        error {date.id}
                        error {date.id}
                        error {date.id}
                    </div>
                )
            }
            
        })
    }

    const onClick = () => {
        console.log(Date.now() );
    }
    const onClick2 = () => {
        console.log(1643653065843 + 60000 + 35000);
    }
    const onClick3 = () => {
        localStorage.setItem('currentTime', JSON.stringify(localStor))
        setLocalStor('')
    }
    const onChange = ({target}) => {
        setTime(target.value * 60000);
    }
    const onChange2 = ({target}) => {
        setLocalStor(target.value)
    }

    


    return (
        <div className={ classes.list }>
            <Clock/>
            {local && <Clock fixTime={ JSON.parse(local) }/> }
            <div>
                <input value={ localStor } onChange={ onChange2 }/>
                <button onClick={ onClick3 }>
                    Добавить разницу во времени
                </button>
            </div>
            <button onClick={ onClick } >
                test
            </button>
            <button onClick={ onClick2 } >
                test 2
            </button>
            <input onChange={ onChange }/>
            {time}
            <ul>
                {list()}
            </ul>
        </div>
    )
}

export default TitleList;