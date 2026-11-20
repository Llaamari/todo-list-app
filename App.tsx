import { useState } from 'react';
import type { ReactElement } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

import type { Todo } from './types/Todo';

export default function App(): ReactElement {
  // Task list status variable
  const [todos, setTodos] = useState<Todo[]>([]);
  // Text field status variable
  const [newTodo, setNewTodo] = useState<string>('');

  // Function return type
  const addTodo = (): void => {
    if (newTodo.trim() === '') {
      return;
    }

    // Creating a new task
    const todo: Todo = {
      id: Date.now().toString(),
      text: newTodo.trim(),
      completed: false,
    };

    // Add a task to the list
    setTodos([...todos, todo]);
    setNewTodo('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter a new task"
        value={newTodo}
        onChangeText={setNewTodo}
      />

      <Button title="Add Task" onPress={addTodo} />

      {todos.map((todo: Todo) => (
        <Text key={todo.id} style={styles.todoText}>
          {todo.text}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  todoText: {
    fontSize: 18,
    marginTop: 15,
  },
});
