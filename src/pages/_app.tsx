import React from 'react';
import Head from 'next/head';
import App from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../globalStyles/index.scss';
import '../globalStyles/main.scss';
import 'typeface-metropolis';
import '@typefaces-pack/typeface-inter';
// Import Swiper styles
import 'swiper/swiper.scss';

// Data Picker styles
import 'react-datepicker/dist/react-datepicker.css';

const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wow.js') : null;

class Srr extends App {
  componentDidMount() {
    new WOW().init({
      offset: 50,
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Houses</title>
        </Head>

        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

export default Srr;
