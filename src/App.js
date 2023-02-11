import { useState, useEffect } from "react";
import "./index.css"
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Card from "./components/Card";
import DisplayTasks from "./components/DisplayTasks";
import {collection, getDocs} from "@firebase/firestore";
import {db} from "./firebase-config"


const App = () => {

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const todosCollectionRef = collection(db, 'todos');

  //reading data from firestore database and storing in "tasks"
  useEffect(() => {
    const getTodos = async() => {
      const data = await getDocs(todosCollectionRef);
      setTasks(data.docs.map(doc => {
        return {...doc.data(), id: doc.id};
      }));
    };
    getTodos();

  }, [])



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