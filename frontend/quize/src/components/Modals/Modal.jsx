import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Modal({ active, setActive, description }) {
 
const handleSubmit = (event) => {
  console.log(5)
  event.preventDefault();
  console.log(event.target.question.value)
  setActive();
}

  return (
    <div className={`modal_wrapper ${active ? 'open' : 'close'}`}>
 <Box onSubmit={handleSubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

    
        
        <div>
        <TextField defaultValue={description} className='text-field' id="outlined-basic" label="Вопрос" variant="outlined" />
      </div>
      <div>
      <TextField id="outlined-basic" label="Ваш ответ" variant="outlined" name="question"/>
      </div>
      <Stack spacing={2} direction="row">
      <Button type="submit" variant="contained">Ответить</Button>
    </Stack>
       
  
    </Box>
    </div>

  );
}
