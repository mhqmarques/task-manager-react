
import {  useState } from 'react';

import * as C from './styles'
import { BiDotsHorizontalRounded } from "react-icons/bi";

import {Task} from '../../@types/Task';

type Props = {
  task: Task,
  buttonContex?: () => void
}

const CardTask = ({ task, buttonContex }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(task.done)

  return (
    <C.Container>
      <C.Content>
        <C.Header done={isChecked}>
          <input 
            type="checkbox"
            checked={isChecked}
            onChange={e => setIsChecked(e.target.checked)}
          />
          <label>{task.name}</label>
          <BiDotsHorizontalRounded 
            color='#AC6DDE' 
            size={26} 
            className='contextMenu'
            onClick={buttonContex}  
          />
        </C.Header>
        <C.Description>
          <p>{task.description}</p>
        </C.Description>
        <C.Footer>
          <p>Created at {task.date}</p>
        </C.Footer>
      </C.Content>
    </C.Container>
  )
}

export default CardTask
