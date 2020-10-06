import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Logo from '../../material/logos/logo.png'
import {Link} from 'react-router-dom'
import './Header.css'
import { Avatar } from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from '../../App';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleLogout = () => {
        setLoggedInUser({});
    }
    return (
        <div className="container">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Link to="/"><Navbar.Brand><img src={Logo} alt="logo" width="270" height="80" /></Navbar.Brand></Link>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/donation">Donation</Link>
                        <Link className="nav-link" to="/blog">Blog</Link>
                        <Link className="nav-link" to="/registerdEvents">Events</Link>
                        {(loggedInUser.email || loggedInUser.name) && <span className="d-flex"><strong style={{margin: '7px 10px'}}>{loggedInUser.name}</strong><Avatar alt={loggedInUser.name} src={loggedInUser.photo} /></span>}
                        {(loggedInUser.email || loggedInUser.name) && <Button onClick={handleLogout} className="btn-login" style={{margin: '0px 10px'}}>Logout</Button>}
                        {!loggedInUser.name && <Link to="/login"><Button variant="primary" style={{marginRight:15}}>Login</Button></Link>}
                        <Link to="/admin"><Button variant="dark">Admin</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;