import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import './VolunteerRegister.css'
import logo from '../../material/logos/logo.png'
import { TextField } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import eventDetails from '../../fakeData/event';

const VolunteerRegister = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString('dd/MM/yyyy'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [description, setDescription] = useState("");
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }
    const {id} = useParams();
    const event = eventDetails.find(event => event.id == id);

    const handleregistration = () => {
        const newReg = {
            name: loggedInUser.name,
            email: loggedInUser.email,
            eventId: event.id,
            eventName: event.name,
            eventPic: event.pic,
            description: description,
            date: selectedDate
        };
        fetch('https://immense-wave-25437.herokuapp.com/newRegistration', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newReg)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <div>
                <center><img src={logo} alt=""/></center>
            </div>
            <div className="register-box">
                <h2 style={{textAlign: 'center'}}>Register as a Volunteer</h2>
                <form noValidate autoComplete="off">
                    <center>
                        <TextField style={{width: '400px'}} id="standard-basic" label="Fullname" value={loggedInUser.name}/><br/><br/>
                        <TextField style={{width: '400px'}} id="standard-basic" label="Email" value={loggedInUser.email}/><br/><br/>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                style={{width: '400px'}}
                                id="date-picker-inline"
                                label="Date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />  
                    </MuiPickersUtilsProvider><br/><br/>
                        <TextField style={{width: '400px'}} id="standard-basic" label="Event-Name" value={event.name}/><br/><br/>
                        <TextField style={{width: '400px'}} onChange={handleDescriptionChange} id="standard-basic" label="Description"/><br/><br/>
                    </center>
                </form>
                <center>
                    <Link to="/registerdEvents"><Button onClick={handleregistration} variant="outline-primary" className="submit-btn">Registration</Button></Link>
                </center>
            </div>
        </div>
    );
};

export default VolunteerRegister;