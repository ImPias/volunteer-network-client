import React from 'react';
import eventDetails from '../../fakeData/event';
import ShowEvent from '../ShowEvent/ShowEvent';

const Event = () => {
    
    return (
        <div className="container">
            {
               eventDetails.map(event => <ShowEvent event={event} key={event.id} ></ShowEvent>)
            }
        </div>
    );
};

export default Event;