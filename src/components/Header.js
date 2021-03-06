import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CryptoIcon from '../assests/coin.png';

const Header = () => {
  return (
    <>
      <Navbar bg='light' expand='lg' className='navbar'>
        <Container>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Navbar.Brand
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <img src={CryptoIcon} alt='' />{' '}
              <h5 className='mb-0'>Crypto Manager</h5>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav
              className='me-auto navbar-links '
              style={{ display: 'flex', gap: '0.5rem', fontSize: '1rem' }}
            >
              <Link to='/' className='router-link'>
                Homepage
              </Link>
              <Link to='/cryptos' className='router-link'>
                Cryptos
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
