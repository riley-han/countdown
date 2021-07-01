import React, { ReactFragment, ReactInstance, ReactText } from 'react';
import styled from 'styled-components';

const containerDiv: ReactInstance = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  background-color: lightblue;
`;

interface Props {
  minDate: boolean;
  maxDate: boolean;
  selectedDate: Date;
  onDateSelect: () => void;
  

}
const DateCard: React.FC<Props> = ({
  minDate,
  maxDate,
  selectedDate,
  onDateSelect,
}) => {
  return <containerDiv{
      minDate, 
      maxDate, 
      selectedDate, 
      onDateSelect({onselect})}></containerDiv>;
};

export default DateCard;
