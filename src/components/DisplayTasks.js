
import { MdDelete } from 'react-icons/md'

export default function DisplayTasks(props) {
  
  let displayTasks = "Tasks will appear here!!";

  if (props.taskData.length > 0) {
    displayTasks = props.taskData.map((task) => {
      return (
        <li key={task.taskId} className={`flex justify-between px-4 py-2 mb-2 items-center bg-gray-200 ${task.taskReminder ? "border-l-4 border-green-700" : ""}`}>
          <div className="flex flex-col">
            <p>{task.taskName}</p>
            <p>{task.taskDate}</p>
          </div>
          <MdDelete className="text-2xl text-red-600 hover:cursor-pointer" onClick={() => props.onDeleteTask(task.taskId)}/>
        </li>
      )
    })
  }

  return (
    <ul className="mt-4 ">
      {!props.showTask && displayTasks}
    </ul>
  )
}