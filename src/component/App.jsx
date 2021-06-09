import { useState } from "react";
import Add from "./Add";
import Header from "./Header";
import List from "./List";
import Search from "./Search";
import Filter from './Fiter'

const App = ()  => {
  const [search, setSearch] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, title: 'Cook Diner', done: false, important: false },
    { id: 2, title: 'Play Phone', done: false, important: false },
    { id: 3, title: 'Slep 8 hour', done: false, important: false },
    { id: 4, title: 'Make Awesome App', done: false, important: false },
    { id: 5, title: 'Make Awesome App Slep 8 hour Cook Diner Play Phone Make Awesome App', done: false, important: false },
  ])

  const onSearch = (value) => setSearch(value)
  const onAddTodos = (title) => setTodos([...todos, {id: Date.now(), title, isDone: false,important: false}])
  const onDelete = (id) => setTodos(todos.filter(todo => id !== todo.id))
  const onToggleDone = (id) => setTodos(todos.map(todo => id === todo.id 
    ? {...todo, done: !todo.done} 
    : todo)
  )
  const onToggleImportant = (id) => setTodos(todos.map(todo => id === todo.id 
    ? {...todo, important: !todo.done} 
    : todo)
  )
  
  let searchTodos = todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="container">
      <div className="App shadow-lg border border-5">
        <Header done={ 0 } toDo={ 3 }/>
        <div className="d-flex mb-2 justify-content-between">
          <Search search={search} onSearch={onSearch}/>
          <Filter/>
        </div>
        <List 
          todos={searchTodos} 
          onDelete={onDelete} 
          onToggleDone={onToggleDone}
          onToggleImportant={onToggleImportant}
        />
        <Add onAddTodos={onAddTodos}/>
      </div>
    </div>
  );
}

export default App;