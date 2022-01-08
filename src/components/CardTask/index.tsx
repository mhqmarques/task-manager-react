
import {  useState } from 'react';
import { BiDotsHorizontalRounded } from "react-icons/bi";

import * as C from './styles'
import {Task} from '../../@types/Task';
import * as Service from '../../service/api'
import DropdownMenu from '../DropdownMenu/index'

type Props = {
  task: Task,
  loadTasks: () => void,
  editTask: () => void
}

const CardTask = ({ task, loadTasks, editTask }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(task.done)
  const [openDropdown, setOpenDropdown] = useState<boolean>(false)

  const updateStatusTask = () => {
    setIsChecked(!task.done)
    Service.updateStatus(task.id)
    setTimeout(() => loadTasks(), 200)
  }

  const deleteTask = () => {
    Service.remove(task.id)
    loadTasks()
  }

  return (
    <C.Container>
      <C.Content>
        <C.Header done={isChecked}>
          <input 
            type="checkbox"
            checked={isChecked}
            onChange={() => updateStatusTask()}
          />
          <label>{task.name}</label>
          <BiDotsHorizontalRounded 
            color='#AC6DDE' 
            size={26} 
            className='contextMenu'
            onClick={() => setOpenDropdown(!openDropdown)}  
            />
          {openDropdown && <DropdownMenu editTask={editTask} deleteTask={() => deleteTask()} key={task.id} />}
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
