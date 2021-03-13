import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Button, FormControl, TextField, Select, InputLabel, MenuItem } from '@material-ui/core';


function ScreenTwo(props) {
    const [stateVal, setStateVal] = useState(null);
    const [val2, setVal] = useState(null);
    const [opd, setOpd] = useState('+');
    const [result, setResult] = useState(null);
    const { state } = useLocation();


    useEffect(() => {
        setStateVal(state);
    }, []);

    const handleClick = () => {
        switch (opd) {
            case '+': const add = stateVal + val2;
                setResult(add);
                setStateVal(add);
                return;
            case '-': const sub = stateVal - val2;
                setResult(sub);
                setStateVal(sub);
                return;
            case '*': const mul = stateVal * val2;
                setResult(mul);
                setStateVal(mul);
                return;
            case '/': const div = stateVal / val2;
                setResult(div);
                setStateVal(div);
                return;
        }
    }

    return (
        <div>

            <div className="number_wrp">
                <h3 className="number_box">{stateVal}</h3>
                <h3 className="number_box">{val2}</h3>
                <h3 className="number_box">{opd}</h3>
                {/* <h3>{val2}</h3> */}

            </div>
            <div className="resultwrp">
                <h3 className="equal">=</h3>
                <h3 className="result">{result}</h3>
            </div>

            <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">Operator</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Age"
                    onChange={(e) => setOpd(e.target.value)}
                >
                    <MenuItem value={'+'}>+</MenuItem>
                    <MenuItem value={'-'}>-</MenuItem>
                    <MenuItem value={'*'}>*</MenuItem>
                    <MenuItem value={'/'}>/</MenuItem>
                </Select>
            </FormControl>
            <TextField type="number" id="filled-basic" label="Filled" variant="filled" placeholder="add operand" onChange={(e) => setVal(Number(e.target.value))} />
            <Button variant="contained" onClick={(e) => handleClick(e)} type="button" className="add-button">Add operation</Button>

        </div>
    )
}

export default ScreenTwo
