import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const DServices = (props) => {
    return (
        <>
            <Box my={3}> <div className="media"> <i className={props.mediaIcon} style={{ color: blue[500], fontSize: "2rem" }}></i> <div className="media-body"> <h3>{props.mediaTitle}</h3> <Typography variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel dicta iusto harum sunt non, reprehenderit nisi ipsam repellat qui.</Typography> </div> </div> </Box>
        </>
    )
}

export default DServices
