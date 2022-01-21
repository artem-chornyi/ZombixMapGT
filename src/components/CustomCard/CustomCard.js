import React, { useEffect, useState } from "react";
import styles from './styles';
import { makeStyles } from '@material-ui/core/styles';

function formatDuration (s) {
    if(s===0)return 'now'
    // Complete this functionfunction seconds(s){
  let years=getResult((s/60/60/24/365),365)
  let days=getResult((s/60/60/24),365)
  let hours=getResult((s/60/60),24)
  let minutes=getResult((s/60),60)
  let seconds=getResult(s,60)
  let result=[[years,years>1?'years':'year'],
  [days,days>1?'days':'day'],
  [hours,hours>1?'hours':'hour'],
  [minutes,minutes>1?'minutes':'minute'],
  [seconds,seconds>1?'seconds':'second']]
  function getResult(t,d){
  return Math.floor(t%d)}
  result=result.filter((a)=>a[0]!==0)
  
  
  result=result.map((a)=>a.join(' '))
  if(result.length>1){
  result[result.length-2]=result[result.length-2]+' and '+result[result.length-1]
  result.pop()}
  return result.join(', ').trim()}

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


    const { date } = props;
    //error
    //time
    //timeAdd


    const currentTime = Date.now();
    const time = currentTime - date.timeAdd
    const countUpdate = Math.ceil((time) / date.timeUpdate);
    const timeUpdate = 1800000 + date.error;
    // console.log(allSec, 'allSec');
    // console.log(time/countUpdate, 'time/countUpdate');
    const finTime = date.timeAdd + (timeUpdate * countUpdate);

    // for(let i = 0; true; i++ ) {

    //     if( currentTime > a ) {
    //         a += 1800000 + 3000
    //         console.log(a);
    //     } else {
    //         console.log('test');
    //         break;
    //     }
    // }
    const timeLeft = finTime - currentTime;

    const className = () => (
        300000 > (timeLeft) ? classes.red : classes.green
    );

    date.filterTime = timeLeft ;


    return (
        <div>
            Номер базы { date.id }
            <br/>
            Время обновления { new Date(finTime).toString().slice(15, 25) }
            <br/>
            <span>
                Осталось до начисления <span className={ className() }>{ update }</span>
            </span>
        </div>
    )
}

export default CustomCard;