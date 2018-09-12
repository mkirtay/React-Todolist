import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default class Todo extends React.Component {
    render(){
        return(
            <div>
                <AddTodo onSubmit={this.props.onSubmit}/>
                <TodoList listItems={this.props.listItems} removeTask={this.props.removeTask} />
            </div>
        )
    }
}