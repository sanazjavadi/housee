/**
 *
 * Offers
 *
 */
import React from "react"

// InterFaces
import { Col, Row } from "react-bootstrap"

// components
import VerticalCart from "@Components/VerticalProductCard"
import { IOffers } from "./Offers"
// import OfferModal from '../Modal';

export const Offers: React.FunctionComponent<IOffers.IProps> = () => {
  const homeDetails = {
    address: "2356 PLO Ave",
    sqft: "200 sqft",
    beds: "3 Beds",
  }
  const offerPrice = {
    agentOffer: "$200,000",
    houseeOffer: "$200,000",
    YourOffer: "$200,000",
  }

  return (
    <>
      {/* <OfferModal /> */}
      <Row className="justify-content-center mt-3 mb-5 wow fadeInUp">
        <Col lg="3">
          <VerticalCart status="Not accepted" homeDetails={homeDetails} offerPrice={offerPrice} />
        </Col>
        <Col lg="3">
          <VerticalCart status="waiting" homeDetails={homeDetails} offerPrice={offerPrice} />
        </Col>
        <Col lg="3">
          <VerticalCart status="Accepted" homeDetails={homeDetails} offerPrice={offerPrice} />
        </Col>
        <Col lg="3">
          <VerticalCart status="Not accepted" homeDetails={homeDetails} offerPrice={offerPrice} />
        </Col>
      </Row>
    </>
  )
}

export default Offers
