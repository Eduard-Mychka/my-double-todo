
export default function Header({done, toDo}){
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h1 className="mb-2 text-secondary">My ToDo List</h1>
      <span className="text-secondary fs-5">{toDo} toDos {done} done</span>
    </div>
  )
}
