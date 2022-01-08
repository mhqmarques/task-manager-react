import * as C from './styles'

type PropsMenu = {
  deleteTask: () => void
  editTask: () => void
}

function DropdownMenu({ deleteTask, editTask }: PropsMenu) {
  return (
    <C.Container>
      <C.Menu>
        <C.ItemMenu onClick={editTask}>
          <p>Edit</p>
        </C.ItemMenu>
        <C.ItemMenu onClick={deleteTask}>
          <p>Delete</p>
        </C.ItemMenu>
      </C.Menu>
    </C.Container>
  )
}

export default DropdownMenu
