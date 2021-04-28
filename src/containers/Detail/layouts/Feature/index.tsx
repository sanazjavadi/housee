/* eslint-disable object-curly-newline */
/**
 *
 * Feature
 *
 */
import React, { useState } from "react"

// InterFaces
import { Container, Col, Row, Tab, Tabs } from "react-bootstrap"
import { IFeature } from "./Feature"

// styles
import styles from "./styles/Feature.module.scss"

// assets
import Basement from "./svg/basement.svg"
import Pool from "./svg/pool.svg"
import Parking from "./svg/parking.svg"
import Yearbuilt from "./svg/yearbuilt.svg"
import View from "./svg/view.svg"
import Property from "./svg/property.svg"
import Nextsvg from "./svg/next.svg"
import Backsvg from "./svg/back.svg"

export const Feature: React.FunctionComponent<IFeature.IProps> = () => {
  const [MoreFeature, setMoreFeature] = useState(false)
  return (
    <section className={styles["feature-section"]}>
      <Container fluid="lg" className="p-lg-0">
        <Row>
          <Col lg={5} md="5" sm="12">
            <div className={styles.feature}>
              <span className={styles.title}>Features</span>
              <ul className={styles.details}>
                <li>
                  <div className="d-flex align-items-center">
                    <Property />
                    <span className="ml-2">Property Type:</span>
                  </div>
                </li>

                <li>
                  <div className="d-flex align-items-center">
                    <Yearbuilt />
                    <span className="ml-2">Year Built:</span>
                  </div>
                </li>

                <li>
                  <div className="d-flex align-items-center">
                    <Pool />
                    <span className="ml-2">Pool Features:</span>
                  </div>
                </li>

                <li>
                  <div className="d-flex align-items-center">
                    <Parking />
                    <span className="ml-2">Parking Spaces:</span>
                  </div>
                </li>

                <li>
                  <div className="d-flex align-items-center">
                    <View />
                    <span className="ml-2">View of coast, city or hills</span>
                  </div>
                </li>
                {MoreFeature && (
                  <>
                    <li>
                      <div className="d-flex align-items-center">
                        <Basement />
                        <span className="ml-2">Basement</span>
                      </div>
                    </li>

                    <li>
                      <div className="d-flex align-items-center">
                        <Basement />
                        <span className="ml-2">Basement</span>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <Basement />
                        <span className="ml-2">Basement</span>
                      </div>
                    </li>
                  </>
                )}
              </ul>

              <div
                role="button"
                tabIndex={-1}
                onKeyDown={() => {
                  setMoreFeature(!MoreFeature)
                }}
                onClick={() => {
                  setMoreFeature(!MoreFeature)
                }}
                className={`d-flex align-items-center align-items-center ${styles.readmore}`}>
                {MoreFeature ? (
                  <>
                    <Backsvg className="mr-2" />
                    <span>read less</span>
                  </>
                ) : (
                  <>
                    <span>read more</span>

                    <Nextsvg className="ml-2" />
                  </>
                )}
              </div>
            </div>
          </Col>
          <Col lg={7} md="7" sm="12" className="mt-5 mt-lg-0 mt-md-0">
            <div className={styles.nearby}>
              <span className={styles.title}>Nearby</span>
              <Tabs bsPrefix={styles.tab} id="controlled-tab-example">
                <Tab eventKey="School" title="School">
                  <div className={styles["nearby-row"]}>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                  </div>

                  <div className={styles["nearby-row"]}>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Bank" title="Bank">
                  <div className={styles["nearby-row"]}>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                  </div>

                  <div className={styles["nearby-row"]}>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Foodservice" title="Foodservice">
                  <div className={styles["nearby-row"]}>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                  </div>

                  <div className={styles["nearby-row"]}>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Parks" title="Parks">
                  <div className={styles["nearby-row"]}>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                  </div>

                  <div className={styles["nearby-row"]}>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Stores" title="Stores">
                  <div className={styles["nearby-row"]}>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                  </div>

                  <div className={styles["nearby-row"]}>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Other" title="Other">
                  <div className={styles["nearby-row"]}>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                  </div>

                  <div className={styles["nearby-row"]}>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                    <div className={styles["nearby-tab"]}>
                      <div className={styles.top}>
                        <span className={styles.left}>5</span>
                        <span className={styles.right}>B+</span>
                      </div>
                      <span className={styles.bottom}>Castle Heights Elementary School</span>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Feature
