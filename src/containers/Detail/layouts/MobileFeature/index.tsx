/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/**
 *
 * MobileFeature
 *
 */
import React, { useState } from "react"

// InterFaces
import { Accordion, Card, Container, Button, Col, Row } from "react-bootstrap"
import { IMobileFeature } from "./MobileFeature"
import styles from "./styles/MobileFeature.module.scss"

// assets
import Basement from "./svg/basement.svg"
import Pool from "./svg/pool.svg"
import Parking from "./svg/parking.svg"
import Yearbuilt from "./svg/yearbuilt.svg"
import View from "./svg/view.svg"
import Property from "./svg/property.svg"

export const MobileFeature: React.FunctionComponent<IMobileFeature.IProps> = () => {
  const [selected, setSelected] = useState(undefined)
  const FeatureList = [
    {
      title: "Single family home",
      svg: Property,
    },
    {
      title: "Year Built:",
      svg: Yearbuilt,
    },
    {
      title: "Pool Features:",
      svg: Pool,
    },
    {
      title: "View of coast, city or hills",
      svg: View,
    },
    {
      title: "Basement",
      svg: Basement,
    },
    {
      title: "Parking Spaces:",
      svg: Parking,
    },
  ]
  const FirstColumn = FeatureList.slice(0, 3)
  const SecondColumn = FeatureList.slice(3, 6)
  return (
    <section>
      <Container fluid="lg" className={`px-lg-0  ${styles["section-tab"]}`}>
        <Accordion defaultActiveKey="0">
          <Card bsPrefix={styles["feature-card"]}>
            <Card.Header bsPrefix={styles["card-header"]}>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="1"
                onClick={() => (selected ? setSelected(undefined) : setSelected(true))}>
                Feature
                <div className={selected ? styles["arrow-open"] : styles["arrow-close"]} />
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="1">
              <Card.Body style={{ padding: 0 }}>
                <Container fluid="lg" className="px-0">
                  <Row className="justify-content-center">
                    <Col sm="6" xs={6} className={styles.features}>
                      {FirstColumn.map((list, index) => (
                        <div key={index} className="d-flex align-items-center">
                          {" "}
                          <list.svg />
                          <span>{list.title}</span>
                        </div>
                      ))}
                    </Col>
                    <Col sm="6" xs={6} className={styles.features}>
                      {SecondColumn.map((list, index) => (
                        <div key={index} className="d-flex align-items-center">
                          {" "}
                          <list.svg />
                          <span>{list.title}</span>
                        </div>
                      ))}
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </section>
  )
}

export default MobileFeature
