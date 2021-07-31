// sample component

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TextField, Button, Paper, Typography, CircularProgress, Grid } from '@material-ui/core';
import useStyles from './testComponentstyles.js';
import {sendTestData} from '../../actions/testActions.js'

const TestComponent = () =>{
    const testData = useSelector((state) => state.testReducers);
    const classes = useStyles();
    const dispatch = useDispatch();

    const [sendData,setSendData] = useState({
        title:"", number:""
    });

    console.log(testData);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sendTestData(sendData));
    
    }

    const clear = () => {
        setSendData({title:"", number:""});
    }
    
    return(
        <>
        <Paper className = {classes.paper}>
            <Typography variant = 'body1'>Send data(Post request)</Typography>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <TextField name="title" variant = "outlined" label = "Title" fullWidth value={sendData.title} onChange={(e) => setSendData({...sendData, title: e.target.value})} />
                <TextField name="number" variant = "outlined" label = "Number" fullWidth
                value={sendData.number}
                onChange={(e) => setSendData({...sendData, number: e.target.value})}
                />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
        <Paper className = {classes.paper}>
            <Typography variant = 'body1'>Fetch data(Get request)</Typography>
            {!testData.length ? <CircularProgress/>: (
                <Grid className = {classes.mainContainer} container alignItems = "stretch" spacing='3'>
                    {testData.map((testdata) => (
                        <Grid item key={testdata._id} xs={12} sm={6}>
                            <Typography variant = 'body2'>id: {testdata._id}</Typography>
                            <Typography variant = 'body2'>title: {testdata.title}</Typography>
                            <Typography variant = 'body2'>Number: {testdata.number}</Typography>
                        </Grid>
                    ))}
                </Grid>
            )}        
        </Paper>
        </>
        
    );
}

export default TestComponent;