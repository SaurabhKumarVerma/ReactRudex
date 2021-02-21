import React from 'react'
import { connect } from 'react-redux'

class TodoList extends React.Component{
    constructor(props){
        super(props)
        
    }

    handleCheck = (key) =>{
        this.props.check(key)
    }

    render(){
        console.log(this.props.index ,'check')
        const {list} = this.props
        return(
            <>
                <div>
                    <br/>
                    <input type='checkbox' checked={this.props.checkValue} onClick={() => this.handleCheck(this.props.index)}/>&nbsp;&nbsp;
                     {list.todolist} &nbsp;&nbsp;
              
                 </div>

                 
            </>
        )
    }
}

const mapStateToProps = state =>{
    return{
        checkValue:state.completed
    }
}

const mapDispatchToProps = dispatch => {
    return{
        check: (val) => dispatch({type:'ADD_CHECK',payload:val})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)