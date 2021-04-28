/**
 *
 * RequestTour
 *
 */
import React, { memo, useState } from "react"

import { Container, Row, Col } from "react-bootstrap"

import MainHeader from "@Layouts/MainHeader"

// Pagaes
import showTour from "./layout/pages/showTour"
import Verification from "./layout/pages/verification"
import ChooseMethode from "./layout/pages/ChooseMethode"
import ChooseCall from "./layout/pages/ChooseCall"
import ChooseDate from "./layout/pages/ChooseDate"

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
    component: ChooseCall,
  },
  {
    id: 3,
    component: ChooseDate,
  },

  {
    id: 4,
    component: Verification,
  },
  {
    id: 5,
    component: showTour,
  },
]

const RequestTour = () => {
  const [currentPage, setCurrentPage] = useState<IPage>(pages[0])

  const changePage = pageId => {
    setCurrentPage(pages[pageId])
  }

  return (
    <div>
      <MainHeader Theme="light" />
      <Container fluid="lg" className="mt-5 px-lg-0">
        <Row>
          <Col>
            {/* CurrentPage */}
            <currentPage.component changePageHandler={changePage} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default memo(RequestTour)
