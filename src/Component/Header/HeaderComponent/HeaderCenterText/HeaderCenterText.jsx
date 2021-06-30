import React from 'react';
import { Typography, Box, Button, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    wrapper: { width: "100%", height: "91.57vh", position: "relative", textAlign: "center", color: "#fff" },
    centerDiv: { width: "100%", height: "auto", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
    btn: { color: "#fff", margin: "0 .5rem", borderColor: "#fff" }
}))

const HeaderCenterText = () => {
    const classes = useStyles();
    return (
        <>
            <section>
                <div className={classes.wrapper}>
                    <div className={classes.centerDiv}>
                        <Typography variant="h3">We are the web designer</Typography>
                        <Typography variant="h6" className="text-dark">We design world best websites, web applications and games</Typography>
                        <Box my={2}>
                            <Button href="#about" component={Link} variant="outlined" className={classes.btn}>About us</Button>
                            <Button href="#contact" component={Link} variant="outlined" className={classes.btn}>Contact us</Button>
                        </Box>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeaderCenterText;