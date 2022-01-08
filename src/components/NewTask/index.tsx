import React, { useState } from 'react'
import { BiX } from "react-icons/bi";

import { Task } from '../../@types/Task';
import * as Service from '../../service/api'

import * as C from './styles'
import ButtonAction from '../ButtonAction';

type NewTaskProps ={
  close: ()=>void,
  loadTasks: ()=>void
  taskForEdit?: Task
}

const NewTask = ({ close, loadTasks, taskForEdit}: NewTaskProps) => {
  const [nameTask, setNameTask] = useState<string>(`${taskForEdit ? taskForEdit.name : ''}`)
  const [descriptionTask, setDescriptionTask] = useState<string>(`${taskForEdit ? taskForEdit.description : ''}`)

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

  const editTask = () => {
    Service.update(taskForEdit?.id, nameTask, descriptionTask)
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
        <C.Title>{`${taskForEdit ? 'Edit Task': 'New Task'}`}</C.Title>
        <C.ContainerInput>
          <input 
            type="text" 
            name="name" 
            placeholder='Title'
            value={nameTask}
            onChange={(e) => setNameTask(e.target.value)}  
          />
        </C.ContainerInput>
        <C.ContainerInput>
        <textarea 
          name="description" 
          className='description' 
          placeholder='Description'
          value={descriptionTask}
          onChange={(e) => setDescriptionTask(e.target.value)}
          rows={13}
        />
        </C.ContainerInput>
        <C.ContainerButton>
          <ButtonAction
            title='Save'
            background='#AC6DDE'
            action={() => {
              if(taskForEdit) {
                editTask()
              } else {
                createTask()
              }
            }}
          />
        </C.ContainerButton>

      </C.Content>
    </C.Container>
  )
}

export default NewTask
