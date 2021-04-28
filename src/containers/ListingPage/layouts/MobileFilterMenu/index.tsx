/**
 *
 * MobileFilterMenu
 *
 */
import React, { useState } from 'react';

// components
import InputSlider from '@Components/InputSlider';
import Input from '../../../../components/Input';
import Select from '../../../../components/Select';
import RadialNumberInput from '../../../../components/RadialNumberInput';
import Button from '../../../../components/Button';
import MobileMoreFilter from '../MobileMoreFilters';

// InterFaces
import { IMobileFilterMenu } from './MobileFilterMenu';

// styles
import styles from './styles/MobileFilter.module.scss';

// svg
import Search from './svg/search.svg';

export const MobileFilterMenu: React.FunctionComponent<IMobileFilterMenu.IProps> = ({
  search,
  setSearch,
  filterHouseType,
  filterHouseRoom,
  setHouseType,
  houseType,
  setRoom,
  currentRoom,
  submitFilter,
  minPrice,
  minPriceHandler,
  maxPrice,
  maxPriceHandler,
}) => {
  const [moreOption, setMoreOption] = useState<boolean>(false);
  const updateRoom = (count) => {
    const i = filterHouseRoom.filter((item) => item.id === count);
    if (i[0]) {
      setTimeout(() => {
        setRoom(i[0]);
      }, 1000);
    }
  };

  // Helper State
  const [bathCount, setbathCount] = useState<number>(0);
  const [parkingCount, setparkingCount] = useState<number>(0);
  // Update Bathroom Count
  const setbathCounts = (count) => {
    setbathCount(count);
  };

  const setparkingCounts = (count) => {
    setparkingCount(count);
  };

  return (
    <>
      <div className={styles['mobile-filter']}>
        <div className={`${styles['search-wrapper']} py-3`}>
          <div>
            <Input
              value={search}
              change={(value) => setSearch(value)}
              hasIcon={<Search />}
              theme="menuInput"
              type="text"
            />
          </div>
        </div>
        <div className={`${styles['group-btn']}`}>
          <div className={styles['filter-btn']}>
            <Button
              active={houseType.title === 'Rent'}
              handleClick={() => setHouseType(filterHouseType[0])}
              theme="outline-gray"
              size="lg"
              font="13px"
              height="40px"
              fontFamily="SemiBoldFont"
              borderRadius="0px">
              Rent
            </Button>
          </div>
          <div className={styles['filter-btn']}>
            <Button
              handleClick={() => setHouseType(filterHouseType[1])}
              active={houseType.title === 'Buy'}
              theme="outline-gray"
              size="lg"
              font="13px"
              height="40px"
              fontFamily="SemiBoldFont"
              borderRadius="0px">
              Buy
            </Button>
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles['option-btn']}>
            <Button
              handleClick={() => setMoreOption(!moreOption)}
              theme="outline-gray"
              size="md"
              font="13px"
              height="37px">
              {moreOption ? ' Close Options' : 'More Options'}
            </Button>
          </div>

          <div className={styles['select-btn']}>
            <Select options={[{ title: 'Sort by', id: 1 }]} label="Sort by" theme="dd-wrapper-secondary" />
          </div>
        </div>

        <div className={styles.sliderPrice}>
          <span>Min Price</span>
          <span>{`$ ${minPrice}`}</span>

          <InputSlider thumbSize="slider-sm" value={minPrice} onChange={minPriceHandler} />
        </div>

        <div className={styles.sliderPrice}>
          <span>Max Price</span>
          <span>{`$ ${maxPrice}`}</span>

          <InputSlider thumbSize="slider-sm" value={maxPrice} onChange={maxPriceHandler} />
        </div>

        <div className={styles.filters}>
          <div className={styles.morefilter}>
            <span className="w-25">Beds</span>
            <div className={styles['radial-input']}>
              <RadialNumberInput
                currentCount={Number(currentRoom.id)}
                onChange={(count) => updateRoom(count)}
                max={filterHouseRoom ? filterHouseRoom.length : false}
              />
            </div>
          </div>
          <div className={styles.morefilter}>
            <span className="w-25">Bathroom</span>
            <div className={styles['radial-input']}>
              <RadialNumberInput currentCount={bathCount} onChange={(count) => setbathCounts(count)} max={5} />
            </div>
          </div>
          <div className={styles.morefilter}>
            <span className="w-25">Parking</span>
            <div className={styles['radial-input']}>
              <RadialNumberInput currentCount={parkingCount} onChange={(count) => setparkingCounts(count)} max={5} />
            </div>
          </div>
        </div>
        <div className={styles.cardbtnn}>
          <Button handleClick={() => submitFilter()} theme="primary" size="lg" borderRadius="0px">
            Apply Filters
          </Button>
        </div>
      </div>
      {moreOption && <MobileMoreFilter />}
    </>
  );
};

export default MobileFilterMenu;
