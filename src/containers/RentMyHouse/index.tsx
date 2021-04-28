/**
 *
 * RentmyHouse
 *
 */
import React, { memo, useState } from "react"

import { Container } from "react-bootstrap"

import MainHeader from "@Layouts/MainHeader"

// Pagaes
import ChooseFeature from "@Layouts/Dashboard/ChooseFeature"
import NearBy from "@Layouts/Dashboard/NeadrBy"
import EnterFacts from "@Layouts/Dashboard/EnterFacts"
import EnterAddress from "@Layouts/Dashboard/EnterAddress"
import ChooseDate from "@Layouts/Dashboard/ChooseDate"
import ChooseMethode from "./layout/pages/ChooseMethode"
import OpenHouse from "./layout/pages/OpenHouse"
import RentalListing from "./layout/pages/RentalListing"
import Media from "./layout/pages/Media"
import SellPremium from "./layout/pages/SellPremium"
import Vertification from "./layout/pages/verification"
import Creditcard from "./layout/pages/CreditCard"

type IPage = {
  id: number
  component: React.FunctionComponent
}

const pages = [
  {
    id: 1,
    component: ChooseMethode,
  },
  {
    id: 2,
    component: EnterAddress,
  },
  {
    id: 3,
    component: EnterFacts,
  },
  {
    id: 4,
    component: ChooseFeature,
  },
  {
    id: 5,
    component: NearBy,
  },
  {
    id: 6,
    component: ChooseDate,
  },

  {
    id: 7,
    component: OpenHouse,
  },
  { id: 8, component: RentalListing },
  { id: 9, component: Media },
  {
    id: 10,
    component: SellPremium,
  },
  {
    id: 11,
    component: Vertification,
  },
  {
    id: 12,
    component: Creditcard,
  },
]

export function RentmyHouse() {
  const [currentPage, setCurrentPage] = useState<IPage>(pages[0])

  const changePage = pageId => {
    setCurrentPage(pages[pageId])
  }

  return (
    <>
      <MainHeader Theme="light" />
      <Container fluid="lg" className="pt-5 mb-5 mt-5 pb-5 px-lg-0 ">
        {/* <Row className="justify-content">
          <Col style={{ marginBottom: '10rem' }} className="mb-5"> */}
        {/* CurrentPage */}
        <currentPage.component changePageHandler={changePage} />
        {/* </Col>
        </Row> */}
      </Container>
    </>
  )
}

export default memo(RentmyHouse)
