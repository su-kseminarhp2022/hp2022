import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu'

const header = (
    <Box sx={{flexGrow: 1}}>
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
            </Toolbar>
        </AppBar>
    </Box>
)
