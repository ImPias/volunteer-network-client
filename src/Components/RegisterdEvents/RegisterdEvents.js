import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import ShowRegisterdEvents from '../ShowRegisterdEvents/ShowRegisterdEvents';

const RegisterdEvents = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/registerdEvents?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setEvents(data))
    }, []);
    return (
        <div className="container" style={{marginTop: '10px'}}>
            <div className="row" style={{marginLeft: '0px'}}>
                {
                    events.map(event => <ShowRegisterdEvents event={event} key={event._id}></ShowRegisterdEvents>)
                }
            </div>
        </div>
    );
};

export default RegisterdEvents;