import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { SkillsData } from './SkillsData';
import SkillSBars from './SkillsComponent/SkillsBarComponent/SkillSBars';


const Skills = () => {
    return (<>
        <Grid item md={6} sm={6} xs={12}>
            <Box px={5}>
                {SkillsData.map((item, index) => { return (<SkillSBars key={index} barTitle={item.barTitle} barClassName={item.barClassName} barWidth={item.barWidth} />) })}
            </Box>
        </Grid>
    </>)
}

export default Skills;
