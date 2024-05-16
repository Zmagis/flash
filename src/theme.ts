import {AppColors, DefaultTheme} from 'styled-components/native';

const colors: AppColors = {
  primary: '#39015D',
  secondary: '#9884FC',
  text: '#000000',
  lightText: '#fafbfc',
  disabled: '#D3D3D3',
  error: '#FF0000',
};

export type Colors = keyof typeof colors;

export const lightTheme: DefaultTheme = {
  type: 'light',
  colors,
};
