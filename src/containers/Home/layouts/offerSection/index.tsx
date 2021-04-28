/* eslint-disable react/jsx-one-expression-per-line */
/**
 *
 * OfferSection
 *
 */
import React, { useState } from 'react';

// svg
import { Container, Row, Col } from 'react-bootstrap';
// import classNames from 'classnames';
import { Flipper, Flipped } from 'react-flip-toolkit';
import NextSvg from './svg/next.svg';
import Dots from './svg/dots.svg';
import PriceSvg from './svg/price.svg';
import TradeSvg from './svg/trade.svg';
import HomeSvg from './svg/home.svg';
import ProcessSvg from './svg/process.svg';
import GirlSvg from './svg/girl.svg';
// import BackSvg from './svg/back.svg';

// layouts
import ExpandOffer from './OfferExpand';

// styles
import styles from './styles/styles.module.scss';

export const OfferSection: React.FunctionComponent = () => {
  const [active, setActive] = useState<boolean>(false);
  const offers = [
    {
      title: 'PRICE ESTIMATION',
      svg: PriceSvg,
    },
    {
      title: 'TRADE IN OR INSTANT',
      svg: TradeSvg,
    },
    {
      title: 'OFFER MONEY SAVER',
      svg: HomeSvg,
    },
    {
      title: 'SEAMLESS PROCESS',
      svg: ProcessSvg,
    },
  ];
  return (
    <>
      <Flipper spring="veryGentle" flipKey={active}>
        {!active ? (
          <Flipped scale flipId="square">
            <section className={styles.marginSection}>
              {/* title */}
              <Container className="p-lg-0">
                <Row className="d-flex no-gutters">
                  <Col
                    lg={4}
                    md={11}
                    xs={12}
                    className="d-flex justify-content-lg-start justify-content-md-center justify-content-sm-center align-items-center ">
                    <p className={styles.content}>
                      <Dots className={styles['dot-svg']} />
                      <span> What do we offer? </span>
                    </p>
                  </Col>
                </Row>
              </Container>
              {/* title */}

              <Container className="p-0">
                <Row className="d-flex justify-content-center">
                  <Col
                    lg={5}
                    md={12}
                    sm={10}
                    className="d-flex
             justify-content-lg-start justif-content-md-center
              justify-content-sm-center align-items-end order-last order-lg-first">
                    <GirlSvg className={styles['girl-svg']} />
                  </Col>

                  <Col lg={7} md={12} className={`d-flex justif-content-md-center ${styles.optionsOffer}`}>
                    <Row className="justify-content-center">
                      {/* Loop in Items */}
                      {offers.map((i) => (
                        <Col
                          key={i.title}
                          lg={5}
                          sm={6}
                          md={6}
                          xs={12}
                          className={`d-flex justify-content-lg-start justify-content-center ${styles['expand-offer-row']}`}>
                          <div className="d-flex align-items-center justify-content-start">
                            <i.svg />
                            <p className="ml-2"> {i.title} </p>
                          </div>
                        </Col>
                      ))}

                      <Col lg={12} xs={11}>
                        <span
                          onClick={() => setActive(!active)}
                          onKeyDown={() => setActive(!active)}
                          tabIndex={-1}
                          role="button"
                          className={`d-flex align-items-center ${styles.readmore}`}>
                          <span>read more</span>
                          <NextSvg className="ml-2" />
                        </span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
          </Flipped>
        ) : null}
        {active ? <ExpandOffer turnoff={() => setActive(false)} /> : null}
      </Flipper>
    </>
  );
};

export default OfferSection;
