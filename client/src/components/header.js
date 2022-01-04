
import * as React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

function Header(props) {
    return (
        <Navbar className='header-navbar' bg='light' expand='lg'>
            <Container>
                <Link className='navbar-brand' to='/'>EBook Store</Link>
                {/* <Navbar.Brand href='/'>EBook Store</Navbar.Brand> */}
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='users'>Users</Link>
                        <Link className='nav-link' to='news'>News</Link>

                        <NavDropdown title="Books">
                            <Link className='nav-link' to='books'>Books</Link>
                            <Link className='nav-link' to='books/create'>Create Book</Link>
                        </NavDropdown>

                        {/* <Nav.Link href='#'><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link href='#'><Link to='users'>Users</Link></Nav.Link>
                        <Nav.Link href='#'><Link to='news'>News</Link></Nav.Link>                        
                        <NavDropdown title="Books">
                            <NavDropdown.Item href='#'><Link to='books'>Books</Link></NavDropdown.Item>
                            <NavDropdown.Item href='#'><Link to='books/create'>Create Book</Link></NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;