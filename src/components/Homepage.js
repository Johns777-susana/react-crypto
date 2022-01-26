import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

const Homepage = ({ users: { coins, isLoading, coinsamount } }) => {
  return (
    <>
      <Container>
        <Row className='home-row'>
          <Col>
            <h5>Number of cypto coin types.</h5>
            <p>{coins.length}</p>
          </Col>
          <Col>
            <h5>Total Number of crypto coins</h5>
            <p>{coinsamount}</p>
          </Col>
        </Row>
        <h2>Crypto Coins</h2>
        <Row className='home-crypto-row'>
          {coins.length === 0 ? (
            <>
              <p>
                You do not have any coins at your wallet. Please buy some first.
              </p>
              <div>
                <Link to='/cryptos'>
                  <Button variant='info'>Buy coins</Button>
                </Link>
              </div>
            </>
          ) : (
            <>
              {coins.map((coin) => {
                const { amount, title, img, id } = coin;
                return (
                  <Col
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '1rem',
                      border: '2px solid #33ae43',
                      borderRadius: '10px',
                    }}
                    className='mb-2 mt-2'
                    key={id}
                  >
                    <div
                      style={{
                        display: 'flex',
                        gap: '4rem',
                        alignItems: 'center',
                      }}
                    >
                      <img
                        src={img}
                        alt={title}
                        style={{ height: '50px', width: '50px' }}
                      />
                      <p className='mb-0'>{amount}</p>
                    </div>
                    <Button variant='success'>Exchange</Button>
                  </Col>
                );
              })}
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, {})(Homepage);
