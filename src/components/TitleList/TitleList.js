import React, { useState } from 'react';
import { CustomCard, Clock } from '..';
import dates from '../dates';
import styles from './styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => styles(theme));



const TitleList = () => {
    const classes = useStyles();
    const [time, setTime] = useState(0);

    const list = () => {
        return dates.map(date => {
            return (
            <li className={ classes.li } key={ date.id } >
                {date.timeAdd > 0 ? <CustomCard date={ date } /> : 'error ' + date.id }
            </li>
            )
        })
    }

    const onClick = () => {
        console.log(Date.now() );
    }
    const onClick2 = () => {
        console.log(1643392960388 + 300000 + 50000);
    }
    const onChange = ({target}) => {
        setTime(target.value * 60000);
    }


    return (
        <div className={ classes.list }>
            <Clock/>
            <button onClick={ onClick } >
                test
            </button>
            <button onClick={ onClick2 } >
                test 2
            </button>
            <input onChange={ onChange }type=""/>
            {time}
            <ul>
                {list()}
            </ul>
        </div>
    )
}

export default TitleList;