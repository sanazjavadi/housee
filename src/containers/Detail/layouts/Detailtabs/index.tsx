/* eslint-disable object-curly-newline */
/**
 *
 * Detailtabs
 *
 */
import React from "react"

// styles
import { Tab, Tabs, Container, Row, Col } from "react-bootstrap"
import Map from "@Components/Map"
import styles from "./styles/Detailtabs.module.scss"
// InterFaces
import { IDetailtabs } from "./Detailtabs"

export const Detailtabs: React.FunctionComponent<IDetailtabs.IProps> = () => (
  <Container fluid="lg" className="p-lg-0">
    <Row>
      <Col lg="12" md="12">
        <div className={styles["tab-container"]}>
          <Tabs bsPrefix={styles.tab} id="controlled-tab-example">
            <Tab eventKey="Direction" title="Direction">
              <div style={{ height: "250px", width: "100%" }} className={styles.map}>
                <Map />
              </div>
            </Tab>
            <Tab eventKey="Street views" title="Street views">
              <div
                style={{ height: "250px", width: "100%" }}
                className="d-flex justify-content-center align-items-center">
                Street views
              </div>
            </Tab>
            <Tab title="Location" />
          </Tabs>
        </div>
      </Col>
    </Row>
  </Container>
)

export default Detailtabs
