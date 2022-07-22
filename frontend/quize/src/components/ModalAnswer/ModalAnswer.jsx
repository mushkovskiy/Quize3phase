import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useState} from "react";

export default function ModalAnswer({ answer,setModalFlag, modalFlag }) {


    const handleSubmit = (event) => {
        event.preventDefault();
        setModalFlag(!modalFlag)
    }

    return (
        <>
        <div className={`modal_wrapper ${modalFlag ? 'open' : 'close'}`}>
            <Box onSubmit={handleSubmit}
                 component="form"
                 sx={{
                     '& > :not(style)': { m: 1, width: '25ch' },
                 }}
                 noValidate
                 autoComplete="off"
            >


                <div>
                    <TextField defaultValue={answer} className='text-field' id="outlined-basic" label="Правильный ответ" variant="outlined" />
                </div>
                <Stack spacing={2} direction="row">
                    <Button type="submit" variant="contained">Дальше</Button>
                </Stack>


            </Box>
        </div>
    </>
    );
}
