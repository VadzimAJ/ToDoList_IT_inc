import React, { useState } from 'react';
import './App.css';
import {v1} from 'uuid';
import { TaskType, TodoList } from './TodoList';

export type FilterValuesType = "all" | "completed" | "active"

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title:"HTML&CSS", isDone: true},
        {id: v1(), title:"JS", isDone: true},
        {id: v1(), title:"React", isDone: false},
        {id: v1(), title:"Rest API", isDone: false},
        {id: v1(), title:"GraphQL", isDone: false}
    ]);
    console.log(tasks);

    function remomeTask(id: string) {

        let filteredTasks = tasks.filter( i => i.id !== id)
        setTasks(filteredTasks);
    }

    function addTask (title:string){
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks=[newTask, ...tasks];
        setTasks(newTasks);
    }

    function changeFilter (value: FilterValuesType){
        setFilter(value);
    }

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let taskForTodolist = tasks;
    if (filter === "completed") {
        taskForTodolist = tasks.filter(i => i.isDone === true);
    }
    if (filter === "active") {
        taskForTodolist = tasks.filter(i => i.isDone === false);
    }

    return (
        <div className="App">
            <TodoList   title="What to Learn" 
                        tasks = {taskForTodolist}
                        removeTask = {remomeTask}
                        changeFilter = {changeFilter}
                        addTask = {addTask}
            />
        </div>
    );

}


export default App;
