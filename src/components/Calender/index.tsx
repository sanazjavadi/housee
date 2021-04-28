/**
 *
 * DataPicker
 *
 */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

// Styles
// import styles from './styles/calender.module.scss';

// InterFaces
import { ICalender } from './Calender';

export const Calender: React.FunctionComponent<ICalender.IProps> = () => {
  // Date picker State
  const [datePickerValue, setDatePickerValue] = useState<any>(new Date());
  // const [isOpen, setisOpen] = useState<boolean>(false);

  return (
    <div>
      <DatePicker
        dateFormat="yyyy"
        showYearPicker
        selected={datePickerValue}
        onChange={(date) => setDatePickerValue(date)}
      />
    </div>
  );
};

export default Calender;
