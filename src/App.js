import React, { useState,useEffect } from "react";

import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);

  const [status,setStaus]=useState("all")

  const [filterTodos,setFilterTodos]=useState([])

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };


  const completedHandler=(index)=>{
  
   const newtodos=[...todos]
     const selectedItem=newtodos[index]
    
   const newSelectedItem={...selectedItem,completed: !selectedItem.completed }
    newtodos[index]=newSelectedItem
    setTodos(newtodos)
    console.log(newtodos)

  }
  const uncompletedHandler=(index)=>{
  
   const newtodos=[...todos]
  //    const selectedItem=newtodos[index]
  //   selectedItem.completed=false
  //  let newSelectedItem=selectedItem
  //   newtodos[index]=newSelectedItem
  //   setTodos(newtodos)
  //   console.log(newtodos)
  const newArray=newtodos.filter((item)=>(item !==newtodos[index]))
  setTodos(newArray)

  }


  useEffect(()=>{
    switch(status) {
      case "completed":
        setFilterTodos(todos.filter((item)=>(item.completed===true)))
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((item)=>(item.completed===false)))
        
        break;
      default:
        setFilterTodos(todos)
    }
  },[status,todos])

  // if(status==="completed"){
  //  setTodos(todos.filter((item)=>(item.completed==true)))

  // }else if (status==="uncompleted"){
  //   setTodos(todos.filter((item)=>(item.completed==false)))
  // }else{
  //  setTodos(todos)
  // }

  

  return (
    <>
      <div className="app">
        <Form
          setInputText={setInputText}
          inputHandler={inputHandler}
          inputText={inputText}
          setTodos={setTodos}
          todos={todos}
          setStaus={setStaus}
        />
      </div>

      {filterTodos.map((item, index) => {
        return (
          <TodoList
            text={item.text}
            key={index}
            completed={()=>completedHandler(index)}
            uncompleted={()=>uncompletedHandler(index)}
            back={item.completed}
          />
        );
      })}
    </>
  );
};

export default App;
