import React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#e3e8c3',
        },
    },
});

export default function FooterBar() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{}} bgcolor="primary.main" py={5}>
                <Typography align="center">
                    Copyright &copy; Shoin University - KIM seminar 2022.
                </Typography>
            </Box>
        </ThemeProvider>
    );
}