'use client'
import React, { useState } from "react";

const Home = () => {

  const [title, settitle] = useState('')
  const [mainTask, setmainTask] = useState([])

  const submitForm = (e) => {
    e.preventDefault()
    if(title == ''){
      alert('Please add task first')
    } else {
    setmainTask([...mainTask, {title}])
    settitle('')
    }
  }

  let renderTask = <li>Task Not Found</li>

  if(mainTask.length>0){
    renderTask = mainTask.map((task, i) => {
      return (
        <li key={i}>
          <h2>{task.title}</h2>
          <button
          onClick={() => {
            deleteTask(i)
          }}
          >Delete</button>
        </li>
      )
    })
  }

  const deleteTask = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }


  return (
    <div className="main">
    <div className="card">
      <h1>
        Todo App
      </h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Enter title hear"
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />
        <button>
          Add Task
        </button>
      </form>
    <div>
      <ul>{renderTask}</ul>
    </div>

    </div>
    </div>
  );
};

export default Home;
