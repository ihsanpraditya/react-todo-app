import { useState } from 'react'
import Todos from './components/Todos'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Menyelesaikan program CRM Al-Fatihah',
      completed: false,
    },
    {
      id: 2,
      title: 'Menyelesaikan bootcamp FGA React-Native Kominfo',
      completed: false,
    },
    {
      id: 3,
      title: 'Lulus ujian UT 2024.1',
      completed: false,
    },
  ])

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todos List</h1>
      <Todos todos={todos} />
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}

export default App
