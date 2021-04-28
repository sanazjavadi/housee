/**
 *
 * Offers
 *
 */
import React from 'react';

import CustomLineChart from '@Components/OfferLineChart';

// styles
import { Container, Row, Col } from 'react-bootstrap';
import styles from './styles/Offers.module.scss';

export const Offers = () => (
  <section className={styles.offer}>
    <Container fluid="lg" className="p-lg-0">
      <Row>
        <Col lg="7" md="12">
          <div className={styles.tree}>
            <CustomLineChart responsiveSize={[280, 500, 650, 600, 600]} />
          </div>
        </Col>
        <Col lg="5" md="12" className="d-flex flex-column justify-content-end  mb-4">
          <div>
            <p>Housee Intelligence insight: 2500$ to 3000$</p>

            <p>Market price: XXX</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Offers;
