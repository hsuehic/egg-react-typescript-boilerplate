import { combineReducers } from 'redux';
import { getCookie, createCookie } from '../utils/cookie';
import { SET_LOCALE, SET_THEME_STYLES } from './constant';

import { State, Action } from './redux';
import { CSSProperties } from 'react';

const COOKIE_NAME_LOCALE = 'locale';
const DEFAULT_LOCALE: Locale =
  getCookie(COOKIE_NAME_LOCALE) === 'zh-CN' ? 'zh-CN' : 'en-US';

export default combineReducers<State>({
  locale: (
    state: Locale = DEFAULT_LOCALE,
    action: Action<string, Locale>,
  ): Locale => {
    const { type, payload } = action;
    if (type === SET_LOCALE) {
      createCookie(COOKIE_NAME_LOCALE, payload);
      return payload;
    }
    return state;
  },
  themeStyle: (
    state: CSSProperties = {},
    action: Action<string, CSSProperties>,
  ) => {
    if (action.type === SET_THEME_STYLES) {
      return {
        ...state,
        ...action.payload,
      };
    }
    return state;
  },
});
