
import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';



import Question from '../Question/Question'
import {questionAC} from '../redux/actionCreators/questionAC'
import './index.css'
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

const Questions = () => {
  const {score} = useSelector(state=>state.score)
  let navigate = useNavigate()

  const body ={
    total_score: +score,
  }
  console.log(body)
  const showResult = async () => {
    const responce = await fetch('http://localhost:4000/addresults',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify(body)
    })
   await navigate('/pc')
  }

  const dispatch = useDispatch();
  const {questions} = useSelector((state) => state.question);
  console.log(questions);






  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((questions) => dispatch(questionAC(questions)))
  }, [dispatch]);

  // console.log(quest);


  return (
      <>
      <div style={{textAlign:'right',marginRight:'30px'}}>
        <span>{score}</span>
      </div>
    <table className="table" id="table" style={{fontSize:'24px'}}>
      <tbody>
        {questions.map((theme) => (
          <tr key={theme.id}>
            <td className="td">{theme.title}</td>
            {theme.Questions.map((question) =>


              <Question scores={question.score} answer={question.answer}  description={question.description}  key={question.id} question={question}/>
              // <td onClick={handleClick} key={question.id}>{question.description}
              // <Modal description={question.description} answer={question.answer} key={question.id} point={question.point} active={active}  setActive={() => setActive(false)}/>
              // </td>


              )
            }
          </tr>
        ))}
      </tbody>
    </table>
        <Button onClick={showResult} variant="contained">Закончить игру</Button>
      </>
  );

};

export default Questions;
