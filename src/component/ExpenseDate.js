import React from 'react'
import './ExpenseDate.css'


function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US',{month: 'long'});
    const day= props.date.toLocaleString("en-US",{ day: 'numeric'});
    const year = props.date.getFullYear({year: 'numeric'});


    return(<>
    <div className="expense-date">
    <div>{month} </div>
    <div>{year}</div>
    <div>{day}</div>
    </div>
    </>
    );
}

export default ExpenseDate;  