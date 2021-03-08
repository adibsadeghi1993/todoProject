import "./todo.css"

const TodoList = ({text,completed,uncompleted,back}) => {
    return ( 
        <div className={back ? "red " : "todo"}>
            <h3>{text}</h3>
           <div> <button onClick={completed}>completed</button>
            <button onClick={uncompleted}>uncompleted</button></div>
        </div>
     );
}
 
export default TodoList;