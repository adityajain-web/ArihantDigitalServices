import React from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';
import ProjectCountCard from './ProjectCountComponent/ProjectCountCard/ProjectCountCard';
import { SectionHeading } from '../Component';
import { ProjectCountData } from './ProjectCountData';

const useStyles = makeStyles(theme => ({
    margin: { margin: "0 auto" }
}))

const ProjectCount = () => {
    const classes = useStyles();
    return (
        <>
            <section>
                <Box className="container-fluid" my={5}>
                    <Grid container>
                        <Grid item lg={10} md={11} className={classes.margin}>
                            <Box>
                                <SectionHeading head="More than 1500 websites are designed" />
                                <Box py={3}>
                                    <Grid container spacing={8}>
                                        {ProjectCountData.map((item, index) => { return (<ProjectCountCard key={index} ProjectCount={item.projectCount} project={item.project} />) })}
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

export default ProjectCount;