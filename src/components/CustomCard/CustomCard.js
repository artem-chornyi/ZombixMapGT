import React, { useEffect, useState } from "react";
import styles from './styles';
import { makeStyles } from '@material-ui/core/styles';
import { formatDuration } from '../../utils'


const useStyles = makeStyles(theme => styles(theme));

const CustomCard = ({date}) => {
    const classes = useStyles();
    const [update, setUpdate] = useState();
    const { filterTime, } = date;

    const className = () => (
        300000 > filterTime ? 120000 > filterTime ? classes.red : classes.yellow : classes.green
    );



    return (
        <div>
            Номер базы { date.id }
            <br/>
            <span>
                Осталось до начисления <span className={ className() }> { formatDuration(filterTime /1000) } </span>
            </span>
        </div>
    )
}

export default CustomCard;