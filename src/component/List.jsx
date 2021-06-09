import Item from './Item'

const List = ({ todos, onDelete, onToggleDone, onToggleImportant}) => {

  const elements = todos.map(todo => {
    const { id, ...todoItems } = todo
    return (
      <Item 
        { ...todoItems } 
        key={ id } 
        onClickDelete={onDelete} 
        todo={todo} 
        onDone={onToggleDone}
        onImportant={onToggleImportant}
      />
    )
  })

  return (
    <ul className="list-group">
      { elements }
    </ul>
  );
}
  
export default List;
