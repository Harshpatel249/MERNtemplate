//sample container

import React from 'react';

import { Container } from '@material-ui/core';

import useStyles from './testContainerstyles.js'

import TestComponent from '../../components/testComponent/testComponent.js'

const TestContainer = () =>{
    const classes = useStyles();
    return(
        <Container className = {classes.conTainer}>
            <TestComponent />
        </Container>
    );
}

export default TestContainer;