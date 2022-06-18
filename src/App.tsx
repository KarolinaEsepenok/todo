import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";


export type filterValueType = 'ALL' | 'Active' | 'Completed';


function App() {
    //   let tasks1 = [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "TSX", isDone: false},
    //     {id: 4, title: "ReactJS", isDone: false}
    //// ]
    let [tasks1, setTasks1] = useState([
        {id: v1(), title: "HTML&CSS", isDone: false},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "TSX", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])
    const removeTask = (taskId: number) => {
        tasks1 = tasks1.filter((el) => el.id !== taskId)
        setTasks1(tasks1)

    }

    const [filterValue, setFilterValue] = useState("All")

    const changeFilter = (value: filterValueType) => {
        setFilterValue(filterValue)
    }

    let filteredTasks = tasks1
    if (filterValue === "Active") {
        filteredTasks = tasks1.filter(el => el.isDone === false)
    }
    if (filterValue === "Completed") {
        filteredTasks = tasks1.filter(el => el.isDone === true)
    }

    filteredTasks = tasks1.filter(el => el.isDone === false)

    return (
        <div className="App">
            <Todolist title={'What to learn1'}
                      tasks={tasks1}
                      removeTask={removeTask}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
