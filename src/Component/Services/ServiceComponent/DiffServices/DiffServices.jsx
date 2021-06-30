import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { DiffServiceData } from './DiffServicesData';
import DServices from './DiffServiceComponent/Services/DServices';

const DiffServices = () => {
    return (
        <>
            <Grid item md={6} sm={6} xs={12}>
                <Box px={5}>
                    {DiffServiceData.map((item, index) => {
                        return (<DServices key={index} mediaIcon={item.mediaIcon} mediaTitle={item.mediaTitle} />)
                    })}
                </Box>
            </Grid>
        </>
    )
}

export default DiffServices
