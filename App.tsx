import type { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { Todo } from './types/Todo';

export default function App(): ReactElement {
  // Define a variable named `exampleTodo` whose data type is `Todo`.
  const exampleTodo: Todo = {
    id: '1',
    text: 'Buy groceries',
    completed: false,
  };

  return (
    <View style={styles.container}>
      <Text>{exampleTodo.text}</Text>
      <Text>
        {/* Use a conditional statement */}
        {exampleTodo.completed ? 'Completed' : 'Not completed'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
