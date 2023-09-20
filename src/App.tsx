
import React, {useState} from 'react';
import { ReactDOM } from 'react';
import './index.css'
import './App.css';
import { Button } from './Button';

function App() {
  const Button1Foo = (subScr: string, age?: number, title?: string) => {
    console.log('Hello Im ' + subScr, 'Age: ' + age, 'it`s ' + title + ' Button.');
  }

  const Button2Foo = (subScr: string, age?: number, title?: string) => {
    console.log('Hello Im ' + subScr, 'Age: ' + age, 'it`s ' + title + ' Button.');
  }

  const Button3Foo = ( title?: string) => {
    console.log( title + ' Button.');
  }

  return (
    <div className="App">
      <Button title={'First'} callBack={(title) => Button1Foo('Rolly', 21, title)} />
      <Button title={'Second'} callBack={(title) => Button2Foo('Jager', 23, title)} />
      <Button title={'Stuped'} callBack={(title) => Button3Foo(title)} />
    </div>
  );
}

export default App;
import { StudentComponent } from './StudentComponent';



// Hi Guys!
// Let's reinforce our current session!
// -You have 2 arrays. You should create a new component TASKS, where you will render these arrays.
// -Don't forget to assign types to our data.

function App() {

    let [students, setStudents] = useState([
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100}
    ]);

       return (
        <StudentComponent students={students}/>

export type FilterValuesType = "all" | "completed" | "active"

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
