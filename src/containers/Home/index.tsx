/* eslint-disable import/no-named-as-default */
import React, { useState } from "react"
// import React, { memo } from 'react';
// import PropTypes from 'prop-types';

// import { compose } from 'redux';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { useInjectReducer } from 'utils/inject-reducer';
// import { useInjectSaga } from 'utils/inject-saga';

// State Management
// import saga from './store/saga';
// import reducer from './store/reducer';
// import { getJokes } from './store/actions';
// import { selectJokes } from './store/selectors';

// Layouts
import MainHeader from "../../layouts/MainHeader"
import MainFooter from "../../layouts/MainFooter"
import OfferSection from "./layouts/offerSection"
import FeatureSection from "./layouts/FeatureSection"
import VisitedSection from "./layouts/VisitedSection"
import ComissionSection from "./layouts/ComissionSection"

const Home: React.FunctionComponent = () => (
  // useInjectSaga({ key: 'jokes', saga });
  // useInjectReducer({ key: 'jokes', reducer });
  // eslint-disable-next-line no-console

  <>
    {/* <div onClick={() => setModalStatus(true)}> click here </div> */}
    <MainHeader Theme="dark" />

    {/* offer section */}
    <OfferSection />
    {/* offer section */}

    {/* comission section */}
    <ComissionSection />
    {/* comission section */}

    {/* feature section */}
    <FeatureSection />
    {/* feature section */}

    {/* visited section */}
    <VisitedSection />
    {/* visited section */}

    {/* footer */}
    <MainFooter />
  </>
)

// const mapStateToProps = createStructuredSelector({
//   jokesData: selectJokes(),
// });

// export function mapDispatchToProps(dispatch) {
//   return { getJokes: () => dispatch(getJokes()) };
// }

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

Home.propTypes = {}

export default Home
