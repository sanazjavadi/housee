/**
 *
 * SelectInput
 *
 */
import React from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// InterFaces
import { ISelectInput } from "./SelectInput"

// styles
import styles from "./styles/SelectInput.module.scss"

// svg
import Back from "./svg/back.svg"
import Next from "./svg/next.svg"

const SelectInput: React.FunctionComponent<ISelectInput.IProps> = ({ offerItems }) => (
  <div className={styles.SelectInput}>
    <Back className={styles.backSvg} />

    <Swiper
      spaceBetween={0}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}>
      {offerItems.map(offerItem => (
        <SwiperSlide>
          <div className={`${offerItem.status ? styles.active : false} ${styles.offerItem}`} key={offerItem}>
            <span>{offerItem.cost}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <Next className={styles.nextSvg} />
  </div>
)

export default SelectInput
