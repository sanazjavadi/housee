/* eslint-disable object-curly-newline */
/**
 *
 * MobileSlideCart
 *
 */
import React from 'react';
import { useRouter } from 'next/router';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Virtual } from 'swiper';
import useWindowSize from '@Services/hooks/useWindowSize';

// componets
import HouseCard from '../../../../components/ProductCard';

// assets
import cartImage from '../../../../../public/static/images/building.png';

// InterFaces
import { IMobileSlideCart } from './MobileSlideCart';

// styles

import Styles from './styles/MobileSlide.module.scss';

// install Virtual module
SwiperCore.use([Virtual]);

export const MobileSlideCart: React.FunctionComponent<IMobileSlideCart.IProps> = () => {
  const size = useWindowSize();
  const router = useRouter();

  const navigateToDetailPage = (e) => {
    e.preventDefault();
    router.push('/detail');
  };
  const cardItems = [
    {
      img:
        'https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519',
      city: '2545 Medlow Ave',
      address: 'South Park - Los Angeles, CA 90017',
      price: 334000,
      sqft: 1100,
      bed: 3,
      bt: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&w=1000&q=80',
      city: '2545 Medlow Ave',
      address: 'South Park - Los Angeles, CA 90017',
      price: 334000,
      sqft: 1100,
      bed: 3,
      bt: 2,
    },
    {
      img: 'https://i.pinimg.com/originals/7a/62/29/7a62294ccce9a6a40fa392ddac3669fb.jpg',
      city: '2545 Medlow Ave',
      address: 'South Park - Los Angeles, CA 90017',
      price: 334000,
      sqft: 1100,
      bed: 3,
      bt: 2,
    },
    {
      img:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg',
      city: '2545 Medlow Ave',
      address: 'South Park - Los Angeles, CA 90017',
      price: 334000,
      sqft: 1100,
      bed: 3,
      bt: 2,
    },
    {
      img: cartImage,
      city: '2545 Medlow Ave',
      address: 'South Park - Los Angeles, CA 90017',
      price: 334000,
      sqft: 1100,
      bed: 3,
      bt: 2,
    },
    {
      img: 'https://www.livinspaces.net/wp-content/uploads/2019/09/House-Desai-25_Metropole-Architects.jpg',
      city: '2545 Medlow Ave',
      address: 'South Park - Los Angeles, CA 90017',
      price: 334000,
      sqft: 1100,
      bed: 3,
      bt: 2,
    },
    {
      img: cartImage,
      city: '2545 Medlow Ave',
      address: 'South Park - Los Angeles, CA 90017',
      price: 334000,
      sqft: 1100,
      bed: 3,
      bt: 2,
    },
    {
      img: 'https://www.realestate.com.au/blog/images/800x500-fit,progressive/2019/08/19163753/beechwood-home.jpg',
      city: '2545 Medlow Ave',
      address: 'South Park - Los Angeles, CA 90017',
      price: 334000,
      sqft: 1100,
      bed: 3,
      bt: 2,
    },
    {
      img: 'https://i.pinimg.com/originals/7a/62/29/7a62294ccce9a6a40fa392ddac3669fb.jpg',
      city: '2545 Medlow Ave',
      address: 'South Park - Los Angeles, CA 90017',
      price: 334000,
      sqft: 1100,
      bed: 3,
      bt: 2,
    },
  ];

  return (
    <div className={Styles.cartContainer}>
      <Swiper
        centeredSlidesBounds
        grabCursor
        centeredSlides
        initialSlide={2}
        effect="cube"
        spaceBetween={30}
        slidesPerView={size < 600 ? 1.7 : 3}>
        {cardItems.map((cardItem, index) => (
          <SwiperSlide key={index}>
            <HouseCard key={index} cardDetails={cardItem} size="sm" onDoubleClick={(e) => navigateToDetailPage(e)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileSlideCart;
