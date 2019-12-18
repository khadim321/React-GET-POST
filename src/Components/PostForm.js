import React,{ Component } from "react";
import axios from 'axios';
import Axios from "axios";

class PostForm extends Component{

constructor(){
    super()
    this.state = {
        userId: '',
        title: '',
        body: ''
    }
}

changeHandler = e => {
        this.setState({[e.target.name] : e.target.value})
}

submitHandler = e => {
e.preventDefult()   
console.log(this.state)
    Axios 
    .post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then(response=>{
        console.log('response')
    })
    .catch(error => {
        console.log('error')
    })
}

    render(){
        const {userId, title, body} = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <h4>Form</h4>
                    <div>
                    <input placeholder='enter user name. ..'
                    type='text' 
                    name='userId' 
                    value={userId} 
                    onChange={this.changeHandler}></input>
                    </div><br/>
                    <div>
                    <input placeholder='enter title name. .. '
                    type='text' 
                    name='title' 
                    value={title} 
                    onChange={this.changeHandler}></input>
                    </div><br/>
                    <div>
                    <input placeholder='enter body name. ..'
                    type='text' 
                    name='body' 
                    value={body} 
                    onChange={this.changeHandler}></input>
                    </div><br/>
                    <button type='submit'>Submit</button>
                </form>
             
            </div>
        )
    }
}

export default PostForm;