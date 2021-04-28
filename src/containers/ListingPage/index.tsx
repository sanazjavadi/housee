/**
 *
 * ListingPage
 *
 */
import React, { memo, useState, useEffect } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';

// Hooks
import useWindowSize from '@Services/hooks/useWindowSize';

// Statid Data
import { filtersortBy } from '@Static/Listing/data';

// layouts
import { Container } from 'react-bootstrap';
import { IListingPage } from '@Interfaces/index';
import Map from '@Components/Map';
import MainHeader from '../../layouts/MainHeader';
import HouseList from './layouts/HouseCardList';
import Filters from './layouts/Filters';
import Pagination from '../../components/Paginator';
import MainFooter from '../../layouts/MainFooter';
import Button from '../../components/Button';
import Select from '../../components/Select';
import MobileSlider from './layouts/MobileSlideCart';
// Styles
import styles from './styles/ListingPage.module.scss';

import cartImage from '../../../public/static/images/building.png';

const cardItems = [
  {
    img:
      'https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519',
    city: '2545 Medlow Ave',
    address: 'South Park - Los Angeles, CA 90017',
    price: 334000,
    sqft: 1100,
    bed: 2,
    bt: 2,
    type: 'rent',
    features: ['Furnished', 'Bicycle Parking', 'Security System'],
  },
  {
    img: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&w=1000&q=80',
    city: '2545 Medlow Ave',
    address: 'some - Los Angeles, CA 90018',
    price: 334000,
    sqft: 1100,
    bed: 2,
    bt: 2,
    type: 'rent',
    features: ['Hardwood Floors'],
  },
  {
    img: 'https://i.pinimg.com/originals/7a/62/29/7a62294ccce9a6a40fa392ddac3669fb.jpg',
    city: '2545 Medlow Ave',
    address: 'South Park - Los Angeles, CA 90017',
    price: 334000,
    sqft: 1100,
    bed: 2,
    bt: 2,
    type: 'rent',
    features: ['Hardwood Floors'],
  },
  {
    img:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg',
    city: '2545 Medlow Ave',
    address: 'South Park - Los Angeles, CA 90017',
    price: 334000,
    sqft: 1100,
    bed: 2,
    bt: 2,
    type: 'rent',
    features: ['Furnished', 'Bicycle Parking', 'Security System', 'Bicycle Parking', 'Hardwood Floors'],
  },
  {
    img: 'https://www.livinspaces.net/wp-content/uploads/2019/09/House-Desai-25_Metropole-Architects.jpg',
    city: '2545 Medlow Ave',
    address: 'South Park - Los Angeles, CA 90017',
    price: 334000,
    sqft: 1100,
    bed: 1,
    bt: 2,
    type: 'buy',
    features: ['Furnished', 'Bicycle Parking', 'Security System', 'Bicycle Parking', 'Hardwood Floors'],
  },
  {
    img: cartImage,
    city: '99999 Medlow Ave',
    address: 'South Park - Los Angeles, CA 90017',
    price: 334000,
    sqft: 1100,
    bed: 3,
    bt: 2,
    type: 'buy',
    features: ['Furnished', 'Bicycle Parking', 'Security System', 'Bicycle Parking', 'Hardwood Floors'],
  },
  {
    img: cartImage,
    city: '999999 Medlow Ave',
    address: 'South Park - Los Angeles, CA 90017',
    price: 334000,
    sqft: 1100,
    bed: 2,
    bt: 2,
    type: 'buy',
    features: ['Furnished', 'Bicycle Parking'],
  },
  {
    img: 'https://www.realestate.com.au/blog/images/800x500-fit,progressive/2019/08/19163753/beechwood-home.jpg',
    city: '999999 Medlow Ave',
    address: 'South Park - Los Angeles, CA 90017',
    price: 334000,
    sqft: 1100,
    bed: 2,
    bt: 2,
    type: 'buy',
    features: ['Furnished', 'Bicycle Parking'],
  },
];

