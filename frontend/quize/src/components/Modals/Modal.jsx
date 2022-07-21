import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Modal({ active, setActive }) {
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={`modal_wrapper ${active ? 'open' : 'close'}`}>
 <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <div>
      <TextField className='text-field' id="outlined-basic" label="Вопрос" variant="outlined" value='Текст' />
      </div>
      <div>
      <TextField id="outlined-basic" label="Ваш ответ" variant="outlined" />
      </div>
      <Stack spacing={2} direction="row">
      <Button onClick={handleClick} variant="contained">Ответить</Button>
    </Stack>
    </Box>
    </div>

  );
}
