import React from 'react';
import Typography from "@mui/material/Typography";

export default function FooterBar() {
    return (
        <div style={{
            background: "#e3e8c3",
            padding: "30px"
        }}>
            <Typography align="center">
                Copyright &copy; Shoin University - KIM seminar 2022.
            </Typography>
        </div>
    );
}