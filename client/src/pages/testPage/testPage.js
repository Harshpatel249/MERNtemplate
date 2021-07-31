//Sample page

import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

import useStyles from './testPagestyles.js'

import TestContainer from '../../containers/testContainer/testContainer.js'

const TestPage = () => {
    const classes = useStyles();

    return(
        <div>
        <AppBar className = {classes.appBar} position = "static" color = "inherit">
            <Typography variant = "h4" align = "center">Test AppBar</Typography>
        </AppBar>
        <TestContainer />
        </div>
    );
}

export default TestPage;