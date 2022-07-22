
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modals/Modal';

import {questionAC} from '../redux/actionCreators/questionAC'

const Questions = () => {
  const dispatch = useDispatch();
  const quest = useSelector((state) => state.questions);
  // console.log(quest);

  useEffect(() => {
    fetch("/questions")
      .then((response) => response.json())
      .then(data => console.log(data))
      // .then((questions) => dispatch(questionAC(questions)))
  }, [dispatch]);

  // console.log(quest);
  return (
    <></>
    // <table id="table">
    //   <tbody>
    //     {quest.themes.map((theme) => (
    //       <tr key={theme.id}>
    //         <td className="td">{theme.title}</td>
    //         {quest.questions.map((question) =>
    //           theme.id === question.theme_id ? (
    //             <td key={question.id} className="tds">
                  
    //                 <Modal description={question.description} answer={question.answer} key={question.id} point={question.point} />
                  
    //             </td>
    //           ) : (
    //             <></>
    //           )
    //         )}
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
};

export default Questions;