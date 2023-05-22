import { useState, useEffect } from "react";
import "./index.css"
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Card from "./components/Card";
import DisplayTasks from "./components/DisplayTasks";
import {collection, getDocs, addDoc, setDoc, doc, deleteDoc} from "@firebase/firestore";
import {db} from "./firebase-config";

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const todosCollectionRef = collection(db, 'todos');

  //reading data from firestore database and storing in "tasks"
  useEffect(() => {
    const getTodos = async() => {
      try {
        const data = await getDocs(todosCollectionRef);
        setTasks(data.docs.map(doc => doc.data()));
      } 
      catch(error) {
        alert("Something went wrong: ", error);
      }
    };
    getTodos();
  }, []);

  //creating this new todo in the firestore database
  const addNewTask = async(newTask) => {
    try {
      await setDoc(doc(db, 'todos', newTask.taskId), newTask);
      setTasks(prevTask => [...prevTask, newTask]);
      alert("new todo item added successfully")
    }
    catch(error) {
      alert("Error adding this todo: ", error);
    }
  }

  // deleting a todo item
  const deleteTask = async(id) => {
    try {
      await deleteDoc(doc(db,'todos',id));
      setTasks(prevTasks => {
        return prevTasks.filter(task => task.taskId != id);
      });
      alert("todo deleted");
    }
    catch(error) {
      alert("Todo not deleted: ", error);
    }
    
  }

  return (
    <Card>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showTask={showAddTask}/>
      {showAddTask && <AddTask onNewTask={addNewTask} />}
      <DisplayTasks taskData={tasks} onDeleteTask={deleteTask} showTask={showAddTask}/>
    </Card>
  )
}

export default App;