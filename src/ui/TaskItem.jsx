import React from 'react';

function TaskItem({ date, id, onDelete, petName, petOwner, problem }) {
  const click = () => {
    onDelete(id);
  };

  return (
    <div className="task">
      <button className="task__delete" onClick={click}>
        X
      </button>
      <h3 className="task__pet-name">{petName}</h3>
      <time className="task__date">{date}</time>
      <p className="task__owner">
        <strong>Owner: </strong>
        {petOwner}
      </p>
      <p className="task__problem">{problem}</p>
    </div>
  );
}

export default TaskItem;
