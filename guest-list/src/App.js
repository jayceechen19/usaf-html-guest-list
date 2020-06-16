import React from 'react';
import RSVP from './RSVP'
import NotRSVP from './NotRSVP'
import './App.css';

function App() {
  var guestList = [
    {firstName: "Rachel", lastName: "Green", rsvp: true},
    {firstName: "Ross", lastName: "Geller", rsvp: false},
    {firstName: "Monica", lastName: "Geller", rsvp: true},
    {firstName: "Chandler", lastName: "Bing", rsvp: false},
    {firstName: "Joey", lastName: "Tribbiani", rsvp: false},
    {firstName: "Leslie", lastName: "Knope", rsvp: true},
    {firstName: "April", lastName: "Ludgate", rsvp: true},
    {firstName: "Ann", lastName: "Perkins", rsvp: false},
    {firstName: "Ron", lastName: "Swanson", rsvp: false},
    {firstName: "Tom", lastName: "Haverford", rsvp: true},
    {firstName: "Ben", lastName: "Wyatt", rsvp: false},
    {firstName: "Donna", lastName: "Meagle", rsvp: true},
    {firstName: "Andy", lastName: "Dwyer", rsvp: false},
    {firstName: "Jerry", lastName: "Gergitch", rsvp: true},
    ]
  return (
    <div className="App">
      <header className="App-header">
        <RSVP list = {guestList}/>
        <NotRSVP list = {guestList}/>
        
      </header>
    </div>
  );
}

export default App;
