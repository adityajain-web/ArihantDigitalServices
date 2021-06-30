import React from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';
import { SectionHeading } from '../Component';
import { TestimonialData } from './TestimonialData';
import TestimonialCard from './TestimonialComponent/TestimonialCard/TestimonialCard';

const useStyles = makeStyles(theme => ({
    margin: { margin: "0 auto" }
}))

const Testimonial = () => {
    const classes = useStyles();
    return (
        <>
            <section>
                <Box className="container-fluid  my-5">
                    <Grid container>
                        <Grid item lg={10} md={11} className={classes.margin}>
                            <Box>
                                <SectionHeading head="Our Happy Client" para="Our satisfied client says" />
                                <Box>
                                    <Grid container spacing={10}>
                                        {TestimonialData.map((item, index) => { return (<TestimonialCard key={index} clientName={item.clientName} designation={item.clientDesignation} />) })}
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </>
    )
}

export default Testimonial
