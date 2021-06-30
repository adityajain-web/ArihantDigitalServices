import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    border: { borderBottom: `2px solid ${theme.palette.grey[300]}` }
}))

const PricingCardTitle = (props) => {
    const classes = useStyles();
    return (
        <>
            <Box py={1} className={classes.border}>
                <Typography variant="h5" align="center">{props.title}</Typography>
            </Box>
        </>
    )
}

export default PricingCardTitle
