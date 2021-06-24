import { Box, Container, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { GlobalStyle } from "./GlobalStyle";


/**
 * Default config (no changes)
 */
export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const globalTypes = {
    containerSize: {
        name: 'Container size',
        // Text that will be shown on icon hover
        description: 'Global container\'s size',
        defaultValue: 'xs',
        toolbar: {
            /**
             * You can check all available icons by this link:
             * https://storybook.js.org/docs/riot/workflows/faq#what-icons-are-available-for-my-toolbar-or-my-addon
             */
            icon: 'circlehollow',
            items: ['xs', 'sm', 'md', 'lg', 'xl'],
            // Should "Container size" be shown, or just the "circlehollow" icon
            showName: true,
        },
    },
    theme: {
        name: 'Theme',
        description: 'Global theme',
        defaultValue: 'light',
        toolbar: {
            icon: 'lightning',
            items: ['dark', 'light'],
            showName: true,
        },
    },
};

const darkTheme = createMuiTheme({
    palette: {
        background: {
            default: '#272727'
        },
        primary: {
            main: '#c10e0e',
        },
    },
});

const lightTheme = createMuiTheme({
    palette: {
        background: {
            default: '#ffffff'
        },
        palette: {
            primary: {
                main: '#3f51b5',
            },
        },
    },
});

export const decorators = [
    (Story, context) => {

        const theme = context.globals.theme === 'light' ? lightTheme : darkTheme;

        return (
            <MuiThemeProvider theme={theme}>
                {/* Reset storybook paddings */}
                <GlobalStyle/>
                <Box bgcolor="background.default" height="100vh" pt='20px'>
                    <Container maxWidth={context.globals.containerSize}>
                        <Story/>
                    </Container>
                </Box>
            </MuiThemeProvider>
        );
    },
];
