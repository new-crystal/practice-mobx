import { useObserver } from "mobx-react"
import { useRef, useState } from "react";
import Store from "./store"

const List = () =>{
    const [id, setId] = useState(1)
    const {listStore} = Store();
    const inputRef = useRef(null);

    const onClickAddBtn = () =>{
        const data = {
            id:id,
            content: inputRef.current.value
        }
        listStore.add(data)
        setId( id + 1)
        inputRef.current.value = ""
    }

    return(
        <div>
            {listStore.todoList.map((todo)=>{
               return <h1 key={todo.id}>{todo.content}</h1>
            })}
            
            <input ref={inputRef}/>
            <button onClick={onClickAddBtn}>+</button>
        </div>
    )
}

export default List