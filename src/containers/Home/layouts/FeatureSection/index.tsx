/* eslint-disable max-len */
/**
 *
 * featureSection
 *
 */
import React, { useState } from 'react';

// svg
import { Container, Row, Col } from 'react-bootstrap';
import NextSvg from './svg/next.svg';
import BackSvg from './svg/back.svg';
import Estimate from './svg/estimate.svg';
import Timer from './svg/timer.svg';
import Transactionsvg from './svg/transaction.svg';
import Platformsvg from './svg/platform.svg';
import Search from './svg/search.svg';
import Moneyy from './svg/money.svg';

import styles from './styles.module.scss';

const FeatureSection: React.FunctionComponent = () => {
  const [active, setActive] = useState<boolean>(false);
  const items = [
    {
      title: 'PRECISE ESTIMATION',
      svg: Estimate,
      desc: `Estimate current and future listing
      value with the help of proprietary
      ensemble of machine learning and
      artificial intelligence`,
    },
    {
      title: 'TIME SAVER',
      svg: Timer,
      desc: `Save time, energy and resources
      by using our services
      `,
    },
    {
      title: 'AUTOMATED TRANSACTION',
      svg: Transactionsvg,
      desc: `Buy your favorite listing by
      just click of a button
      `,
    },
    {
      title: 'TRADE IN ENABLED PLATFORM',
      svg: Platformsvg,
      desc: `Sell your listing to us and focus on
      what matters to you the most, we
      take care of everything A platform
      for selling or buying property online
      `,
    },
    {
      title: 'MONEY SAVER',
      svg: Moneyy,
      desc: `Don’t pay humongous
      commission fees anymore
      `,
    },
    {
      title: 'TAILORED SEARCH QUERY',
      svg: Search,
      desc: `Get search query based on
      your desires, interests and 
     search history
      `,
    },
  ];
  return (
    <div>
      <section className={styles.whyHousee}>
        <Container className="p-lg-0">
          <Row className="justify-content-center">
            <Col
              lg="12"
              md="12"
              sm="12"
              xs="12"
              className={`d-flex align-items-lg-center align-items-md-center align-items-start ${styles.features}`}>
              <div className="d-flex align-items-center">
                <span className={styles.circle} />
                <span className={styles.title}> WHY HOUSEE?</span>
              </div>

              <span className={styles.content}> HOUSE is an advanced real estate brokerage platform.</span>
            </Col>
          </Row>
          <Row className={`${styles.featuresoptions}`}>
            {/* Loop in Items */}
            {items.map((item) => (
              <Col key={item.title} lg="4" md="6" sm="6" xs="12" className="ml-auto mr-auto">
                <div className={`text-center ${styles.options}`}>
                  <div className={styles['top-options']}>
                    <item.svg />
                    <p>{item.title}</p>
                  </div>

                  {active ? <p className={styles.desc}>{item.desc}</p> : ''}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <Container className="p-0">
          <Row className="justify-content-center align-items-center">
            <Col lg="12" md="12" sm="11" xs="11">
              <div
                onKeyDown={() => setActive(!active)}
                tabIndex={-1}
                role="button"
                onClick={() => setActive(!active)}
                className={`d-flex align-items-center ${styles.readmore}`}>
                {active ? <BackSvg className="mr-2" /> : ''}
                {active ? <span>read less</span> : <span>read more</span>}
                {!active ? <NextSvg className="ml-2" /> : ''}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default FeatureSection;
