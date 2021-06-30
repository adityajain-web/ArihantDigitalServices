import React from 'react';
import { Box, Typography } from '@material-ui/core'

const SkillSBars = (props) => {
    return (
        <>
            <Box my={2}> <Typography variant="h6">{props.barTitle}</Typography> <div className="progress"> <div className={props.barClassName} style={{ width: props.barWidth }}> <Typography variant="body2">{props.barWidth}</Typography> </div> </div> </Box>
        </>
    )
}

export default SkillSBars;
