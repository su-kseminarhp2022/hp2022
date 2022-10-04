import React from 'react';
import Box from '@mui/material/Box';
import Slideshow from '../components/Slideshow'
import images from "../utils/images.json";

export default function Home() {
    return (
        <Box py={8}>
            <Slideshow sec={5000} images={images.url_list} />
        </Box>
    )
};

