import { CSSProperties } from 'react';

export interface State {
  locale: Locale;
  themeStyle: CSSProperties;
}
export interface Action<T, P> {
  type: T;
  payload: P;
}
