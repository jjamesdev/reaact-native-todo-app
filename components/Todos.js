import { FlatList, Text, View } from "react-native"
import Todo from "./Todo"

function Todos({ todos, filter, handleStatusParent }) {
  let copyTodos = [...todos]
  if (filter) {
    copyTodos = copyTodos.filter(todo => todo.status === 'todo')
  }

  return (
    <FlatList
      data={copyTodos}
      renderItem={
        (item) =>
          <Todo
            todo={item.item}
            handleStatusParent={handleStatusParent}>
          </Todo>
      }
      keyExtractor={(item) => item.title + item.id}
    />
  )

}

export default Todos