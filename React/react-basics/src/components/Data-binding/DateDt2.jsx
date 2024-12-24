import moment from "moment";
import {useState} from 'react';
export function DateDt2(){
    const [mfd]=useState(new Date());
    return(
        <div>
            <h2>{moment(mfd).format(' DD dddd MMMM YYYY')}</h2>
        </div>
    )
}