import React from 'react';
import TaskItem from './TaskItem';

function TasksList({ taskList, onDelete }) {
  return (
    <div className="task-list">
      {taskList.map(task => (
        <TaskItem key={task.id} {...task} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TasksList;
