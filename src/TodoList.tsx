import { type } from "os";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValuesType } from "./App";

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (id: string) => void
  changeFilter: (value: FilterValuesType) => void
  addTask: (title: string) => void
}

export function TodoList (props: PropsType){
    const [newTasktTtile, setNewTasktTtile] = useState("");

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setNewTasktTtile(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.charCode === 13) {
        props.addTask(newTasktTtile);
        setNewTasktTtile("");
      }
    }

    const addTask = () => {
      props.addTask(newTasktTtile);
      setNewTasktTtile("");
    }

    const onAllClickFilter = () => {
      {props.changeFilter("all")}
    }

    const onAactiveClickFilter = () => {
      {props.changeFilter("active")}
    }

    const onCompletedClickFilter = () => {
      {props.changeFilter("completed")}
    }

  return (
      <div>
              <h3>{props.title}</h3>
              <div>
                  <input value={newTasktTtile} 
                    onChange = {onNewTitleChangeHandler}
                    onKeyPress={onKeyPressHandler}
                  />
                  <button onClick={addTask}>+</button>
              </div>
              <ul>
                {
                  props.tasks.map((i) => {
                    const onRemooveHendler = () => {
                      props.removeTask(i.id)
                    }
                  return <li key={i.id}>
                            <input type="checkbox" checked={i.isDone}/>
                            <span>{i.title}</span>
                            <button onClick={onRemooveHendler}>х</button>
                          </li>
                  })
                }
              </ul>
              <div>
                  <button onClick={onAllClickFilter}>All</button>
                  <button onClick={onAactiveClickFilter}>Active</button>
                  <button onClick={onCompletedClickFilter}>Completed</button>
              </div>
      </div>
  )
}


export default TodoList;