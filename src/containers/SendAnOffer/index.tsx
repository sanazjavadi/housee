/**
 *
 * SendAnOffer
 *
 */
import React, { memo, useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import MainHeader from '@Layouts/MainHeader';

// pages
import NewOffer from './layout/pages/NewOffer';
import AdditionalInfo from './layout/pages/AdditionalInfo';
import Vertification from './layout/pages/verification';
import AddressInfo from './layout/pages/AddressInfo';
import RentalApp from './layout/pages/RentalApp';
import offerDate from './layout/pages/NewOfferDate';

type IPage = {
  id: number;
  component: React.FunctionComponent;
  title: any;
};

const pages = [
  {
    id: 1,
    component: Vertification,
    title: 'step1',
  },
  {
    id: 2,
    component: AdditionalInfo,
    title: 'step2',
  },
  {
    id: 3,
    component: AddressInfo,
    title: 'step3',
  },
  {
    id: 4,
    component: RentalApp,
    title: 'step4',
  },
  {
    id: 5,
    component: offerDate,
    title: 'step5',
  },

  {
    id: 6,
    component: NewOffer,
    title: 'step6',
  },
];

export function SendAnOffer() {
  const [currentPage, setCurrenPage] = useState<IPage>(pages[0]);
  // const [stepTitle, setStepTitle] = useState([]);

  const changePage = (pageId) => {
    setCurrenPage(pages[pageId]);
    // setStepTitle((stepTitle) => [...stepTitle, pages[pageId].title]);
  };

  return (
    <div className="mb-5">
      <MainHeader Theme="light" />
      <Container fluid="lg" className="mt-5 mb-5  px-lg-0">
        <Row>
          <Col>
            {/* <div className="d-flex">
              {stepTitle.map(i => (
                <p className="mt-5">
                  <span style={i === currentPage.title ? { color: "red" } : null}>{i}</span>
                  =>
                </p>
              ))}
            </div> */}

            {/* CurrentPage */}
            <currentPage.component changePageHandler={changePage} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default memo(SendAnOffer);
