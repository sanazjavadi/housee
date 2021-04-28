/**
 *
 * SimilarHomesList
 *
 */
import React from "react"

// styles
import { Container, Row, Col } from "react-bootstrap"

// Static Data
import { cardItems } from "@data/detail/data"

// components
import HouseCard from "@Components/ProductCard"
import Link from "@Components/Link"
import styles from "./styles/SimilarHomeList.module.scss"

// InterFaces
import { ISimilarHomesList } from "./SimilarHomesList"

export const SimilarHomesList: React.FunctionComponent<ISimilarHomesList.IProps> = () => (
  <section className={styles["homelist-section"]}>
    <Container fluid="lg" className="p-lg-0">
      <Row>
        <Col lg={12} sm="10">
          <div className={`justify-content-start ${styles.title}`}>
            <div className={styles.circle} />
            <p>Similar homes </p>
          </div>
        </Col>
        {cardItems.map((cardItem, index) => (
          <Col key={index} lg="4" md="6" sm="12" xs="12" className=" mt-4 mt-lg-0 d-flex justify-content-center">
            <Link href="/detail">
              <HouseCard key={index} cardDetails={cardItem} size="lg" />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
)

export default SimilarHomesList
