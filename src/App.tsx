import React, { useState } from 'react';
import './App.css';
import { TaskType, TodoList } from './TodoList';

export type FilterValuesType = "all" | "completed" | "active"

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title:"HTML&CSS", isDone: true},
        {id: 2, title:"JS", isDone: true},
        {id: 3, title:"React", isDone: false}
    ]);


    function remomeTask(id:number) {

        let filteredTasks = tasks.filter( i => i.id !== id)
        setTasks(filteredTasks);
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
            />
        </div>
    );

}


export default App;
