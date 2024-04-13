export const TaskCard = ({task, handleDelete}) => {
  return (
    <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
      <span style={{border: '2px solid brown'}}>
        {task.id} - {task.name}
      </span>
      <button onClick={() => handleDelete(task.id)} className="sub">
        Delete
      </button>
    </li>
  );
};
