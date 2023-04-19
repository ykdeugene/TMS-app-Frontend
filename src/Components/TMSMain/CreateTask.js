import React, { useState, useEffect, useContext } from "react"
import Axios from "axios"
import DispatchContext from "../../DispatchContext"

function CreateTask({ application, fetchTasks }) {
  const appDispatch = useContext(DispatchContext)
  const [username, setUsername] = useState("")

  async function getUsername() {
    try {
      const response = await Axios.get(`/user/getusername`)
      setUsername(response.data.username)
    } catch (e) {
      console.log(e)
      appDispatch({ type: "errorToast", data: "Please contact an administrator." })
    }
  }

  async function handleFastCreateTask() {
    let appName = application.App_Acronym
    let taskName = document.getElementById("taskName").value
    let taskDescription = ""
    let taskPlan = ""
    let taskCreator = username
    let taskOwner = username
    let taskCreateDate = new Date().toLocaleDateString().replaceAll("/", "-")

    try {
      const response = await Axios.post("/tms/create_task", { taskName, taskDescription, taskPlan, appName, taskCreator, taskOwner, taskCreateDate })
      if (response.data === true) {
        appDispatch({ type: "successToast", data: "New Task is created." })
        fetchTasks()
      } else if (response.data === "A100") {
        appDispatch({ type: "loggedOut" })
        appDispatch({ type: "errorToast", data: "Token expired. You have been logged out." })
      } else {
        appDispatch({ type: "errorToast", data: "New Task not created. Please check input fields again." })
      }
    } catch (e) {
      console.log(e)
      appDispatch({ type: "errorToast", data: "Please contact an administrator." })
    }
  }

  useEffect(() => {
    getUsername()
  })

  return (
    <>
      <div className="input-group" style={{ width: "60vh" }}>
        <input id="taskName" placeholder="Task Name" className="form-control" type="text" />
        <button onClick={handleFastCreateTask} className="btn btn-secondary">
          Create Task
        </button>
      </div>
    </>
  )
}

export default CreateTask
