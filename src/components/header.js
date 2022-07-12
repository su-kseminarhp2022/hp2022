import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

const HeaderBar = (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                     size="large"
                     edge="start"
                     color="inherit"
                     aria-label="open drawer"
                     sx={{ mr: 2}}
                     >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                        flexGrow: 1,
                        display: {
                            xs: 'none',
                            sm: 'block'
                        }
                    }}>
                    松蔭大学 金研究室
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
)

export default HeaderBar;