import React from 'react';
import './addTask.css';

export default class AddTodo extends React.Component{

    state = {
        todo: ''
    };

    onChange(e){
        this.setState({
            todo: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onSubmit({
            ...this.state
        });
        this.setState({
            todo: ''
        })
    }

    render(){
        return(
            <div>
                <form className="task-add" onSubmit={this.onSubmit.bind(this)}>
                    <input
                        name="todo"
                        type="text"
                        value={this.state.todo}
                        onChange={this.onChange.bind(this)}
                        placeholder="Enter a todo"/>
                    <button onClick={this.onSubmit.bind(this)}>Add</button>
                </form>
            </div>
        )
    }
}