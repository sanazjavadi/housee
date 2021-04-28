/**
 *
 * DashboarNav
 *
 */
import React, { useState } from "react"
import { Container } from "react-bootstrap"

// InterFaces
import { IDashboarNav } from "./DashboarNav"

// styles
import styles from "./styles/DashboarNav.module.scss"

const DashboarNav: React.FunctionComponent<IDashboarNav.IProps> = ({ changePageHandler }) => {
  const [selected, setSelected] = useState(2)
  const activeLink = id => {
    setSelected(id)
    changePageHandler(id)
  }
  const style = { color: "#00bbd8" }
  return (
    <section className={styles["nav-section"]}>
      <Container fluid="xl">
        <div className={styles["nav-list"]}>
          <ul>
            <li>Favourites</li>
            <li> Home Tours </li>
            <li onClick={() => activeLink(1)} style={selected === 1 ? style : null}>
              Offers
            </li>
            <li>Your listings</li>
            <li onClick={() => activeLink(0)} style={selected === 0 ? style : null}>
              Find a Partner
            </li>
            <li onClick={() => activeLink(3)} style={selected === 3 ? style : null}>
              Manage Payments
            </li>
            <li onClick={() => activeLink(2)} style={selected === 2 ? style : null}>
              Contracts
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default DashboarNav
