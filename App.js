import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import Todos from './components/Todos';

export default function App() {
  // const [todos, setTodos] = useState([{ title: 'task 1', description: '', status: 'done' }])
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState('')
  const [hideAction, setHideAction] = useState({ message: 'Hide completed', hide: false })

  const handleInputText = (text) => {
    setInputText(text)
  }

  const handleActionButton = () => {
    if (inputText === '') {
      alert('add a task please')
      return
    }
    const newTodo = [...todos, { title: inputText, description: '', id: todos.length + 1, status: 'todo' }]
    setTodos(newTodo)
    setInputText('')
  }

  const handleStatusParent = ({ todo, status }) => {
    const index = todos.findIndex(element => element.id === todo.id)
    const aux = todos
    aux[index].status = status ? 'done' : 'todo'
    setTodos([...aux])
    console.log(todos)
  }

  const handleHideAction = () => {
    if (hideAction.hide) {
      setHideAction({ message: 'Hide completed', hide: !hideAction.hide })
    } else {
      setHideAction({ message: 'Show all', hide: !hideAction.hide })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.newTodo}>
        <TextInput style={{ width: '75%' }}
          placeholder='Add a task'
          value={inputText}
          onChangeText={handleInputText}>
        </TextInput>
        <Button
          title='Done' onPress={handleActionButton}></Button>
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Todos</Text>
        <Text onPress={handleHideAction} style={styles.action}>{hideAction.message}</Text>
      </View>
      <View style={styles.content}>
        <Todos todos={todos} filter={hideAction.hide} handleStatusParent={handleStatusParent}></Todos>
      </View>
      <StatusBar style='ligth' translucent={true}></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    padding: 15
  },
  newTodo: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    // backgroundColor: '#CDCDCD'
  },
  title: {
    fontSize: 25,
    alignSelf: 'flex-end'
  },
  action: {
    color: '#3478F6',
    fontSize: 10,
    alignSelf: 'flex-end'
  },
  content: {
    flex: 6

  }
});
