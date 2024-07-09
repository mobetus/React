import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useRef, useState } from 'react';

const mockData = [
  // 이렇게 만든 mockdata라는 변수는 App 컴포넌트가 리렌더링 될 때마다
  // 다시 생성될 필요는 없고 애초에 상수이기 때문에 값을 바꿀 수도 없어서
  // 그냥 전부 잘라내서 이렇게 컴포넌트 외부에 선언해줘도 상관 없다
  {
    id: 0, // 각각의 item을 구분하기 위한 id
    isDone: true,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '운동하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '독서하기',
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  // 기능구현을 준비하기 위해 App 컴포넌트 내부에 todos라는 새로운 state를
  // 만들고 해당 state의 초기값을 임시 데이터인 mockdata로 설정해줌
  //mockdata의 값으로  App 컴포넌트 내부에서 만든 todos state 값을 초기화
  // 그러면 아래 state가 생성됨과 동시에 3개의 todo data가 잘 저장됨
  const idRef = useRef(3); //mockData와 겹치지 않는 수

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 
    // 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 
    //      요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id!==targetId))
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;