/**
 *
 * MobileMoreFilters
 *
 */
import React, { useState } from "react"
import { Container, Col, Row } from "react-bootstrap"
import Button from "@Components/Button"
// InterFaces
import { IMobileMoreFilters } from "./MobileMoreFilters"

// styles
import styles from "./styles/MobileMoreFilter.module.scss"

// svg
import AirCondition from "../MoreFilters/svg/filter/Airconditioning.svg"
import Balcony from "../MoreFilters/svg/filter/Balcon.svg"
import Barbecue from "../MoreFilters/svg/filter/Barbecue.svg"
import Bicycle from "../MoreFilters/svg/filter/Bicycle.svg"
import Elevator from "../MoreFilters/svg/filter/Elevator.svg"
import Floors from "../MoreFilters/svg/filter/Floors.svg"
import Gym from "../MoreFilters/svg/filter/Gym.svg"
import Landry from "../MoreFilters/svg/filter/Landry.svg"
import Parking from "../MoreFilters/svg/filter/Parking.svg"
import Pet from "../MoreFilters/svg/filter/Pet.svg"
import Pool from "../MoreFilters/svg/filter/pool.svg"
import Reconstructed from "../MoreFilters/svg/filter/Reconstructed.svg"
import Security from "../MoreFilters/svg/filter/Security.svg"
import Furnished from "../MoreFilters/svg/filter/Furnished.svg"

export const MobileMoreFilters: React.FunctionComponent<IMobileMoreFilters.IProps> = () => {
  const filters = [
    {
      title: "Swimming pool",
      svg: Pool,
    },
    {
      title: "Elevator",
      svg: Elevator,
    },
    {
      title: "Pet Friendly",
      svg: Pet,
    },
    {
      title: "Parking",
      svg: Parking,
    },
    {
      title: "Air Conditioning",
      svg: AirCondition,
    },
    {
      title: "Balcony",
      svg: Balcony,
    },
    {
      title: "Barbecue",
      svg: Barbecue,
    },
    {
      title: "Ensuit Landry",
      svg: Landry,
    },
    {
      title: "Furnished",
      svg: Furnished,
    },
    {
      title: "Bicycle Parking",
      svg: Bicycle,
    },
    {
      title: "Security System",
      svg: Security,
    },
    {
      title: "Reconstructed",
      svg: Reconstructed,
    },
    {
      title: "Gym",
      svg: Gym,
    },
    {
      title: "Hardwood Floors",
      svg: Floors,
    },
  ]

  const firstCol = filters.slice(0, 7)
  const secondCol = filters.slice(7, 14)
  // const [selected , ssetSelected] = useState()
  return (
    <div className={styles["mobile-more-filters"]}>
      <Container>
        <Row className="mt-4">
          <Col xs="6">
            <div className={styles.leftColumn}>
              {firstCol.map((filter, index) => (
                <div key={index} className={styles.morefilter}>
                  <filter.svg />
                  <span className="pl-3">{filter.title}</span>
                </div>
              ))}
            </div>
          </Col>
          <Col xs="6">
            {secondCol.map((filter, index) => (
              <div key={index} className={styles.morefilter}>
                <filter.svg />
                <span className="pl-3">{filter.title}</span>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
      <div className={styles["more-filter-btn"]}>
        <Button theme="primary" size="lg" borderRadius="0px">
          Apply Filters
        </Button>
      </div>
    </div>
  )
}

export default MobileMoreFilters
