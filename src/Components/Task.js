import React from "react";
const style = {
  color: "red",
};

const Task = (props) => {
  const {
    text,
    date,
    id,
    start,
    important,
    stop,
    startDate,
    stopDate,
    user,
  } = props.task;
  const startDat = new Date(startDate).toLocaleString();
  const stopDat = new Date(stopDate).toLocaleString();

  if (!start && !stop) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - do
          <span>{date}</span>" "<span>{user}</span>
          <button onClick={() => props.change(id)}>Rozpocznij</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else if (start && !stop) {
    return (
      <div>
        <p>
          <strong>{text}</strong> - rozpoczete o <span>{startDat}</span>" "
          <span>{user}</span>
          <button onClick={() => props.changeStop(id)}>Zakończ</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          <strong>{text}</strong> - rozpoczete o <span>{startDat}</span>
          zakończone o <span>{stopDat}</span>" "<span>{user}</span>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
