import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hook';
import './main.scss';

// --------------------------------------------------------------
interface TextKey {
  textText: string;
}
interface Text {
  [key: string]: TextKey;
}
const text: Text = {
  ru: {
    textText: 'Русский текст',
  },
  en: {
    textText: 'English text',
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
        {text[lang].textText}
      </div>
    </div>
  );
}

export default Main;
