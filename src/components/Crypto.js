import React, { useState } from 'react';
import data from '../data';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Popup from './Popup';

const Crypto = () => {
  const [cryptoCoins, setCryptoCoins] = useState(data);
  const [showBuy, setShowBuy] = useState(false);
  const [coinId, setCoinId] = useState();
  const [coinTitle, setCoinTitle] = useState();
  const [coinImg, setCoinImg] = useState();

  const handleBuy = (id, title, img) => {
    setShowBuy(true);
    setCoinId(id);
    setCoinTitle(title);
    setCoinImg(img);
  };
  return (
    <>
      <Container>
        {cryptoCoins.map((coin) => {
          const { id, img, title } = coin;
          return (
            <Row key={id}>
              <Col
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  border: '2px solid #33ae43',
                  borderRadius: '10px',
                  paddingTop: '1rem',
                  paddingBottom: '1rem',
                  paddingLeft: '2rem',
                  paddingRight: '2rem',
                }}
                className='mb-3 mt-3'
              >
                <div>
                  <img
                    src={img}
                    alt=''
                    style={{ height: '50px', width: '50px' }}
                  />
                  <p className='mb-0 mt-0'>{title}</p>
                </div>
                <Button
                  variant='outline-success'
                  onClick={() => handleBuy(id, title, img)}
                >
                  Buy
                </Button>
              </Col>
            </Row>
          );
        })}
        {showBuy && (
          <Popup
            showBuy={showBuy}
            setShowBuy={setShowBuy}
            coinId={coinId}
            coinTitle={coinTitle}
            coinImg={coinImg}
          />
        )}
      </Container>
    </>
  );
};

export default Crypto;
