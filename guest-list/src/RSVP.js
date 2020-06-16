import React from 'react'
function RSVP (props){
    
    var guestList = props.list
    return (
        <div class = "RSVPd">
            <h1>RSVP Guests</h1>
            <p>{guestList.map(guest => guest.RSVP == true)}</p>
        </div>
    )

}
export default RSVP