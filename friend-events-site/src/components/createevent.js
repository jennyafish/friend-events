import React, { useState } from 'react';

function CreateEvent() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');

    function handleSubmit(event) {
        console.log(name);
        console.log(date);
        console.log(location);

        fetch("/event", {
        method: 'POST',
        body: JSON.stringify({eventName: name, startName: date, endTime: location})
        })
        
        event.preventDefault();
    }

    return(
        <form className="form-layout" onSubmit={handleSubmit}>
            <fieldset>
            <legend>Create an event</legend>
            <p>
              <label>Name of event</label>
              <input type = "text"
                     value = {name}
                     onChange = {(event) => setName(event.target.value)} />
            </p>
            <p>
              <label>Date of event</label>
              <input type = "text"
                     value = {date}
                     onChange = {(event) => setDate(event.target.value)} />
            </p>
            <p>
              <label>Location of event</label>
              <input type = "text"
                     value = {location}
                     onChange = {(event) => setLocation(event.target.value)} />
            </p>
            </fieldset>
            <button>
                Submit
            </button>
        </form>
    )
}

export default CreateEvent;