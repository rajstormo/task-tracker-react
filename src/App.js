import { useState } from "react";
import "./index.css"
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Card from "./components/Card";
import DisplayTasks from "./components/DisplayTasks";

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false);
  
  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTask) => {
    setTasks(prevTasks => [newTask, ...prevTasks]);
  }

  const updateTasks = (id) => {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.id != id);
    })
  }

  return (
    <Card>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showTask={showAddTask}/>
      {showAddTask && <AddTask onNewTask={addNewTask} />}
      <DisplayTasks taskData={tasks} onDeleteTask={updateTasks}/>
    </Card>
  )
}

export default App;