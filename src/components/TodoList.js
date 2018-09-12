import React from 'react';
import './todoList.css';

export default class TodoList extends React.Component{

    removeTask(e){
        this.props.removeTask(e.target.parentNode.id)
    }

    render(){
        const listItem = this.props.listItems.map( (listItem, i) => {
            return(
                <li key={i} id={i} className="list__item">
                    <span>{listItem.todo}</span>
                    <button onClick={this.removeTask.bind(this)}>Delete</button>
                </li>
            )
        });
        return(
                <ul className={'list'}>
                    { listItem }
                </ul>
        )
    }
}