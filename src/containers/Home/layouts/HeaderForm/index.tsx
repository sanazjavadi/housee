/**
 *
 * HeaderForm
 *
 */
import React from 'react';
import useWindowSize from '@Services/hooks/useWindowSize';

// components
import { Container, Row, Col } from 'react-bootstrap';
import { filterHouseType } from '@Static/Listing/data';
import Link from '@Components/Link';
import MobileForm from '@containers/Home/layouts/MobileForm';
import Select from '@Components/Select';

// svg
import Search from './svg/search.svg';

// styles
import styles from './styles/HeaderForm.module.scss';

// InterFaces
import { IHeaderForm } from './HeaderForm';

export const HeaderForm: React.FunctionComponent<IHeaderForm.IProps> = () => {
  const size: Number = useWindowSize();
  return (
    <Container data-wow-delay="1s" data-wow-duration="2s" className="p-0 wow bounceInRight">
      <Row className="justify-content-center ">
        <Col
          lg={{ offset: 4, span: 8 }}
          md="11"
          sm="12"
          xs="12"
          className="d-flex justify-content-lg-end justify-content-center">
          {size < 700 ? (
            <MobileForm />
          ) : (
            <form className={styles['hero-form']}>
              <div className={styles['your-city-select']}>
                <Select autocomplate hasIcon={<Search />} theme="dd-wrapper" defaultSelected="Your City" />
              </div>

              <span className={styles.path} />
              <div className={styles['rent-select']}>
                <Select options={filterHouseType} theme="dd-wrapper" defaultSelected="Rent House" />
              </div>

              {/* TODO - convert to custom button component */}
              <button type="button">
                <Link href="/listing">Search</Link>
              </button>
            </form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderForm;
