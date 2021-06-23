import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { green, purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
});

export const App = () => (
    <ThemeProvider theme={theme}>
        <div className="App">
            Hello world
        </div>
    </ThemeProvider>
);
