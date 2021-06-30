import React from 'react';
import { Box, Typography, Grid, makeStyles, Card, CardMedia, CardContent, Paper } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { ExtraHeaderData } from './ExtraHeaderData';

const useStyles = makeStyles(theme => ({
    margin: { margin: "0 auto" },
}))

const ExtraHeaderSection = () => {
    const classes = useStyles();
    return (
        <>
            <section>
                <Box className="container-fluid my-5" id="about">
                    <Grid container>
                        <Grid item xl={10} md={11} xs={12} className={classes.margin}>
                            <Box>
                                <Grid container spacing={5}>
                                    {ExtraHeaderData.map((item, index) => {
                                        return (<Grid item md={4} sm={4} xs={12} key={index}>
                                            <Paper>
                                                <Card component={Card}>
                                                    <CardMedia className="pt-3 text-center">
                                                        <i className={item.cardMedia} style={{ fontSize: "3rem", color: blue[500] }}></i>
                                                    </CardMedia>
                                                    <CardContent>
                                                        <Typography align="center" variant="h4" color="primary" gutterBottom>{item.cardTitle}</Typography>
                                                        <Typography align="center" variant="h6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit placeat molestiae ut repellendus obcaecati neque soluta. Aliquid, officia!</Typography>
                                                    </CardContent>
                                                </Card>
                                            </Paper>
                                        </Grid>)
                                    })}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </>
    )
}

export default ExtraHeaderSection;