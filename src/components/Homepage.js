import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Alert from './Alert';

// redux
import { connect } from 'react-redux';
import { buyMoreCoins } from '../actions/users';
import { exchangeCoins } from '../actions/users';
import { updateZeroCoins } from '../actions/users';

const Homepage = ({
  users: { coins, isLoading, coinsamount },
  buyMoreCoins,
  exchangeCoins,
  updateZeroCoins,
}) => {
  const [showBuy, setShowBuy] = useState(false);
  const [showExc, setShowExc] = useState(false);

  const [buyExcData, setBuyExcData] = useState({
    buyExcId: '',
    buyExcAmt: '',
    buyExcTitle: '',
  });
  const { buyExcId, buyExcAmt, buyExcTitle } = buyExcData;
  const exchangeTitle = [
    { id: 0, title: 'Please select coin' },
    { id: 1, title: 'Bitcoin' },
    { id: 2, title: 'Etherum' },
    { id: 3, title: 'DodgeCoin' },
    { id: 4, title: 'Binance Coin' },
    { id: 5, title: 'Tether' },
    { id: 6, title: 'Solana' },
    { id: 7, title: 'Cardano' },
    { id: 8, title: 'Avalanche' },
    { id: 9, title: 'Shiba Inu' },
    { id: 10, title: 'Crypto.com' },
  ];

  const onChange = (e) => {
    setBuyExcData({ ...buyExcData, buyExcAmt: e.target.value });
  };

  const onSelect = (e) => {
    setBuyExcData({ ...buyExcData, buyExcTitle: e.target.value });
  };

  return (
    <>
      <Alert />
      <Container className='pt-3 pb-3'>
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
                      <p className='mb-0'>{amount > 0 && amount}</p>
                    </div>
                    {amount > 0 ? (
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <Button
                          variant='success'
                          onClick={() => {
                            setShowBuy(true);
                            setBuyExcData({ ...buyExcData, buyExcId: id });
                          }}
                        >
                          Buy More
                        </Button>
                        <Button
                          variant='info'
                          onClick={() => {
                            setShowExc(true);
                            setBuyExcData({ ...buyExcData, buyExcId: id });
                          }}
                        >
                          Exchange
                        </Button>
                      </div>
                    ) : (
                      <div
                        style={{
                          textAlign: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                        }}
                      >
                        <p className='mb-0'>
                          No remaning coins. Click to update your coin list.
                        </p>
                        <Button onClick={() => updateZeroCoins(id)}>
                          Update
                        </Button>
                      </div>
                    )}
                    {showBuy && (
                      <Modal
                        show={showBuy}
                        onHide={() => setShowBuy(false)}
                        centered
                      >
                        <Row className='pt-4 pb-4 px-4'>
                          <Form.Group
                            className='mb-3'
                            controlId='formBasicEmail'
                          >
                            <Form.Control
                              type='number'
                              placeholder='Enter amount'
                              onChange={(e) => onChange(e)}
                            />
                          </Form.Group>
                        </Row>
                        <Modal.Footer>
                          <Button
                            variant='outline-danger'
                            onClick={() => setShowBuy(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            variant='primary'
                            onClick={() => {
                              setShowBuy(false);
                              buyMoreCoins(buyExcAmt, buyExcId);
                            }}
                          >
                            Buy
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    )}
                    {showExc && (
                      <Modal
                        show={showExc}
                        onHide={() => setShowExc(false)}
                        centered
                      >
                        <h4
                          style={{ textAlign: 'center' }}
                          className='py-3 mb-0'
                        >
                          Exchange {title} with{' '}
                        </h4>
                        <Row
                          className='pt-4 pb-4 px-4'
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                          }}
                        >
                          <Form.Select
                            aria-label='Default select example'
                            onChange={(e) => onSelect(e)}
                          >
                            {exchangeTitle.map((x) => (
                              <option key={x.id} value={x.title}>
                                {x.title}
                              </option>
                            ))}
                          </Form.Select>
                          <Form.Group
                            className='mb-3'
                            controlId='formBasicEmail'
                          >
                            <Form.Control
                              type='number'
                              placeholder='Enter amount'
                              onChange={(e) => onChange(e)}
                              required
                            />
                          </Form.Group>
                        </Row>
                        <Modal.Footer>
                          <Button
                            variant='outline-danger'
                            onClick={() => setShowExc(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            variant='primary'
                            onClick={() => {
                              exchangeCoins(buyExcAmt, buyExcId, buyExcTitle);
                              setShowExc(false);
                            }}
                          >
                            Exchange
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    )}
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

export default connect(mapStateToProps, {
  buyMoreCoins,
  exchangeCoins,
  updateZeroCoins,
})(Homepage);
