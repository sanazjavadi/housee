/**
 *
 * DetailList
 *
 */
import React from "react"

// InterFaces
import { Container } from "react-bootstrap"
import { IDetailList } from "./DetailList"

// styles
import styles from "./styles/DetailList.module.scss"

export const DetailList: React.FunctionComponent<IDetailList.IProps> = () => (
  <section className={styles["detail-section"]}>
    <Container fluid="xl">
      <div className={styles["detail-list"]}>
        <ul>
          <li>Overview</li>
          <li>Property Details</li>
          <li>Property History</li>
          <li>Tour Insights</li>
          <li>Public</li>
          <li>Facts</li>
          <li>Neighborhood</li>
          <li>Similar Homes</li>
        </ul>
      </div>
    </Container>
  </section>
)

export default DetailList
