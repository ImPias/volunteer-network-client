import React from 'react';
import Card from 'react-bootstrap/Card'
import './ShowEvent.css'
import { Link } from 'react-router-dom';
const ShowEvent = (props) => {    
    const {name, pic, id} = props.event;
    return (
        <div className="list">
            <Card style={{width: '15rem', height: '22rem', borderRadius: '8px'}}>
                <Card.Img variant="top" src={require(`../../material/images/${pic}`)} />
                <Card.Body>
                    <Link to={"/volunteer-register/"+id}><Card.Title>{name}</Card.Title></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowEvent;