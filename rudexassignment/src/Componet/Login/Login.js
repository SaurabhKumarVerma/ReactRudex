import React from 'react'

import { useForm } from'react-hook-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
function Login(props){
    const {register,errors,handleSubmit} = useForm()
    const onSubmitData = submit => {
        props.user(submit)
    }

    return(
        
        <form onSubmit={handleSubmit(onSubmitData)}>
            {console.log(props.userData)}
            <div>
                <div><label>Name :</label></div>
            </div>
            <input type='text' name="name"ref={register({required:{value:true,message:'Please Enter User Name'},
                maxLength:{value:50, message: 'Exceed Limit'},
                minLength:{value:2, message:  "Shoulde More than 2 Character"}})}/>
            {errors.name && <span>{errors.name.message}</span>}

            <div>
                <div><label>Password :</label></div>
            </div>
            <input type='password' name="password"ref={register({required:{value:true,message:'Please Enter Password'},
                
                minLength:{value:2, message:  "Shoulde More than 7 Character"}})}/>
            {errors.password && <span>{errors.name.password}</span>}
            <br/>
            <button type='submit'><Link to='/todo'>submit</Link></button>
        </form>
    )
}

const mapStateToProps = state => {
    return{
        userData:state
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        user: (val) => dispatch({type:'ADD_USERS',payload: val})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)