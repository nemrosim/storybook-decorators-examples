import { Box, Button, Container } from '@material-ui/core';
import React from 'react';

export const App = () => (
    <Box bgcolor="background.default" height="100vh">
        <Container maxWidth='xs'>
            <Button variant='contained' color='primary' fullWidth={true}>Hello</Button>
        </Container>
    </Box>
);
