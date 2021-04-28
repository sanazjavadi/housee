/**
 *
 * SellMyHouse
 *
 */
import React, { memo, useState } from "react"

import { Container } from "react-bootstrap"

import MainHeader from "@Layouts/MainHeader"

// pages
import ChooseFeature from "@Layouts/Dashboard/ChooseFeature"
import NearBy from "@Layouts/Dashboard/NeadrBy"
import EnterFacts from "@Layouts/Dashboard/EnterFacts"
import EnterAddress from "@Layouts/Dashboard/EnterAddress"
import ChooseDate from "@Layouts/Dashboard/ChooseDate"
import ChooseMethode from "./layout/pages/ChooseMethode"
import OpenHouse from "./layout/pages/OpenHouse"
import SellPremium from "./layout/pages/SellPremium"
import SellPrice from "./layout/pages/SellPrice"
import Media from "./layout/pages/Media"
import Verification from "./layout/pages/verification"
import CreditCard from "./layout/pages/CreditCard"

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
  {
    id: 8,
    component: SellPrice,
  },
  {
    id: 9,
    component: Media,
  },
  {
    id: 10,
    component: SellPremium,
  },
  {
    id: 11,
    component: Verification,
  },
  {
    id: 12,
    component: CreditCard,
  },
]

export function SellMyHouse() {
  const [currentPage, setCurrentPage] = useState<IPage>(pages[0])

  const changePage = pageId => {
    setCurrentPage(pages[pageId])
  }
  return (
    <div>
      <MainHeader Theme="light" />
      <Container fluid="lg" className="py-5 my-5  px-lg-0">
        {/* CurrentPage */}
        <currentPage.component changePageHandler={changePage} />
      </Container>
    </div>
  )
}

export default memo(SellMyHouse)
