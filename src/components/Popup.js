import React, { useState } from 'react';
import { Modal, Row, Button, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import { addCoins } from '../actions/users';
import { getTotal } from '../actions/users';

const Popup = ({
  showBuy,
  setShowBuy,
  coinId,
  coinTitle,
  coinImg,
  addCoins,
  getTotal,
  history,
}) => {
  const [amount, setAmount] = useState();

  const onChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <Modal show={showBuy} onHide={() => setShowBuy(false)} centered>
        <Row style={{ textAlign: 'center', padding: '1rem' }}>
          <h2>Buy {coinTitle}</h2>
        </Row>
        <Row
          style={{
            padding: '1rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
          }}
        >
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control
              type='number'
              placeholder='Enter amount'
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
        </Row>
        <Modal.Footer>
          <Button variant='outline-danger' onClick={() => setShowBuy(false)}>
            Cancel
          </Button>
          <Button
            variant='primary'
            onClick={() => {
              addCoins(amount, coinId, coinTitle, coinImg, history);
              setShowBuy(false);
              getTotal(amount);
            }}
          >
            Buy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default connect(null, { addCoins, getTotal })(withRouter(Popup));
