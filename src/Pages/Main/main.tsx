import React, { useEffect, useState } from 'react';
import Week from '../../components/Week/week';
import { useAppSelector } from '../../hook';
import './main.scss';

// --------------------------------------------------------------
interface TextKey {
  weekDayNames: string[];
  week: string;
}
interface Text {
  [key: string]: TextKey;
}
const text: Text = {
  ru: {
    weekDayNames: [
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье',
    ],
    week: 'Неделя',
  },
  en: {
    weekDayNames: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    week: 'Week',
  },
};
// ------------------------------------------------------------------

function Main() {
  const [mainState, setMainState] = useState<string>('');
  useEffect(() => {
    setMainState('main');
  }, []);
  const lang: string = useAppSelector(
    (state) => state.language.language,
  );
  return (
    <div className="main">
      <div className="title">
        {mainState}
      </div>
      <div className="text">
        {text[lang].week}
      </div>
      <div className="weekContainer">
        <Week weekDayNames={text[lang].weekDayNames} />
      </div>
    </div>
  );
}

export default Main;
