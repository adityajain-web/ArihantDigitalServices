import React from 'react';
import { Box, Grid, Paper, Typography, Avatar, makeStyles } from '@material-ui/core';
import ClientAvatar from '../../Images/Avatar.svg'

const useStyles = makeStyles(theme => ({
    avatarStyle: { height: "8rem", width: "8rem", border: "1px solid grey", padding: ".3rem", margin: "1rem 0" },
}))

const TestimonialCard = (props) => {
    const classes = useStyles();
    return (
        <>
            <Grid item lg={4} md={4} sm={4} xs={12}>
                <Box p={2} component={Paper}>
                    <div className="d-flex align-items-center flex-column text-center">
                        <Avatar imgProps={{ style: { borderRadius: "50%" } }} src={ClientAvatar} className={classes.avatarStyle} />
                        <Typography variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nostrum porro quae hic officia mollitia aliquid veniam earum aut error.</Typography>
                        <Box mt={2}>
                            <Typography variant="h6">{props.clientName}, {props.designation}</Typography>
                        </Box>
                    </div>
                </Box>
            </Grid>
        </>
    )
}

export default TestimonialCard;
