//定义一个change方法，将来把它绑定到props上
export function changes(value){
    return{
        type:"change",
        value:value
    }
}
export function test(value){
    return{
        type:"test",
        value:value
    }
}