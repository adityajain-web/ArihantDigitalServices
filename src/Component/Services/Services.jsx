import React from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { Skills, DiffServices } from './ServiceComponent/ServiceComponent';
import { SectionHeading } from '../Component';

const useStyles = makeStyles(theme => ({
    root: { backgroundColor: grey[50] },
    margin: { margin: "0 auto" },
}))

const Services = () => {
    const classes = useStyles();
    return (
        <>
            <section>
                <Box className={classes.root} my={5} id="services">
                    <Grid container>
                        <Grid item lg={10} md={11} className={classes.margin}>
                            <Box py={5}>
                                <Box>
                                    <SectionHeading head="What Do We Offer" para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, quam." />
                                    <Grid container>
                                        <Skills />
                                        <DiffServices />
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

export default Services
