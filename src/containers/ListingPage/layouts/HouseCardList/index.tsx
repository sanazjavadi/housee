/**
 *
 * HouseCardList
 *
 */
import React from "react"
import { CSSTransitionGroup } from "react-transition-group"
import Link from "@Components/Link"
// import { Col, Row } from 'react-bootstrap';
import HouseCard from "../../../../components/ProductCard"
import styles from "./styles/HouseCard.module.scss"

// InterFaces
import { IHouseCardList } from "./HouseCardList"

// assets
// import cartImage from '../../../../../public/static/images/building.png';

// eslint-disable-next-line max-len
export const HouseCardList: React.FunctionComponent<IHouseCardList.IProps> = ({ cartLayout, cardItems }) => (
  <>
    <div>
      <CSSTransitionGroup
        className={`d-flex ${cartLayout ? styles["housecard-row-map"] : styles["housecard-row"]}`}
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {cardItems.map((cardItem, index) => (
          <div key={index} className={`${cartLayout ? styles.housecard : styles["house-card-mobile"]} `}>
            <Link href="/detail">
              <HouseCard key={index} cardDetails={cardItem} size="lg" />
            </Link>
          </div>
        ))}
      </CSSTransitionGroup>
    </div>
  </>
)

export default HouseCardList
