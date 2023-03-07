import React from 'react';
import './week.scss';

interface Props {
  weekDayNames: string[];
}

function Week(props: Props) {
  const { weekDayNames } = props;
  return (
    <div className="week">
      {weekDayNames.map((dayName) => (
        <div className="day" key={dayName}>
          {dayName}
        </div>
      ))}
    </div>
  );
}

export default Week;
