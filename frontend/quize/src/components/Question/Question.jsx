import './index.css'
import React, {useState} from 'react';
import Modal from '../Modals/Modal';

function Question({ scores, answer,question, description}) {
    // console.log(scores)

    const [disabled,setDisabled] = useState(false)
    const funcDisabeled = () => {
        setActive(!active)
        setDisabled(true)
    }

  const [active, setActive] = useState(false)
  return (

      // setActive(!active)
      <>
      {!disabled ?
        (<td >
     <div onClick={funcDisabeled}>{question.score}</div>
     <Modal score={scores} answer={answer} description={description} active={active} setActive={() => setActive(!active)}/>
      </td>)
        :
        (<td className='unselectable'>
            <div className='unselectable' onClick={funcDisabeled}>{question.score}</div>
            <Modal className='unselectable' score={scores} answer={answer} description={description} active={active} setActive={() => setActive(!active)}/>
        </td>)
      }
          </>



  )
}

export default  Question
