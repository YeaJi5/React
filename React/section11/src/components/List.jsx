import './List.css'
import TodoItem from './TodoItem'
import { useState, useMemo, useContext } from 'react'
import { TodoStateContext } from '../App'

const List = () => {
  const [search, setSearch] = useState("");
  const todos = useContext(TodoStateContext);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getFilteredData = () => {
    if(search === "") {
      return todos;
    }
    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase())
    })
  }

  const FilteredTodos = getFilteredData();

  const { totalCount, doneCount, notDoneCount } =
    useMemo(()=>{
      console.log("호출")
      const totalCount = todos.length;
      const doneCount = todos.filter((todo) => todo.isDone).length;
      const notDoneCount = totalCount - doneCount;

      return {
        totalCount, doneCount, notDoneCount
      }
  }, [todos])

  // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

  return (
  <div className="List">
    <h4>TodoList 😻</h4>
    <div>
      <div>total: {totalCount}</div>
      <div>done: {doneCount}</div>
      <div>notDone: {notDoneCount}</div>
    </div>
    <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
    <div className="todos_wrapper">
      {FilteredTodos.map((todo)=>{
        return <TodoItem key={todo.id} {...todo} />
      })}
    </div>
  </div>
)}

export default List