import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [];

function App() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: ""});
    const [allEvents, setAllEvents] = useState(events);
    console.log(allEvents)

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    function deltask(event) {
        setAllEvents((prevState)=>(prevState.filter((item)=>(item!==event.target.value))))
    }

    return (
        <div className="App">
            
            <h1>Todo App</h1>
            <h2>Add New Todo</h2>
            <div>
                <input type="text" placeholder="Add Text" style={{ width: "20%", margin: "1rem" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                
                <DatePicker placeholderText="Start Date" style={{ margin: "0.7rem" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <br/>
                <DatePicker placeholderText="End Date" style={{ margin: "0.7rem" }} selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <br/>
                <button stlye={{ margin: "1rem", padding: "0.3rem", fontSize: "1.3rem", backgroundColor:"#8B5CF6", color:"#fff"}} onClick={handleAddEvent}>
                    Add Todo
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px", borderRadius: "0.4rem" }} />
            
        </div>
    );
}

export default App;
