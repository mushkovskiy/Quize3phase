import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import './index.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userAC} from "../redux/actionCreators/userAC";
import {scoreAddAC} from "../redux/actionCreators/scoreAddAC";
import {scoreDifAC} from "../redux/actionCreators/scoreDifAC";
import ModalAnswer from "../ModalAnswer/ModalAnswer";

export default function Modal({ score,answer,active, setActive, description }) {

    const dispatch = useDispatch();

    const [modalFlag,setModalFlag] = useState(false)
const handleSubmit = (event) => {
    // const [score,setScore] = useState(0)
    // const {score} = useSelector(state=>state.score)

  event.preventDefault();
  // console.log(event.target.question.value)
    if (event.target.question.value === answer) {
        // alert(true)
        dispatch(scoreAddAC(score))
    } else {
        // alert(false)
        dispatch(scoreDifAC(score))
    }
  setActive();
    setModalFlag(true)
}

// useEffect(()=>{
//     set
// },[handleSubmit])
  return (
      <>
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
        {/*<TextField defaultValue={description} className='text-field' id="outlined-basic" label="Вопрос" variant="outlined" />*/}
        {/*    <p className='p'>{description}</p>*/}
            <TextareaAutosize
                defaultValue={description}
                aria-label="empty textarea"
                placeholder="Empty"
                style={{ width: 500,fontSize:'24px' }}
            />
      </div>
      <div>
          <TextField className='text-field' id="outlined-basic" label="Ваш ответ" variant="outlined" name="question" />
      </div>
      <Stack spacing={2} direction="row">
      <Button type="submit" variant="contained">Ответить</Button>
    </Stack>


    </Box>
    </div>
          {modalFlag && <ModalAnswer answer={answer} setModalFlag={setModalFlag} modalFlag={modalFlag}/>}
      </>
  );
}
