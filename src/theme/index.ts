import {
  BreakpointsOptions,
  Components,
  createTheme,
  Theme,
} from '@mui/material';
import type {} from '@mui/x-data-grid/themeAugmentation';

//todo#region Declare Modules
declare module '@mui/material/styles' {
  //! Breakpoints
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    xxxl: true;
  }

  //! Palette
  interface Palette {
    newColor: Palette['primary'];
  }

  //* Allow configuration using `createTheme`
  interface PaletteOptions {
    newColor?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    newColor: true;
  }
}

declare module '@mui/material/Typography' {
  //* Define new name variants
  interface TypographyPropsVariantOverrides {
    'new-variant': true;
  }
}
//todo#endregion

//todo#region Palette & Typography
let theme = createTheme({
  palette: {
    newColor: {
      main: '#ffffff',
      contrastText: '#333333',
    },
  },

  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});
//todo#endregion

//todo#region Breakpoints & Components
theme = createTheme(theme, {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1680,
      xxxl: 1920,
    },
  } as BreakpointsOptions,
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'new-variant' },
          style: {
            //Something css
          },
        },
      ],
    },
  } as Components<Omit<Theme, 'components'>>,
});
//todo#endregion

export default theme;
