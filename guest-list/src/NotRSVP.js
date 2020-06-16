import React from 'react'

var count = 0;
var NotRSVP = [];
function NotRSVP(list){
    for(var i = 0; i < list.length; i++){
        if(list[i].rsvp){
            count ++;
            NotRSVP.push(list[i])          
        }
    }
    return(
        <ul>
            {people.map(item => <li>Student ID: {item.id}, Name: {item.name} , Class: {item.class} , Role: {item.role}</li>)}
        </ul>
    )
}

export default NotRSVP