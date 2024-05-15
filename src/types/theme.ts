import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    type: string;
    colors: AppColors;
  }

  export interface AppColors {
    primary: string;
    secondary: string;
    text: string;
    lightText: string;
    error: string;
  }
}
