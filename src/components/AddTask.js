import { useState } from "react"
import Button from "./Button"
import { v4 as uuidv4 } from 'uuid';

export default function AddTask(props) {
  const style = {
    div: "flex flex-col gap-2 mb-4",
    input: "border outline-none px-2 py-1 rounded"
  }

  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [reminder, setReminder] = useState(false);


  const sendNewTaskDetails = async(e) => {
    e.preventDefault();
    if (taskName === "") {
      alert("Task Name must be filled");
      return;
    }

    const todo = {taskId: uuidv4() ,taskName: taskName, taskDate: taskDate, taskReminder: reminder};
    props.onNewTask(todo);

    setTaskName("");
    setTaskDate("");
    setReminder(false);
  }

  return (
    <form className="py-4" onSubmit={sendNewTaskDetails}>
      <div className={style.div}>
        <label htmlFor="add-task">Task</label>
        <input type="text" id="add-task" className={style.input} value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
      </div>
      
      <div className={style.div}>
        <label htmlFor="day-time">Day & Time</label>
        <input type="text" id="day-time" className={style.input} value={taskDate} onChange={(e) => setTaskDate(e.target.value)}/>
      </div>

      <div className="flex gap-4 items-center mb-6">
        <label htmlFor="reminder">Set Reminder</label>
        <input type="checkbox" id="reminder" checked={reminder} onChange={(e) => setReminder(e.target.checked)}/>
      </div>

      <div>
        <Button style="text-white bg-black py-[6px] px-6 w-full rounded"> Save Task </Button>
      </div>
    </form>
  )
}