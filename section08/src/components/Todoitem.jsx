import './TodoItem.css';
const TodoItem = () => {

  const TodoItem = ({
    id,
    isDone,
    content,
    date,
    onUpdate,
  }) => {
    const onChangeCheckbox = () => {
      onUpdate(id);
    };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox}
      readOnly
      checked={isDone}
      type="checkbox" />
      <div className="content">Todo...</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
      </div>
     

  );
};

export default TodoItem;
