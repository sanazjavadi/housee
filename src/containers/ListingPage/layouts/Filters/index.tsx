/* eslint-disable jsx-a11y/control-has-associated-label */
/**
 *
 * Filters
 *
 */
import React, { useState } from "react"
import { Container } from "react-bootstrap"
import Select from "@Components/Select"

// InterFaces
// eslint-disable-next-line import/no-unresolved
import { filterHouseType, filterHouseRoom } from "@Static/Listing/data"

// hooks
import useFormFields from "@Services/hooks/useFormFields"

// Interfaces
import { IFilters } from "./Filters"

// Static Data

// components
import Button from "../../../../components/Button"
import Input from "../../../../components/Input"
import MoreFilters from "../MoreFilters"
import MobileFilterMenu from "../MobileFilterMenu"

// styles
import styles from "./styles/Filters.module.scss"

// svg
import Search from "./svg/search.svg"

export const Filters: React.FunctionComponent<IFilters.IProps> = ({ filterHandler }) => {
  const [moreFilters, setMoreFilters] = useState<boolean>(false)
  const [moreMobileFilters, setMoreMobileFilters] = useState<boolean>(false)
  const [filterOptions, setfilterOptions] = useState<any>([])

  // const [minPrice, setminPrice] = useState<number>(1000);
  // const [maxPrice, setmaxPrice] = useState<number>(2000);

  const { formFields, createChangeHandler } = useFormFields({
    search: "",
    type: filterHouseType[0],
    roomCount: filterHouseRoom[1],
    bathroomCount: 1,
    parkingCount: 1,
    minPrice: 0,
    maxPrice: 0,
  })

  const changeOptions = options => {
    setfilterOptions(options)
  }

  const searchHandler = () => {
    console.log(filterOptions)
    console.log(formFields)
    filterHandler({ filterOptions, formFields })
  }

  const filterBySearch = v => {
    createChangeHandler("search")(v)
    searchHandler()
  }
  const [btnTitle, setBtnTitle] = useState("filter")

  return (
    <>
      <section className={styles["filter-section"]}>
        <Container fluid="xl" className="p-lg-0 d-flex justify-content-center">
          <div className={styles.wrapperFilter}>
            <div className={styles.inputWrapper}>
              {/* {formFields.roomCount ? formFields.roomCount.title : null}
              {formFields.type ? formFields.type.title : null}
              {formFields.search}
              {formFields.minPrice}
              {formFields.maxPrice} */}
              <Input
                value={formFields.search}
                change={v => filterBySearch(v)}
                theme="default"
                type="text"
                placeholder="Los Angeles"
                hasIcon={<Search />}
              />
            </div>
            <div className={styles.switchWrappers}>
              <div className={styles.selectWrapper}>
                {/* {formFields.type.title} */}
                <Select
                  defaultSelected={formFields.type.title}
                  selectOnChange={createChangeHandler("type")}
                  options={filterHouseType}
                  label="Rent"
                  theme="dd-wrapper-secondary"
                />
              </div>
              <div className={styles.selectWrapper}>
                <Select
                  autocomplate
                  defaultSelected="Beds"
                  selectOnChange={createChangeHandler("roomCount")}
                  options={filterHouseRoom}
                  label="Beds"
                  theme="dd-wrapper-secondary"
                />
              </div>
              <div className={styles.selectWrapper}>
                {/* <Select label="Min price" theme="dd-wrapper-secondary" /> */}
                {/* <InputNumber change={createChangeHandler('minPrice')} value={formFields.minPrice} /> */}
                <Select
                  defaultSelected="Bathroom"
                  selectOnChange={createChangeHandler("bathroomCount")}
                  options={filterHouseRoom}
                  label="Beds"
                  theme="dd-wrapper-secondary"
                />
              </div>
              <div className={styles.selectWrapper}>
                {/* <InputNumber change={createChangeHandler('maxPrice')} value={formFields.maxPrice} /> */}
                <Select
                  defaultSelected="Parking"
                  selectOnChange={createChangeHandler("parkingCount")}
                  options={filterHouseRoom}
                  label="Bath"
                  theme="dd-wrapper-secondary"
                />
              </div>
            </div>

            <div className={styles["btn-group"]}>
              <div className={styles.filterbtn}>
                <Button theme="outline" size="md" height="37px" handleClick={() => setMoreFilters(!moreFilters)}>
                  {moreFilters ? "Less" : "More"}
                  Filters
                </Button>
              </div>

              <div className={styles.searchbtn}>
                <Button theme="primary" size="md" height="37px" handleClick={() => searchHandler()}>
                  Search
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* filter buttons in mobile */}

      <section className={styles.FiltersMobile}>
        <div className="w-100 d-flex">
          <div className="w-50">
            <Button theme="outline-gray" size="lg" height="47px" font="13px" borderRadius="0px">
              Hide Map
            </Button>
          </div>

          <div className="w-50">
            <Button
              theme="outline-gray"
              font="13px"
              height="47px"
              borderRadius="0px"
              size="lg"
              handleClick={() => setMoreMobileFilters(!moreFilters)}>
              Filters
            </Button>
          </div>
        </div>
      </section>
      {/* backdrop */}
      {moreMobileFilters ? (
        <div
          className={styles.backDrop}
          onClick={() => setMoreMobileFilters(false)}
          tabIndex={-1}
          role="button"
          onKeyDown={() => setMoreMobileFilters(false)}
        />
      ) : null}
      {/* backdrop */}
      {moreMobileFilters && (
        <MobileFilterMenu
          filterHouseRoom={filterHouseRoom}
          filterHouseType={filterHouseType}
          setRoom={createChangeHandler("roomCount")}
          currentRoom={formFields.roomCount}
          houseType={formFields.type}
          setHouseType={createChangeHandler("type")}
          setSearch={createChangeHandler("search")}
          search={formFields.search}
          submitFilter={searchHandler}
          minPrice={formFields.minPrice}
          minPriceHandler={createChangeHandler("minPrice")}
          maxPriceHandler={createChangeHandler("maxPrice")}
          maxPrice={formFields.maxPrice}
        />
      )}
      {moreFilters && <MoreFilters setfilterOptions={options => changeOptions(options)} />}
    </>
  )
}

export default Filters
