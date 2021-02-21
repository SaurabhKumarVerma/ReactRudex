import  React  from "react";
import { connect } from "react-redux";
import TodoList from "../TodoList/TodoList";
import './app.css'
class TODO extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todolist:''
        }
    }

    handleAdd = () =>{
        this.props.addTodo(this.state)
    }
    handleAll= () =>{
        
    }

    render(){
        return(
            <div>
                    <input type='text' value={this.state.todolist} onChange={(evt) => this.setState({todolist:evt.target.value})}/>
                    <button onClick={() => this.handleAdd()}>ADD</button>

                    {this.props.todoData.todo.map((item,index) => {
                        return(
                            <TodoList index={index} list={item}/>
                        )
                    }
                    )}

                    <div className='inside'>
                        <h2 className='inside'>Show:</h2>
                        <h3 className='inside' onClick={() => this.handleAdd}>All</h3>
                        <h3 className='inside'>Show</h3>
                        <h3 className='inside'>completed</h3>
                    </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        todoData:state
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addTodo: (val) => dispatch({type:'ADD_TODO',payload: val})
        allTodo:(val) => dispatch({type:'SHOW_ALL',payload:val})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TODO)