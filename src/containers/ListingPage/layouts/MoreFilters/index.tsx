/**
 *
 * MoreFilters
 *
 */
import React, { useState, useEffect } from "react"
import classNames from "classnames"

// components
import { Container, Row, Col } from "react-bootstrap"
import InputNumber from "@Components/InputNumber"

// Static data
import chunk from "@utils/chunk"
import { filters } from "../../../../staticData/common/data"

import Input from "../../../../components/Input"

// styles
import styles from "./styles/MoreFilters.module.scss"

// svg
import Search from "./svg/search.svg"

// InterFaces
import { IMoreFilters } from "./MoreFilters"

export const MoreFilters: React.FunctionComponent<IMoreFilters.IProps> = ({ setfilterOptions }) => {
  const [search, setsearch] = useState<string>("")
  const [selectedItem, setselectedItem] = useState<any>([])
  const [options, setOptions] = useState(filters)

  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(0)

  useEffect(() => {
    setfilterOptions(selectedItem)
  }, [selectedItem])

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
  return (
    <section className="mt-5 mb-5">
      <Container fluid="xl">
        <Row className="justify-content-center ">
          <Col lg="5" className={styles.warpperinput}>
            <label htmlFor="search" className={styles.label}>
              {" "}
              Search Option
            </label>
            <Input
              value={search}
              change={value => searchHandler(value)}
              theme="default"
              type="text"
              id="search"
              hasIcon={<Search />}
            />
          </Col>
          <Col lg="2">
            <label htmlFor="search" className={styles.label}>
              {" "}
              MinPrice
            </label>
            <InputNumber value={minPrice} change={setMinPrice} />
          </Col>
          <Col lg="2">
            <label htmlFor="search" className={styles.label}>
              {" "}
              MaxPrice
            </label>
            <InputNumber value={maxPrice} change={setMaxPrice} />
          </Col>
        </Row>
        <Row className="justify-content-center mt-4 mb-5 border-bottom pb-4">
          {rows.map(cols => (
            <Col lg="3" md="4" sm="4" xs="12" className={styles.filters}>
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
        </Row>
      </Container>
    </section>
  )
}

export default MoreFilters
