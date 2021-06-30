import React from 'react';
import CountUp from 'react-countup';
import { Box, Grid, Typography, Paper } from '@material-ui/core';

const ProjectCountCard = (props) => {
    return (
        <>
            <Grid item lg={3} md={6} sm={6} xs={12}>
                <Paper>
                    <Box py={4}>
                        <Typography align="center" variant="h4"><CountUp start={0} end={props.ProjectCount} duration={5} /></Typography>
                        <Typography align="center" variant="h5">{props.project}</Typography>
                    </Box>
                </Paper>
            </Grid>
        </>
    )
}

export default ProjectCountCard
