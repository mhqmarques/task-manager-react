import React, { useState } from 'react'
import { BiX } from "react-icons/bi";

import { Task } from '../../@types/Task';
import * as Service from '../../service/api'

import * as C from './styles'
import ButtonAction from '../ButtonAction';

type NewTaskProps ={
  close: ()=>void,
  loadTasks: ()=>void
}

const NewTask = ({close, loadTasks}: NewTaskProps) => {
  const [nameTask, setNameTask] = useState<string>('')
  const [descriptionTask, setDescriptionTask] = useState<string>('')

  const createTask = ():void => {
    const task: Task = {
      id: new Date().getTime(),
      name: nameTask,
      description: descriptionTask,
      date: new Date().toUTCString(),
      done: false,
    }
    Service.create(task)

    alert('Sucess')
    close()
    loadTasks()
  }

  return (
    <C.Container>
      <C.ContainerClose>
        <BiX
          color='#F5F5F6'
          size={24}
          className='close'
          onClick={close}
      />
      </C.ContainerClose>
      <C.Content>
        <C.Title>New Task</C.Title>
        <C.ContainerInput>
          <input 
            type="text" 
            name="name" 
            placeholder='Title'
            onChange={(e) => setNameTask(e.target.value)}  
          />
        </C.ContainerInput>
        <C.ContainerInput>
        <textarea 
          name="description" 
          className='description' 
          placeholder='Description'
          rows={13}
          onChange={(e) => setDescriptionTask(e.target.value)}
        />
        </C.ContainerInput>
        <C.ContainerButton>
          <ButtonAction
            title='Save'
            background='#AC6DDE'
            action={() => createTask()}
          />
        </C.ContainerButton>

      </C.Content>
    </C.Container>
  )
}

export default NewTask
