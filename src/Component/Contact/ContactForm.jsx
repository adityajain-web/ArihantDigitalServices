import React, { useState } from 'react';
import { Box, Grid, Button, FormControl, InputLabel, OutlinedInput, TextareaAutosize, makeStyles } from '@material-ui/core';
import { SectionHeading } from '../Component';
import { validation } from './Validation';
import './Css/Contact.scss';

const useStyles = makeStyles(theme => ({
    margin: { margin: "0 auto" },
    form: { padding: "1rem 2rem" },
    control: { marginBottom: "1rem" }
}))

const ContactForm = () => {
    const classes = useStyles();
    const [user, setUser] = useState({ userName: "", userEmail: "", userPhone: "", userMessage: "" });

    const userInput = (e) => {
        const { name, value } = e.target;
        setUser((prevVal) => {
            return { ...prevVal, [name]: value }
        })
    }

    const validateAndSubmit = (e) => {
        e.preventDefault();
        let validationStatus = validation(user.userName, user.userEmail, user.userPhone, user.userMessage);

        if (validationStatus) {
            setUser({ userName: "", userEmail: "", userPhone: "", userMessage: "" });
            alert("We will contact you as soon as possible!")
        } else {
            alert("Please enter valid data");
        }

    }

    return (
        <>
            <section>
                <Box className="contactSec my-5" id="contact">
                    <Grid container>
                        <Grid item lg={6} md={8} xs={10} className={classes.margin}>
                            <Box>
                                <SectionHeading head="Contact Us" />
                                <Box>
                                    <form className={classes.form} onSubmit={validateAndSubmit}>
                                        <FormControl fullWidth className={classes.control} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-name"
                                                labelWidth={60}
                                                type="text"
                                                name="userName"
                                                onChange={userInput}
                                                value={user.userName}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.control} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-email"
                                                labelWidth={60}
                                                type="text"
                                                name="userEmail"
                                                onChange={userInput}
                                                value={user.userEmail}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.control} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-phone">Mobile No.</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-phone"
                                                labelWidth={60}
                                                type="number"
                                                name="userPhone"
                                                onChange={userInput}
                                                value={user.userPhone}
                                            />
                                        </FormControl>
                                        <FormControl fullWidth className={classes.control}>
                                            <TextareaAutosize
                                                rowsMin={10}
                                                placeholder="Message"
                                                name="userMessage"
                                                onChange={userInput}
                                                value={user.userMessage}
                                            />
                                        </FormControl>
                                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                                    </form>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </>
    )
}

export default ContactForm