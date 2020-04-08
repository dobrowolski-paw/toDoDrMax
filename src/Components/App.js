import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
class App extends Component {
  counter = 2;
  state = {
    tasks: [
      {
        id: 0,
        text: "Wylizać patelkę",
        date: "2020-02-25",
        important: true,
        start: false,
        stop: false,
        startDate: null,
        finishDate: null,
        user: "Dorota",
      },
      {
        id: 1,
        text: "Wypić piwo",
        date: "2020-02-25",
        important: false,
        start: false,
        stop: false,
        startDate: null,
        finishDate: null,
        user: "Dorota",
      },
    ],
  };
  deleteTask = (id) => {
    console.log("delete" + id);
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks,
    });
  };
  changeTaskStatus = (id) => {
    //console.log("dane" + id);
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.start = true;
        task.startDate = new Date().getTime();
        task.important = false;
        this.setState({
          tasks,
        });
      }
    });
  };
  changeTaskStatusStop = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.stop = true;
        task.stopDate = new Date().getTime();
        this.setState({
          tasks,
        });
      }
    });
  };
  changeUser = (e, id) => {
    console.log(e.target.value, id);
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.user = e.target.value;
        this.setState({
          user: task.user,
        });
      }
    });
  };

  addTask = (text, date, important, user) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      start: false,
      stop: false,
      startDate: null,
      finishDate: null,
      user: user,
    };
    this.counter++;
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
  };

  render() {
    return (
      <div className="App">
        Zadania Dr. Max
        <AddTask addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
          changeStop={this.changeTaskStatusStop}
          changeUser={this.changeUser}
        />
      </div>
    );
  }
}

export default App;
