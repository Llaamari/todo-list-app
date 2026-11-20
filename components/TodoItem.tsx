
import type { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { Todo } from '../types/Todo';

// This specifies what data can be passed to the TodoItem component.
type TodoItemProps = {
  todo: Todo;
};

// Define the function's return type as ReactElement.
export default function TodoItem({
  todo,
}: TodoItemProps): ReactElement {
    return (
        <View style={styles.container}>
            {/* Displays the text of the assignment written by the user. */}
            <Text style={styles.text}>{todo.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 18,
  },
});
