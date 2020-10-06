import React from 'react';
import { Link } from 'react-router-dom';

const ShowRegisterdEvents = (props) => {
    const {eventPic, eventName, date, _id} = props.event;
    const handleDelete = id => {
        fetch('https://immense-wave-25437.herokuapp.com/deleteEvent?id='+id, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            alert("Deleted Successfully");
        })
    }
    return (
        <div className="card col-md-6" style={{maxWidth: '540px', margin: '5px'}}>
            <div className="row no-gutters">
                <div className="col-sm-5" style={{background: "#868e96"}}>
                    <img src={require(`../../material/images/${eventPic}`)} className="card-img-top h-100" alt="..."/>
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <h5 className="card-title">{eventName}</h5>
                        <p className="card-text">{date}</p>
                        <Link to="/" onClick={() => handleDelete(_id)} className="btn btn-primary stretched-link">Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowRegisterdEvents;