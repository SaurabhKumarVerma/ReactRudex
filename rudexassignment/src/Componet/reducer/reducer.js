export default function reducer(state={},action){
    switch(action.type){
        case 'ADD_TODO':{

            const newState = {...state, todo:[...state.todo, action.payload]}
            return newState
        }
        case 'ADD_CHECK':{
            const ck ={...state ,todo:[...state.todo.slice(0 , action.payload),{...state.todo[action.payload],completed:!state.todo[action.payload],...state.todo.slice(action.payload + 1)}]}
            return ck
        }
        case 'ADD_USERS':{
            const user = {...state, user:[state.user, action.payload]}
            return user
        }
     
        default:
            return state
    }
}
    