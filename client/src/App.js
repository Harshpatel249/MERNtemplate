import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import TestPage from './pages/testPage/testPage.js'
import { getTestData } from './actions/testActions.js'

const App = () => {
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getTestData());
        }, [dispatch]
    );

    return (
        <TestPage />
    );
}

export default App;