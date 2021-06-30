import React from 'react';
import { Box, Typography } from '@material-ui/core';

const SectionHeading = (props) => {
    return (
        <>
            <Box py={2}>
                <Typography align="center" variant="h3">{props.head}</Typography>
                <Typography align="center" variant="h6">{props.para}</Typography>
            </Box>
        </>
    )
}

export default SectionHeading;
