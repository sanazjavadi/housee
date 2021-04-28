/**
 *
 * MobileForm
 *
 */
import React, { useState } from 'react';

// InterFaces
import Button from '@Components/Button';
import Select from '@Components/Select';
import { IMobileForm } from './MobileForm';

// styles
import styles from './styles/MobileForm.module.scss';

// svg
import Search from './svg/search.svg';

export const MobileForm: React.FunctionComponent<IMobileForm.IProps> = () => {
  const [title, setTitle] = useState('');
  return (
    <form className={styles['hero-mobile-form']}>
      <div className="d-flex flex-column w-75">
        <div className={styles['input-wrapper']}>
          <Select autocomplate hasIcon={<Search />} theme="dd-wrapper" defaultSelected="Find City" />
        </div>
        <div className="d-flex">
          <div className="w-50">
            <Button
              theme="outline-gray"
              size="md"
              height="42px"
              font="13px"
              borderRadius="0px"
              handleClick={() => setTitle('Rent')}
              customStyles={{ borderBottomLeftRadius: '4px', color: '#a7a7a7' }}
              active={title === 'Rent'}>
              Rent
            </Button>
          </div>

          <div className="w-50">
            <Button
              theme="outline-gray"
              size="md"
              height="42px"
              font="13px"
              borderRadius="0px"
              customStyles={{ color: '#a7a7a7' }}
              handleClick={() => setTitle('Buy')}
              active={title === 'Buy'}>
              Buy
            </Button>
          </div>
        </div>
      </div>

      <button type="button" className={styles['search-btn']}>
        Search
      </button>
    </form>
  );
};

export default MobileForm;
