/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
/**
 *
 * Select
 *
 */
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

// Types
import { ISelect } from './Select';

// Styles
import styles from './styles/select.module.scss';

// svg
import Arrow from './svg/arrow.svg';
import RealState from './svg/RealEstate.svg';

export const SelectDropDown: React.FunctionComponent<ISelect.IProps> = ({
  theme,
  options,
  autocomplate,
  selectOnChange,
  defaultSelected,
  hasIcon,
}) => {
  const [listOpen, setListOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [showTextInput, setShowTextInput] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>(defaultSelected || options[0].title);
  const [selectedOptions, setSelectedOptions] = useState<any>(options);

  // const labelTitle = () => (selectedItem ? selectedItem.title : search);

  // const [keys, setKeys] = useState<any>();
  // const [headerTitle, setHeaderTitle] = useState<string>('Your City');

  // const customStyle = {
  //   control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  //   option: (provided) => ({
  //     ...provided,
  //     borderBottom: '1px dotted pink',
  //     color: 'blue',
  //     padding: 20,
  //   }),
  // };

  // const CustomOption = ({ innerProps, isDisabled, theme }) => (!isDisabled ? <div {...innerProps} /> : null);

  const toggleList = () => {
    setListOpen(!listOpen);
  };
  const filterTitle = (title) => {
    const length = 15;
    return title.length > 15 ? `${title.substring(0, length)} ...` : title;
  };

  // Filter our suggestions that don't contain the user's input
  const filteredSuggestions = options.filter((option) => option.title.toLowerCase().indexOf(search.toLowerCase()) > -1);

  // eslint-disable-next-line consistent-return
  const searchHandler = (value) => {
    if (value.length === 0) {
      setSearch(value);
      setListOpen(false);
      setSelectedOptions(options);
      return false;
    }
    setSearch(value);
    setSelectedOptions(filteredSuggestions);
    if (filteredSuggestions.length !== 0) {
      setListOpen(true);
    } else {
      setListOpen(false);
    }
  };

  function toggleItem(item) {
    setSelectedItem(item.title);
    if (selectOnChange) {
      selectOnChange(item);
    }
    setShowTextInput(false);
    setListOpen(false);

    // const temp = options;
    // temp[id].selected = !temp[id].selected;
    // // console.log(temp[id].selected);
  }
  const Item: React.FunctionComponent<any> = ({ item }) => (
    <li
      role="button"
      onKeyDown={() => toggleItem(item)}
      className={item.svg ? 'py-4' : ''}
      key={item.id}
      onClick={() => toggleItem(item)}>
      {item.svg && <item.svg className="pr-2" />}
      {item.title}
    </li>
  );

  const ListOption: React.FunctionComponent<any> = ({ list }) => (
    <ul className={styles['dd-list']}>
      {list.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );

  return (
    <OutsideClickHandler
      display="contents"
      onOutsideClick={() => {
        if (listOpen) {
          setListOpen(false);
        }
      }}>
      <div
        className={styles[theme]}
        role="button"
        tabIndex={0}
        onClick={() => toggleList()}
        onKeyDown={() => toggleList()}>
        <div
          tabIndex={0}
          role="button"
          onKeyDown={() => setShowTextInput(true)}
          onClick={() => setShowTextInput(true)}
          className={styles['dd-header']}>
          <div
            role="button"
            tabIndex={0}
            className={styles['dd-header-title']}
            onClick={() => toggleList()}
            onKeyDown={() => toggleList()}>
            <span className={styles.Icon}>{hasIcon}</span>
            {autocomplate && showTextInput ? (
              <input
                onClick={() => toggleList()}
                onKeyDown={() => toggleList()}
                onChange={(e) => searchHandler(e.target.value)}
                autoFocus
                className={styles.input}
                type="text"
              />
            ) : (
              filterTitle(selectedItem)
            )}
          </div>

          {listOpen ? (
            <Arrow className={styles.arrow} onClick={() => toggleList()} onKeyDown={() => toggleList()} />
          ) : (
            <Arrow className={styles.arrow} onClick={() => toggleList()} onKeyDown={() => toggleList()} />
          )}
        </div>
        {listOpen && <ListOption list={selectedOptions} />}
      </div>
    </OutsideClickHandler>
  );
};

// default props
SelectDropDown.defaultProps = {
  theme: 'dd-wrapper',
  autocomplate: false,
  label: 'title',
  options: [
    {
      id: 0,
      title: 'Vancouver, BC, Canada',
      selected: false,
      key: 'location',
    },
    {
      id: 1,
      title: 'Downtown Vancouver',
      selected: false,
      key: 'location',
    },
    {
      id: 2,
      title: 'West Vancouverlifornia',
      selected: false,
      key: 'location',
    },
    {
      id: 3,
      title: 'Nourth Vancouver',
      selected: false,
      key: 'location',
    },
    {
      id: 4,
      title: 'Vancouver Regional District ',
      selected: false,
      key: 'location',
      svg: RealState,
    },
  ],
};

export default SelectDropDown;
