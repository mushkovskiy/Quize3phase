
import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';


import Question from '../Question/Question'
import {questionAC} from '../redux/actionCreators/questionAC'

const Questions = () => {
  const dispatch = useDispatch();
  const {questions} = useSelector((state) => state.question);
  console.log(questions);






  useEffect(() => {
    fetch("/questions")
      .then((response) => response.json())
      .then((questions) => dispatch(questionAC(questions)))
  }, [dispatch]);

  // console.log(quest);


  return (

    <table id="table">
      <tbody>
        {questions.map((theme) => (
          <tr key={theme.id}>
            <td className="td">{theme.title}</td>
            {theme.Questions.map((question) =>


              <Question answer={question.answer}  description={question.description}  key={question.id} question={question}/>
              // <td onClick={handleClick} key={question.id}>{question.description}
              // <Modal description={question.description} answer={question.answer} key={question.id} point={question.point} active={active}  setActive={() => setActive(false)}/>
              // </td>
            
                  
              ) 
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Questions;