import React, { useEffect, useState } from "react";
import styles from './styles';
import { makeStyles } from '@material-ui/core/styles';
import { formatDuration } from '../../utils'


const useStyles = makeStyles(theme => styles(theme));

const CustomCard = props => {
    const classes = useStyles();
    const [update, setUpdate] = useState();

    // useEffect(() => {
    //         return setUpdate(formatDuration((finTime - currentTime) /1000))
    // },[])

    useEffect(() => {
        setTimeout(() => {
            return setUpdate(formatDuration(timeLeft /1000))
        }, 1000)
    },[update])


    const { date, fixTime } = props;
    //error
    //time
    //timeAdd


    const currentTime = fixTime ? Date.now() - (fixTime * 3600000) : Date.now();
    const timeUpdate = 1800000 + date.error;
    let timeAdd = date.timeAdd;
    let countUpdate = 0;


    for (; timeAdd < currentTime ; countUpdate++ ) {
        timeAdd = timeAdd + timeUpdate;
    }

    // const time = currentTime - date.timeAdd;
    // const countUpdate = Math.ceil((time) / date.timeUpdate);

    const finTime = date.timeAdd + (timeUpdate * countUpdate);

    const timeLeft = finTime - currentTime;

    const className = () => (
        300000 > timeLeft ? 120000 > timeLeft ? classes.red : classes.yellow : classes.green
    );

    date.filterTime = timeLeft ;


    return (
        <div>
            Номер базы { date.id }
            <br/>
            Время обновления { new Date(finTime).toString().slice(15, 25) }
            <br/>
            <span>
                Осталось до начисления <span className={ className() }> { update } </span>
            </span>
        </div>
    )
}

export default CustomCard;