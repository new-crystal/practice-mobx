import {observable} from "mobx"

const numStore = observable({
    num:0,
    increase(num){
        this.num = this.num + num
    },
    decrease(num){
        this.num = this.num - num
    }
})

export default numStore