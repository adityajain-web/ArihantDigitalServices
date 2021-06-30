import React from 'react';
import { Box } from '@material-ui/core';

const PlanDetails = (props) => {
    return (
        <>
            <Box py={2}>
                <h5 className="text-center">$<span className="display-6">{props.price}</span>/Website</h5>
                <Box className="d-flex justify-content-center">
                    <ul>
                        {props.facilities.map((item, index) => { return (<li key={index} className="h6">{item}</li>) })}
                    </ul>
                </Box>
            </Box>
        </>
    )
}

export default PlanDetails;
