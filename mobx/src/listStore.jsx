import { observable } from "mobx";

const listStore = observable({
    todoList:[{id:0, content:"열심히 놀기"}],
    add(todo){
        this.todoList = [...this.todoList, todo]
    },
    remove(id){
        this.todoList = this.todoList.filter((todo)=>todo.id !== id)
    }
})

export default listStore