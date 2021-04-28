/**
 *
 * OfferExpand
 *
 */
import React from 'react';

// InterFaces
import { Container, Row, Col } from 'react-bootstrap';
import { Flipped } from 'react-flip-toolkit';
import { IOfferExpand } from './OfferExpand';

// styles
import styles from './styles/OfferExpand.module.scss';

// svg
// import NextSvg from '../svg/next.svg';
import Dots from '../svg/dots.svg';
import PriceSvg from '../svg/price.svg';
import TradeSvg from '../svg/trade.svg';
import HomeSvg from '../svg/home.svg';
import ProcessSvg from '../svg/process.svg';
import GirlSvg from '../svg/girl.svg';
import Business from '../svg/business.svg';
import BackSvg from '../svg/back.svg';
import Coworker from '../svg/coworker.svg';

export const OfferExpand: React.FunctionComponent<IOfferExpand.IProps> = ({ turnoff }) => {
  const offersExpand = [
    {
      title: 'PRICE ESTIMATION',
      svg: PriceSvg,
      desc: `using our precise machine learning models,
      we estimate the current and the future price 
      of your listing. `,
    },
    {
      title: 'TRADE IN OR INSTANT',
      svg: TradeSvg,
      desc: `you have the option to trade in or sell your property
      whith a single click, and we take care of the rest.
      `,
    },
    {
      title: 'OFFER MONEY SAVER',
      svg: HomeSvg,
      desc: ` Save thousands of dollars in listing and 
      commission fees when you use our services.
      `,
    },
    {
      title: 'SEAMLESS PROCESS',
      svg: ProcessSvg,
      desc: `we provide mortgage approvals , concierge service 
      property management, legal council and etc all in 
      one place for your convenience.`,
    },
    {
      title: 'BUSINESS PARTNER ',
      svg: Business,
      desc: `are your a real estate agent looking to join our firm 
      or have a listing you would like to work on? Join our
      housee agent partnership program.`,
    },
    {
      title: 'AGENT PARTNER',
      svg: Coworker,
      desc: `promote your services on our platform, we connect 
      home buyers and sellers with you.`,
    },
  ];

  const offerItems = offersExpand.splice(0, 4);
  const moreItems = offersExpand.splice(0, 2);

  return (
    <>
      <Flipped scale flipId="square">
        <section className={styles['offer-expand-section']}>
          {/* title */}
          <Container className="p-lg-0">
            <Row>
              <Col lg={4} md={12} sm={12} xs={11} className="d-flex justify-content-start align-items-center">
                <span className={styles.title}>
                  <Dots className={styles['dot-svg']} />
                  <p>What do we offer? </p>
                </span>
              </Col>
            </Row>
          </Container>

          <Container className="p-lg-0">
            <Row className="justify-content-between">
              {offerItems.map((offer, index) => (
                <Col key={index} lg={5} md={12} sm={12} className={styles.offer}>
                  <div
                    className={`d-flex flex-lg-row flex-md-row flex-sm-column flex-xs-column flex-column align-items-center justify-content-start order-1 ${styles['offer-title']}`}>
                    <offer.svg />
                    <p>{offer.title}</p>
                  </div>
                  <p className={styles.description}>{offer.desc}</p>
                </Col>
              ))}

              <Col
                lg={5}
                className={`d-flex justify-content-start align-items-end order-lg-2 order-last order-xs-last order-sm-last ${styles['girl-svg']}`}>
                <GirlSvg />
              </Col>
              <Col lg={5} md={12} sm={12} className={`order-3 ${styles.offer}`}>
                {moreItems.map((offer, index) => (
                  <div key={index} className={styles['more-offer']}>
                    <div
                      className={`d-flex flex-lg-row flex-md-row flex-sm-column flex-xs-column flex-column align-items-center justify-content-start ${styles['offer-title']}`}>
                      <offer.svg />
                      <p>{offer.title}</p>
                    </div>
                    <p className={styles.description}>{offer.desc}</p>
                  </div>
                ))}

                <Col lg={12} sm={12} xs={11}>
                  <span
                    onClick={() => turnoff()}
                    className={`d-flex align-items-center ${styles.readmore}`}
                    tabIndex={-1}
                    onKeyDown={() => turnoff()}
                    role="button">
                    <BackSvg className="mr-2" />
                    <span>read less</span>
                  </span>
                </Col>
              </Col>
            </Row>
          </Container>
        </section>
      </Flipped>
    </>
  );
};

export default OfferExpand;
