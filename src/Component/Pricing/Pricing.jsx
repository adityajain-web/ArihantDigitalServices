import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { SectionHeading } from '../Component';
import { PricingCard } from './PricingComponent/PricingComponent';
import { PricingData } from './PricingData';
import './Css/Pricing.scss'

const Pricing = () => {
    return (
        <>
            <section>
                <Box my={5} className="pricingWrapper" id="pricing">
                    <Box>
                        <SectionHeading head="Our Pricing" />
                        <Box py={4}>
                            <Grid container spacing={5}>
                                {PricingData.map((item, index) => {
                                    return (<PricingCard key={index} title={item.plan} price={item.price} facilities={item.services} />)
                                })}
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </section>
        </>
    )
}

export default Pricing;