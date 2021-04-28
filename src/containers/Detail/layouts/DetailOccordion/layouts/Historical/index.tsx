/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/indent */
/**
 *
 * Historical
 *
 */
import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Button from '@Components/Button';
import CustomLineChart from '@Components/LineChart';

// styles
import styles from './styles/Historical.module.scss';

// components
export const Historical = () => {
  const [active, setActive] = useState('buy');

  return (
    <section className={styles.historical}>
      <Container fluid="lg" className="p-lg-0">
        <Row>
          <Col lg="8" md="12">
            <div className={styles.tree}>
              <CustomLineChart responsiveSize={[280, 500, 650, 600, 700]} />
            </div>
          </Col>
          <Col lg="4" md="12" className="d-flex flex-column justify-content-between align-items-center mb-4">
            <div className={`d-flex ${styles['group-btn']}`}>
              <div className={`w-50 ${active === 'rent' ? styles['rent-btn-active'] : styles['rent-btn']}`}>
                <Button handleClick={() => setActive('rent')} theme="outline-gray">
                  rent
                </Button>
              </div>
              <div className={`w-50 ${active === 'buy' ? styles['buy-btn-active'] : styles['buy-btn']}`}>
                <Button theme="outline-gray" handleClick={() => setActive('buy')}>
                  buy
                </Button>
              </div>
            </div>

            <ul className={styles['historical-list']}>
              <li>
                <span className="d-flex align-items-center">
                  <div className={styles.liststyle} />
                  <p className="m-0 pl-1">Aquarius at Waterpark City Avg. Price</p>
                </span>

                <p className="m-0 pl-3">(29 Sales)</p>
              </li>
              <li>
                <span className="d-flex align-items-center">
                  <div className={styles.liststyle} />
                  <p className="m-0 pl-1">Fork York Avg.Price (518 Sales)</p>
                </span>
              </li>
            </ul>

            <div className="d-flex align-items-center justify-content-around mb-1">
              <div className="d-flex flex-column align-items-center mr-4">
                <span className={styles.price}>$2.78 /sqft</span>
                <div className={styles.percentage}> 6.45%</div>
              </div>
              <div className="d-flex flex-column align-items-center ml-4">
                <span className={styles.price}>$8.65 /sqft</span>
                <div className={styles.percentage}>4.76%</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Historical;
