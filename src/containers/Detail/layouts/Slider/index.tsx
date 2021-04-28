/* eslint-disable object-curly-newline */
/**
 *
 * Slider
 *
 */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import useWindowSize from '@Services/hooks/useWindowSize';
import image from '../../../../../public/static/images/building.png';
import Arrow from './svg/arrow-3.svg';
// import Modal from '../../../../layouts/Modal';
// InterFaces
import { ISlider } from './Slider';

// styles
import styles from './styles/Slider.module.scss';

export const Slider: React.FunctionComponent<ISlider.IProps> = () => {
  SwiperCore.use([Navigation]);
  const [isOpen, setIsOpen] = useState(false);
  // const images = [
  //   'https://www.livinspaces.net/wp-content/uploads/2019/09/House-Desai-25_Metropole-Architects.jpg',
  //   'https://www.realestate.com.au/blog/images/800x500-fit,progressive/2019/08/19163753/beechwood-home.jpg',
  //   'https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519',
  //   'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&w=1000&q=80',
  //   'https://i.pinimg.com/originals/7a/62/29/7a62294ccce9a6a40fa392ddac3669fb.jpg',
  //   image,
  //   'https://www.realestate.com.au/blog/images/800x500-fit,progressive/2019/08/19163753/beechwood-home.jpg',
  // ];
  const images = [
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1459535653751-d571815e906b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1522050212171-61b01dd24579?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1459535653751-d571815e906b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  ];
  const size = useWindowSize();
  return (
    <div className={styles.carousel}>
      {/* <Modal status={isOpen} changeStatus={() => setIsOpen(!isOpen)} tabs={false}>
        <div className="swiper-container gallery-top">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide "
              style={{
                backgroundImage: 'url(../../../../../public/static/images/building.png)',
                width: '500px',
                height: '100px',
              }}
            />
          </div>
        </div>
        <div className="swiper-container gallery-thumbs">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide"
              style={{ backgroundImage: `url(${image})`, width: '500px', height: '100px' }}
            />
          </div>
        </div>
      </Modal> */}
      <Arrow className={styles.arrow} onClick={() => setIsOpen(!isOpen)} />
      <Swiper spaceBetween={0} slidesPerView={size > 600 ? 3 : 1} navigation autoplay>
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt="" className={styles['img-slider']} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
