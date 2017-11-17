import React, { Component } from 'react';
import TasksList from './ui/TasksList';
import Header from './ui/Header';
import Footer from './ui/Footer';
import AddTaskForm from './ui/AddTaskForm';
import SearchBox from './ui/SearchBox';
import tasks from './data.json';

class App extends Component {
  state = {
    menuVisible: false,
    listOfTasks: tasks.tasks,
    filteredList: tasks.tasks,
  };

  componentWillMount() {
    this.onChange('petName');
  }

  switchState = () => {
    this.setState({ menuVisible: !this.state.menuVisible });
  };

  onAdd = task => {
    const listOfTasks = [...this.state.listOfTasks, task];

    this.setState({ listOfTasks, menuVisible: false });
  };

  onDelete = id => {
    const { listOfTasks } = this.state;
    const filteredList = listOfTasks.filter(task => task.id !== id);

    this.setState({ listOfTasks: filteredList, filteredList });
  };

  onChange = val => {
    const { listOfTasks } = this.state;
    const filteredList = listOfTasks.sort((taskA, taskB) => {
      return taskA[val] < taskB[val] ? -1 : 1;
    });

    this.setState({ filteredList });
  };

  onInput = val => {
    const { listOfTasks } = this.state;
    const filteredList = listOfTasks.filter(task => task.petName.includes(val));

    this.setState({ filteredList });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <AddTaskForm
          onAdd={this.onAdd}
          switchState={this.switchState}
          id={this.state.listOfTasks.length + 1}
          visible={this.state.menuVisible}
        />
        <SearchBox onInput={this.onInput} onChange={this.onChange} />

        <TasksList
          taskList={this.state.filteredList}
          onDelete={this.onDelete}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