const ListingPage: React.FunctionComponent<IListingPage.IProps> = () => {
  const [showMap, setShowMap] = useState<boolean>(true);

  const [data, setdata] = useState(cardItems);

  const size = useWindowSize();

  const setFilterOnData = ({ filterOptions, formFields }) => {
    let filterdData = cardItems;
    const searchString = formFields.search ? formFields.search.toString() : '';

    // Filter By  search
    if (searchString !== '') {
      filterdData = cardItems.filter((option) => {
        const searchByAddress = option.address.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
        const searchByCity = option.city.toLowerCase().indexOf(searchString.toLowerCase()) > -1;

        return searchByCity || searchByAddress;
      });
    }
    // Filter By Type (Rent/Buy)
    filterdData = filterdData.filter((option) => {
      const typeOption = option.type === formFields.type.title.toLowerCase();
      const bedsOption = option.bed === Number(formFields.roomCount.title);

      const filterByMinPrice = formFields.minPrice !== 0 ? option.price > Number(formFields.minPrice) : true;
      const filterByMaxPrice = formFields.maxPrice !== 0 ? option.price < Number(formFields.maxPrice) : true;

      return typeOption && bedsOption && filterByMinPrice && filterByMaxPrice;
    });

    // console.log('filter data');
    // console.log(filterdData);

    setdata(filterdData);
  };

  // Pagination

  const [currentPage, setcurrentPage] = useState<number>(1);
  const [pagesCount, setpagesCount] = useState<number>(0);

  useEffect(() => {
    const count = cardItems.length / 10;
    setpagesCount(Math.round(count));
  }, [data]);

  const backPage = () => {
    setcurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const nextPage = () => {
    setcurrentPage((prev) => prev + 1);
  };

  const gotoPage = (page) => {
    setcurrentPage(page);
  };

  return (
    <>
      <MainHeader openAuthModel={() => setModalStatus(true)} Theme="light" />
      <Filters filterHandler={setFilterOnData} />
      <section>
        <Container className="p-lg-0" fluid="xl">
          <div className={styles.listHeader}>
            <div className={styles['btn-groups']}>
              <div className={styles.hidebtn}>
                <Button theme="outline" size="md" font="15px" handleClick={() => setShowMap(!showMap)}>
                  {showMap ? 'hide map ' : 'show map'}
                </Button>
              </div>
              <div className={styles.selectbtn}>
                <Select defaultSelected="Sort by" options={filtersortBy} label="Sort by" theme="dd-wrapper-secondary" />
              </div>
            </div>

            <span className={styles.results}>{`${data ? data.length : 0} Results`}</span>
          </div>
        </Container>
      </section>
      <section className={styles.mapwrapper}>
        <Container fluid className="p-0">
          <Flipper
            translate
            flipKey={showMap}
            className={`d-flex flex-wrap ${!showMap ? 'justify-content-between' : ''} `}>
            <Flipped flipId="square">
              {showMap && (
                <div className={styles.map}>
                  <div className={styles.mapContainer}>
                    <Map />
                  </div>
                </div>
              )}
            </Flipped>

            <Flipped flipId="square">
              <div className={!showMap ? styles.housecardmap : styles.housecard}>
                {size > 714 ? <HouseList cardItems={data} cartLayout={showMap} /> : <MobileSlider />}
              </div>
            </Flipped>
          </Flipper>
        </Container>
      </section>
      {/* pagintaion */}

      {size > 714 && (
        <div className="d-flex flex-column align-items-center justify-content-center mt-5 mb-5 wow fadeInUp">
          <Pagination
            handler={gotoPage}
            count={Array.from({ length: pagesCount }, (_, i) => i + 1)}
            backHandler={() => nextPage()}
            nextHandler={() => backPage()}
            current={currentPage}
          />
        </div>
      )}

      {/* footer */}
      <MainFooter />
    </>
  );
};

export default memo(ListingPage);
