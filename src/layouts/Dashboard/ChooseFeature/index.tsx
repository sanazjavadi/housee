/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react"
import classNames from "classnames"

import { Container, Row, Col } from "react-bootstrap"
import Button from "@Components/Button"
import Input from "@Components/Input"
import InputRadio from "@Components/RadioButton"
import Link from "@Components/Link"

// static data
import chunk from "@utils/chunk"
import { IChooseFeature } from "./ChooseFeature"
import { filters } from "../../../staticData/common/data"

// styles
import styles from "./styles/ChooseFeature.module.scss"

// assets
import Cancel from "./svg/cancel.svg"
import Search from "./svg/search.svg"
import PlusIcon from "./svg/plus.svg"

const index: React.FunctionComponent<IChooseFeature.IProps> = ({ changePageHandler }) => {
  const [search, setsearch] = useState<string>("")
  const [selectedItem, setselectedItem] = useState<any>([])
  const [options, setOptions] = useState(filters)
  const filteredSuggestions = filters.filter(option => option.title.toLowerCase().indexOf(search.toLowerCase()) > -1)

  const rows = chunk(options, 5)

  const searchHandler = value => {
    if (value.length === 0) {
      setsearch(value)
      setOptions(filters)
      return true
    }

    setOptions(filteredSuggestions)
    setsearch(value)
    return true
  }

  const selectItem = item => {
    // de Select Item
    const existed = selectedItem.filter(i => i.title === item.title)
    let curentItems

    if (existed.length !== 0) {
      curentItems = selectedItem.filter(i => i.title !== item.title)
      setselectedItem(curentItems)
    } else {
      // add Item
      const items = selectedItem
      items.push(item)
      setselectedItem(items)
    }

    // change option
    const soptions = options.map(i => {
      if (i.title === item.title) {
        i.status = !i.status
      }
      return i
    })

    setOptions(soptions)
  }
  const [Utilities, setUtilities] = useState<string>("Hydro")

  return (
    <section className="wow fadeInUp">
      <Container fluid="lg" className="px-lg-0">
        <Row className="justify-content-center ">
          <Col lg="9" xs="11" className={styles.warpperinput}>
            <p className={styles.title}>Property features</p>
            <Input
              value={search}
              change={value => searchHandler(value)}
              theme="default"
              type="text"
              hasIcon={<Search />}
            />
          </Col>
        </Row>
        <Row className="justify-content-center ">
          {rows.map(cols => (
            <Col lg="3" md="4" sm="4" xs="11" className={`${styles.filters}`}>
              {cols.map((filter, index) => (
                <div
                  onKeyPress={() => selectItem(filter)}
                  role="button"
                  tabIndex={-1}
                  onClick={() => selectItem(filter)}
                  key={index}
                  className={classNames("mt-3", { [styles.selected]: filter.status })}>
                  <filter.svg />
                  <span className="pl-lg-4 pl-2">{filter.title}</span>
                </div>
              ))}
            </Col>
          ))}
          <Col lg="9" md="12" sm="12" xs="11" className={`d-flex align-items-center mt-3  ${styles["add-more-item"]}`}>
            <PlusIcon />
            <span className="pl-lg-4 pl-2">Add more option</span>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col lg="6" xs="11" className={styles.utility}>
            <span>Utilities included</span>
            <div className="d-flex justify-content-between flex-wrap w-100 mt-3">
              <div className={styles.inputSpan}>
                <InputRadio
                  inputType="radioButton"
                  label="Hydro"
                  name="Utilities"
                  isChecked={Utilities === "Hydro"}
                  value="Hydro"
                  handleChange={val => setUtilities(val.target.value)}
                />
              </div>
              <div className={styles.inputSpan}>
                <InputRadio
                  inputType="radioButton"
                  label="Heat"
                  name="Utilities"
                  isChecked={Utilities === "Heat"}
                  value="Heat"
                  handleChange={val => setUtilities(val.target.value)}
                />
              </div>
              <div className={styles.inputSpan}>
                <InputRadio
                  inputType="radioButton"
                  label="Water"
                  name="Utilities"
                  isChecked={Utilities === "Water"}
                  value="Water"
                  handleChange={val => setUtilities(val.target.value)}
                />
              </div>
              <div className={styles.inputSpan}>
                <InputRadio
                  inputType="radioButton"
                  label="TV/Cable"
                  name="Utilities"
                  isChecked={Utilities === "TV"}
                  value="TV"
                  handleChange={val => setUtilities(val.target.value)}
                />
              </div>
            </div>
          </Col>
          <Col lg="3" md="4" sm="8" xs="11" className="mb-4">
            <div className={`${styles.nextbtn}`}>
              <Button handleClick={() => changePageHandler(4)}>Next</Button>
              <div className="w-100 mt-2">
                <Button theme="outline" handleClick={() => changePageHandler(2)}>
                  Back
                </Button>
              </div>
              <Link href="/">
                <div className={`${styles.cancel} d-flex align-items-center mt-3`}>
                  <Cancel />
                  <span className="ml-1">Cancel</span>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default index
