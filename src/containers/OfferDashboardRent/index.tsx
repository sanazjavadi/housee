/**
 *
 * OfferDashboardRent
 *
 */
import React, { memo, useState } from "react"

import { Container } from "react-bootstrap"

import MainHeader from "@Layouts/MainHeader"
import DashboardNav from "./layout/DashboarNav"

// pages
import Offers from "./layout/pages/Offers"
import Contarct from "./layout/pages/Contract"
import RentalListing from "./layout/pages/RentalListing"
import NewOffer from "./layout/pages/NewOffer"
// import OfferModal from './layout/pages/Modal';

// assets
import Path from "./svg/path.svg"

// Scoped Styles
import styles from "./styles/OfferDashboardRent.module.scss"

type IPage = {
  id: number
  component: React.FunctionComponent
  title: string
}

const pages = [
  {
    id: 0,
    component: RentalListing,
    title: "New Rental Listing",
  },
  {
    id: 1,
    component: NewOffer,
    title: "New offer to Rent the home",
  },
  {
    id: 2,
    component: Contarct,
    title: "Contarct",
  },
  {
    id: 3,
    component: Offers,
    title: "Tenant",
  },
]
export function OfferDashboardRent() {
  const [currentPage, setCurrentPage] = useState<IPage>(pages[0])

  const changePage = pageId => {
    setCurrentPage(pages[pageId])
  }
  return (
    <section>
      <MainHeader Theme="light" />
      <DashboardNav changePageHandler={changePage} />
      <Container fluid="lg" className="px-lg-0">
        {currentPage.title && (
          <div className="d-flex align-items-center mt-2">
            <Path />
            <h1 className={styles.title}>{currentPage.title}</h1>
          </div>
        )}
        {/* CurrentPage */}
        <currentPage.component changePageHandler={changePage} />
      </Container>
    </section>
  )
}

export default memo(OfferDashboardRent)
