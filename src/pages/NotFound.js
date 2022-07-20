import React from 'react';
import Box from '@mui/material/Box';

export default function NotFound(){
    return (
        <Box py={8}>
            <h1>404 Not Found</h1>
            <p>指定されたページは存在しません。</p>
        </Box>
    );
}