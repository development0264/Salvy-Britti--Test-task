import React, { useState, Fragment } from 'react'
import {
    Link
} from "react-router-dom";
import { Button, TextField, Typography } from '@material-ui/core';
import './ScreenOne.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';




const theme = createMuiTheme({
    typography: {
        allVariants: {
            color: "#42ffd3"
        },
        fontFamily: [
            'Chilanka',
            'Thasadith',
        ].join(','),
    },
});

function ScreenOne(props) {
    const [val, setVal] = useState(0);

    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <Typography variant="h2" gutterBottom className="main_title">Expression Evaluator</Typography> </ThemeProvider>
            {/* <input type="number" onChange={(e) => setVal(Number(e.target.value))}></input> */}
            <TextField type="number" className="fir_inputs" id="filled-basic" label="Please enter a number" variant="filled" onChange={(e) => setVal(Number(e.target.value))} />
            <Link to={{ pathname: `/two`, state: val }} style={{ textDecoration: 'none' }}>
                <Button variant="contained" className="add-button">Add number</Button>
            </Link >

        </Fragment>
    )
}

export default ScreenOne
