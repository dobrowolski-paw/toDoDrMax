import React from "react";
import Task from "./Task";
const TaskList = props => {
  const active = props.tasks.filter(task => !task.start && !task.stop);
  const during = props.tasks.filter(task => task.start && !task.stop);
  const dane = props.tasks.filter(task => task.start && task.stop);
  const activeTask = active.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
      changeUser={props.changeUser}
    />
  ));
  const duringTask = during.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      changeStop={props.changeStop}
      changeUser={props.changeUser}
    />
  ));
  const daneTask = dane.map(task => <Task key={task.id} task={task} />);
  return (
    <>
      <div className="active">
        <h1>Zadania do zrobienia</h1>
        {activeTask.length > 0 ? activeTask : <p>pakuj kredki i do domu</p>}
      </div>
      <div className="during">
        <h1>Zadania w trakcie realizacji</h1>
        {duringTask}
      </div>
      <div className="dane">
        <h1>Zadania zrobione</h1>
        {daneTask}
      </div>
    </>
  );
};

export default TaskList;
