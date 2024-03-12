import { Text, View, StyleSheet } from "react-native"
import Checkbox from 'expo-checkbox'
import { useState } from "react"

function Todo({ todo, handleStatusParent }) {

  const [toggleCheckBox, setToggleCheckBox] = useState(todo.status === 'done')

  const handleStatus = (value) => {
    // console.log(value)
    setToggleCheckBox(value)
    handleStatusParent({ todo, status: value })
  }

  return (
    <View style={styles.containerTodo}>
      <Checkbox
        disabled={false}
        value={toggleCheckBox}
        color="black"
        // onValueChange={(newValue) => setToggleCheckBox(newValue)}
        onValueChange={handleStatus}
        style={styles.checkbox}
      />
      {
        todo.status === 'done'
          ? <Text style={styles.title}>{todo.title}</Text>
          : <Text style={styles.titleComplete}>{todo.title}</Text>
      }
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
  containerTodo: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
  },
  title: {
    color: '#737373',
  },
  titleDone: {
    color: '#DCDCDC',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  checkbox: {
    marginRight: 10,
    borderColor: '#737373'
  }
})