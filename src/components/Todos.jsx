import React from 'react'
import TodoItem from './TodoItem'

function Todos({todos, toggleCompleted }) {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted}/>
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
