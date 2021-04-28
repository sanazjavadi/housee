/**
 *
 * CutomeCalender
 *
 */
import React, { useState } from "react"
import ClassNames from "classnames"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// InterFaces
import { ICutomeCalender } from "./CutomeCalender"

// styles
import styles from "./styles/CustomeCalender.module.scss"

// assets
import NextSvg from "./svg/next.svg"
import BackSvg from "./svg/back.svg"

export const CutomeCalender: React.FunctionComponent<ICutomeCalender.IProps> = () => {
  const dates = [
    {
      month: "March",
      day: 10,
      week: "Sunday",
      time: " 12:00 pm ",
    },
    {
      month: "March",
      day: 11,
      week: "Sunday",
      time: " 12:00 pm ",
    },
    {
      month: "March",
      day: 12,
      week: "Sunday",
      time: " 12:00 pm ",
    },
    {
      month: "March",
      day: 13,
      week: "Sunday",
      time: " 12:00 pm ",
    },
    {
      month: "March",
      day: 14,
      week: "Sunday",
      time: " 12:00 pm ",
    },
    {
      month: "March",
      day: 15,
      week: "Sunday",
      time: " 12:00 pm ",
    },
    {
      month: "March",
      day: 16,
      week: "Sunday",
      time: " 12:00 pm ",
    },
  ]
  const [selected, setSelected] = useState(1)
  const calenderClasses = ClassNames(`${styles.calender}`, "d-flex align-items-center justify-content-between w-100")
  return (
    <div className={calenderClasses}>
      <BackSvg className={styles.back} />
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}>
        {dates.map((date, index) => (
          <SwiperSlide>
            <div
              role="button"
              tabIndex={-1}
              onKeyDown={() => setSelected(index)}
              onClick={() => setSelected(index)}
              className={`${selected === index && styles.active} ${
                styles.date
              }  d-flex flex-column align-items-center justify-content-around `}
              key={index}>
              <span className={styles.month}>{date.month}</span>
              <span className={styles.day}>{date.day}</span>
              <span className={styles.week}>{date.week}</span>
              <span className={styles.time}>{date.time}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <NextSvg className={styles.next} />
    </div>
  )
}

export default CutomeCalender
