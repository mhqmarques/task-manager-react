import {useEffect, useState} from 'react';
import Modal from 'react-modal'

import {Task} from './@types/Task'
import * as Service from './service/api';

import CardTask from './components/CardTask'
import ButtonMenu from './components/ButtonMenu'
import ButtonAction from './components/ButtonAction';
import NewTask from './components/NewTask';

import * as C from './App.styles'


Modal.setAppElement('#root');
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(24, 24, 32, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    border: 'none',
  },
};


function App() {
  const [list, setList] = useState<Task[]>([])
  const [listTodo, setListTodo] = useState<Task[]>([])
  const [listClosed, setListClosed] = useState<Task[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showTodo, setShowTodo] = useState<boolean>(true)
  const [showClosed, setShowClosed] = useState<boolean>(false)
  const [taskForEdit, setTaskForEdit] = useState<Task | undefined>()
  
  useEffect(() => {
    loadTasks()
  }, [])

  useEffect(() => {
    filterTasks()
  }, [list])

  const loadTasks = () => {
    const listTask: Task[] = Service.listAll()
    setList(listTask)
  }

  const filterTasks = () => {
    const tasksTodo = list.filter((task) => task.done === false)
    const tasksClosed = list.filter((task) => task.done === true)
    setListTodo(tasksTodo)
    setListClosed(tasksClosed)
  }

  const editTask = (task: Task) => {
    setTaskForEdit(task)
    handleOpen()
  }
 
  const handleOpen = () => setShowModal(true)
  const handleClose = () => {
    setShowModal(false)
    setTaskForEdit(undefined)
  }

  const handleTodo = () => {
    setShowClosed(false)
    setShowTodo(true)
  }
  const handleClosed = () => {
    setShowClosed(true)
    setShowTodo(false)
  }
  return (
    <C.Container>
      <C.Header>
        <ButtonMenu click={() => alert('worked')}/>
        <C.Title>Tsks.</C.Title>
        <ButtonAction 
          background='#AC6DDE' 
          title='New Task'
          action={()=>handleOpen()}
        />
      </C.Header>
      <C.Content>
        <C.Greeting>Hi there.</C.Greeting>
        <C.ButtonArea>
          <ButtonAction
            background={`${showTodo ? '#414052' : 'transparent'}`}
            title='To do'
            action={() => handleTodo()}
          />
          <ButtonAction
            background={`${showClosed ? '#414052' : 'transparent'}`}
            title='Closed'
            action={() => handleClosed()}
          />
        </C.ButtonArea>
        {
          showTodo  && listTodo.map((task) => (
            <CardTask
              key={task.id}
              task={task} 
              loadTasks={loadTasks}
              editTask={() => editTask(task)}
            />
          ))          
        }
        {
          showClosed  && listClosed.map((task) => (
            <CardTask
              key={task.id}
              task={task} 
              loadTasks={loadTasks}
              editTask={() => editTask(task)}
            />
          ))          
        }
        {
          showTodo && listTodo.length === 0 && <C.Text>No Tasks To do.</C.Text>
        }
        {
          showClosed && listClosed.length === 0 && <C.Text>No Tasks Closed.</C.Text>
        }
      </C.Content>
      <C.Footer>
        <p>Developed by Outboxup</p>
      </C.Footer>
      <Modal
        isOpen={showModal}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="New Task"
      >
        <NewTask 
          close={() => handleClose()}
          loadTasks={loadTasks}
          taskForEdit={taskForEdit}
        />
      </Modal>
    </C.Container>
  );
}

export default App;
