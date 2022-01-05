
import * as React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import QLink from './qlink';

function Header(props) {
    return (
        <React.Fragment>
            <Navbar className='header-navbar' bg='light' expand='lg'>
                <Container>
                    <QLink className='navbar-brand' to='/'>EBook Store</QLink>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <QLink className='nav-link' to='home'>Home</QLink>
                            <QLink className='nav-link' to='users'>Users</QLink>
                            <QLink className='nav-link' to='news'>News</QLink>

                            <NavDropdown title="Books">
                                <QLink className='nav-link' to='books'>Books</QLink>
                                <QLink className='nav-link' to='books/create'>Create Book</QLink>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className='main'>
                <Outlet/>
            </Container>
        </React.Fragment>
    );
}

export default Header;