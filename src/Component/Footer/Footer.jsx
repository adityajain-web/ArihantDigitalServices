import React from 'react';
import { Box, Grid, Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: { borderTop: `1px solid ${theme.palette.grey[300]}` },
    center: { margin: "0 auto" },
    link: { fontSize: "1.2rem", color: theme.palette.grey[900] }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <footer>
                <Box pt={5} className={classes.root}>
                    <Grid container>
                        <Grid item lg={10} md={11} className={classes.center}>
                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item lg={4} md={4} sm={4} xs={12} >
                                        <Box px={3} py={1}>
                                            <Typography variant="h4" gutterBottom>Arihant Digital Services</Typography>
                                            <Typography variant="h6" align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laudantium quam minus optio, at cupiditate tempore vero aspernatur eum obcaecati enim sunt error pariatur suscipit neque, impedit, quas distinctio id?</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={4} xs={12} >
                                        <Box px={3} py={1}>
                                            <Typography variant="h4" gutterBottom>Navigation Links</Typography>
                                            <ul className="d-flex flex-column">
                                                <Link className={classes.link} href="#home">Home</Link>
                                                <Link className={classes.link} href="#about">About</Link>
                                                <Link className={classes.link} href="#services">Services</Link>
                                                <Link className={classes.link} href="#pricing">Pricing</Link>
                                                <Link className={classes.link} href="#contact">Contact</Link>
                                            </ul>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={4} xs={12} >
                                        <Box px={3}>
                                            <Typography variant="h4" gutterBottom>Subscribe Newsletter</Typography>
                                            <Typography variant="h6" align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laudantium quam minus optio, at </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Box className="container border-top mt-4 text-center pt-3">
                                    <Typography variant="h6">&copy;{new Date().getFullYear()} All Rights Reserved | Design By: Aditya Burse (Jain)</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </footer>
        </>
    )
}

export default Footer
