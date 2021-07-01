import React from 'react';

interface Props {
  minDate: boolean;
  maxDate: boolean;
}
const DateCard: React.FC<Props> = () => {
  return (
    <div>
      <h1>Date Card</h1>
    </div>
  );
};

export default DateCard;
