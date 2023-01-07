import { useObserver } from "mobx-react"
import { useRef, useState } from "react";
import Store from "./store"

const List = () =>{
    const [id, setId] = useState(1)
    const {listStore} = Store();
    const inputRef = useRef(null);

    const onClickAddBtn = () =>{
        if(inputRef.current.value === ""){
            return;
        }
        const data = {
            id:id,
            content: inputRef.current.value
        }
        listStore.add(data)
        setId(id + 1)
        inputRef.current.value = ""
    }

    const onClickRemoveBtn = (id) =>{
       listStore.remove(id)
    }

    return(
        <div>
            {listStore.todoList.map((todo)=>{
               return (<><h1 key={todo.id}>{todo.content}</h1> <button onClick={()=>onClickRemoveBtn(todo.id)}>-</button></>)
            })}
            
            <input ref={inputRef}/>
            <button onClick={onClickAddBtn}>+</button>
        </div>
    )
}

export default List
