import React, { useState } from 'react';
import { CustomCard, Clock } from '..';
import dates from '../dates';
import styles from './styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => styles(theme));



const TitleList = () => {
    const classes = useStyles();

    const className = () => {
        return classes.red
    };

    const list = () => {
        return dates.map(date => {
            if (date.timeAdd > 0) {
                return (
                <li className={ classes.li } key={ date.id } >
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
        <div className={ classes.list }>
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