import React from 'react';
import { Switch } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook';
import { changeLanguage } from '../../store/languageSlice';
import './header.scss';
import img from '../../img/img';

export default function Header() {
  const dispatch = useAppDispatch();
  const lang: string = useAppSelector((state) => state.language.language);
  const changeLanguageState = (str: string) => {
    dispatch(changeLanguage(str));
  };
  console.log(lang);
  return (
    <div className="header">
      <div className="logoRow">
        <div className="logoBox">
          <img src={img.coffee} alt="coffee" height={100} />
          <NavLink className="logo" to="/">
            SiteLogo
          </NavLink>
        </div>
        <nav className="navigation">
          <NavLink className="link" to="/">
            main
          </NavLink>
          <NavLink className="link" to="/second">
            second
          </NavLink>
          <NavLink className="link" to="/next">
            next
          </NavLink>
        </nav>
        <div className="langBox">
          ru
          <Switch
            onChange={() => {
              if (lang === 'ru') {
                changeLanguageState('en');
              } else changeLanguageState('ru');
            }}
            defaultChecked
          />
          en
        </div>
      </div>
    </div>
  );
}
