import React from 'react';
import { Box, Button, Grid, Paper } from '@material-ui/core';
import { PricingCardTitle, PlanDetails } from '../PricingComponent';


const PricingCard = (props) => {
    return (
        <>
            <Grid item lg={4} md={4} sm={4} xs={12}>
                <Box className="grow" component={Paper} py={2}>
                    <PricingCardTitle title={props.title} />
                    <PlanDetails price={props.price} facilities={props.facilities} />
                    <Box className="p-3">
                        <Button variant="outlined" color="primary">
                            Purchase
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default PricingCard
