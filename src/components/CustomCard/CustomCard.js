import React, { useEffect, useState } from "react";
import styles from './styles';
import { makeStyles } from '@material-ui/core/styles';
import { formatDuration } from '../../utils'


const useStyles = makeStyles(theme => styles(theme));

const CustomCard = ({date}) => {
    const classes = useStyles();
    const [update, setUpdate] = useState();
    const { filterTime, } = date;
    // // useEffect(() => {
    // //         return setUpdate(formatDuration((finTime - currentTime) /1000))
    // // },[])

    // useEffect(() => {
    //     setTimeout(() => {
    //         return setUpdate(formatDuration(filterTime /1000))
    //     }, 1000)
    // },[update])


    
    // //error
    // //time
    // //timeAdd


    // const currentTime = fixTime ? Date.now() - (fixTime * 3600000) : Date.now();
    // const timeUpdate = date.timeUpdate + date.error;
    // let timeAdd = date.timeAdd;
    // let countUpdate = 0;


    // for (; timeAdd < currentTime ; countUpdate++ ) {
    //     timeAdd = timeAdd + timeUpdate;
    // }

    // // const time = currentTime - date.timeAdd;
    // // const countUpdate = Math.ceil((time) / date.timeUpdate);

    // const finTime = date.timeAdd + (timeUpdate * countUpdate);

    // const timeLeft = finTime - currentTime;

    const className = () => (
        300000 > filterTime ? 120000 > filterTime ? classes.red : classes.yellow : classes.green
    );



    return (
        <div>
            Номер базы { date.id }
            <br/>
            {/* Время обновления { new Date(filterTime).toString().slice(15, 25) } */}
            <br/>
            <span>
                Осталось до начисления <span className={ className() }> { formatDuration(filterTime /1000) } </span>
            </span>
        </div>
    )
}

export default CustomCard;