import { useObserver } from "mobx-react"
import Store from "./store"

const Counter = () =>{

const {numStore} = Store();

    const onClickPlusBtn = () =>{
        numStore.increase(1)
    }

    const onClickMinusBtn = () => {
        numStore.decrease(1)
    }

    return useObserver(()=>
    (
        <div>
            <h1>{numStore.num}</h1>
            <button onClick={onClickPlusBtn}>+</button>
            <button onClick={onClickMinusBtn}>-</button>
        </div>
    ))
}


export default Counter