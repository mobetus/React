import './List.css';
import TodoItem from "./Todoitem";
import { useState, useMemo, useContext} from "react";
import { TodoContext } from "../App" 

const List = () => {
  const {todos} = useContext(TodoContext);

  const [search, setSearch] =useState(""):

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo)) =>
      todo.content
        .toLowerCase()
        .includes(search.toLowerCase())
    };
  };

  const filteredTodos = getFilteredData();
  
   useMemo(()=>{
    const totalCount =todos.length;
    const doneCount = todos.filter(
      (todo) => todo.isDone
    ).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount
    };
  }, [])
  // 의존성배열 : deps

  // const (totalCount, doneCount, notDoneCount) = 
  // getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List</h4>
      <input placeholder="검색어를 입력하세요" />
      <div className='todos_wrapper'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default List;
