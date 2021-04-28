/**
 *
 * ComissionSection
 *
 */
import React, { useState } from 'react';

// Svg
import { Container, Row, Col } from 'react-bootstrap';
import InputSlider from '@Components/InputSlider';
import Shape from './svg/dot3.svg';

// styles
import styles from './styles/Commission.module.scss';

// component

const ComissionSection: React.FunctionComponent = () => {
  const [amount, setAmount] = useState<number>(30);
  return (
    <section className={styles.sellingDesc}>
      <Container className="p-lg-0">
        <Row className="justify-content-center">
          <Col lg="12" md="12" sm="12" xs="12">
            <div className="d-flex align-items-center">
              <Shape />
              <p className={styles['selling-title']}>How much could you save in commission selling with Housee?</p>
            </div>
            <span className={styles['slide-span']}>Slide to select your home’s value</span>

            <span className={styles['selling-price']}>
              Save money:
              <span>{`$ ${amount / 2}`}</span>
            </span>
          </Col>
          <Col lg="12" md="12" sm="12" xs="12" className="p-0 pl-lg-3 pl-md-3 p-sm-0">
            <div className={styles.bottomCommi}>
              <div className={styles['price-range']}>
                <span className="text-left">0</span>
                <span className="text-center">{`$ ${amount}`}</span>
                <span className="text-right">$5000,000</span>
              </div>
              <div className={styles['slider-wrapper']}>
                <InputSlider value={amount} onChange={setAmount} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default ComissionSection;
