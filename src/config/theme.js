import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#639DA9',
            light: '#85b9c4',
            dark: '#2D5868',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#2D5868',
            light: '#3d7284',
            dark: '#1e3b48',
            contrastText: '#ffffff',
        },
        background: {
            default: '#F1F1F1',
            paper: '#ffffff',
        },
        text: {
            primary: '#333333',
            secondary: '#555555',
        },
    },
    typography: {
        fontFamily: '"Lexend", sans-serif',
        h1: {
            fontFamily: '"Lexend", sans-serif',
            fontWeight: 500,
        },
        h2: {
            fontFamily: '"Lexend", sans-serif',
            fontWeight: 500,
        },
        h3: {
            fontFamily: '"Lexend", sans-serif',
            fontWeight: 500,
        },
        h4: {
            fontFamily: '"Lexend", sans-serif',
            fontWeight: 500,
        },
        h5: {
            fontFamily: '"Lexend", sans-serif',
            fontWeight: 500,
        },
        h6: {
            fontFamily: '"Lexend", sans-serif',
            fontWeight: 500,
        },
        button: {
            fontFamily: '"Lexend", sans-serif',
        },
        body1: {
            fontFamily: '"Lexend", sans-serif',
        },
        body2: {
            fontFamily: '"Lexend", sans-serif',
        },
        subtitle1: {
            fontFamily: '"Lexend", sans-serif',
        },
        subtitle2: {
            fontFamily: '"Lexend", sans-serif',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        * {
          font-family: 'Lexend', sans-serif;
        }
      `,
        },
    },
});

export default theme;