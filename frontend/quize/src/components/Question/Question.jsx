
import React, {useState} from 'react';
import Modal from '../Modals/Modal';

function Question({question, description}) {

  const [active, setActive] = useState(false)
  return (
 
 <td > 
     <div onClick={() => setActive(!active)}>{question.description}</div> 
     <Modal description={description} active={active} setActive={() => setActive(!active)}/>
      </td>
    
 
 
    
  )
}

export default  Question