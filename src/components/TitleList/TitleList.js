import React, { useState } from 'react';
import { CustomCard, Clock } from '..';
import dates from '../dates';
import styles from './styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => styles(theme));



const TitleList = () => {
    const classes = useStyles();
    const [time, setTime] = useState('');
    const [ localStor, setLocalStor ] = useState([]);

    const local = localStorage.getItem('currentTime');
    

    const list = () => {
        return dates.map(date => {
            // if (date.id === 5) {
                return (
                    <li className={ classes.li } key={ date.id } >
                        {date.timeAdd > 0 ? <CustomCard date={ date } fixTime={ JSON.parse(local) || null } /> : 'error ' + date.id }
                    </li>
                    )
            // }
            
        })
    }

    const onClick = () => {
        console.log(Date.now() );
    }
    const onClick2 = () => {
        console.log(1643392960388 + 300000 + 50000);
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