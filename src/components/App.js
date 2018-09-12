import React, { Component } from 'react';
import Todo from './Todo';
import '../App.css';

class App extends Component {
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }
    state = {
        listItems: [
            {
                todo: 'Read Book'
            },
            {
                todo: 'Learn React'
            },
            {
                todo: 'Do Workout Of Day'
            },
        ]
    };
    onSubmit( newTask ){
        let newList = this.state.listItems;
        newList.push(newTask);
        this.setState({
            newList
        })
    }
    removeTask(id){
        let oldList = this.state.listItems;
        oldList.splice(id, 1);
        this.setState({
            listItems: oldList
        });

    }

  render() {
    return (
      <div className="App">
        <Todo onSubmit={this.onSubmit} listItems={this.state.listItems} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default App;
