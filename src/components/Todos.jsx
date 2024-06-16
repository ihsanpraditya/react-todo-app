import React from 'react'
import TodoItem from './TodoItem'

function Todos({todos, toggleCompleted, deleteTodo }) {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return <TodoItem 
        key={todo.id} 
        todo={todo} 
        toggleCompleted={toggleCompleted} 
        deleteTodo={deleteTodo} />
      })}
    </div>
  )
}

const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
  },
}

export default Todos
