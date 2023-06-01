'use client';

import { ThemeProvider } from '@mui/material';

import theme from '../theme';

export default function MUIThemeProvider({ children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
