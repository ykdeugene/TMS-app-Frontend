import React, { useContext, useEffect, useState } from "react"
import Axios from "axios"
import DispatchContext from "../../DispatchContext"

function CreateApplicationOC() {
  const [appName, setAppName] = useState("")
  const [appRNum, setAppRNum] = useState(0)
  const [appDescription, setAppDescription] = useState("")
  const [appStartDate, setAppStartDate] = useState(null)
  const [appEndDate, setAppEndDate] = useState(null)
  const [appOpen, setAppOpen] = useState("")
  const [appToDo, setAppToDo] = useState("")
  const [appDoing, setAppDoing] = useState("")
  const [appDone, setAppDone] = useState("")
  const [groups, setGroups] = useState([])

  async function fetchGroups() {
    try {
      const response = await Axios.get(`/all_groups`)
      if (response.data === "A100") {
        appDispatch({ type: "loggedOut" })
        appDispatch({ type: "errorToast", data: "Token expired. You have been logged out." })
        return
      } else if (response.data === false) {
        appDispatch({ type: "errorToast", data: "Please contact an administrator." })
        return
      }
      setGroups(response.data)
    } catch (e) {
      console.log(e)
      appDispatch({ type: "errorToast", data: "Please contact an administrator." })
    }
  }

  const appDispatch = useContext(DispatchContext)

  async function handleSubmitCreateApplication() {
    if (appStartDate === "") {
      setAppStartDate(null)
    }
    if (appEndDate === "") {
      setAppEndDate(null)
    }
    try {
      const response = await Axios.post("/tms/create_application", { appName, appRNum, appDescription, appStartDate, appEndDate, appOpen, appToDo, appDoing, appDone })

      if (response.data === true) {
        appDispatch({ type: "successToast", data: "New Application is created." })
        setAppName("")
        setAppRNum(0)
        setAppDescription("")
        setAppStartDate(null)
        setAppEndDate(null)
        setAppOpen("")
        setAppToDo("")
        setAppDoing("")
        setAppDone("")
        document.getElementById("createAppplicationForm").reset()
      } else if (response.data === "A100") {
        appDispatch({ type: "loggedOut" })
        appDispatch({ type: "errorToast", data: "Token expired. You have been logged out." })
      } else {
        console.log(appStartDate, appEndDate)
        appDispatch({ type: "errorToast", data: "New Application not created. Please check input fields again." })
      }
    } catch (e) {
      console.log(e)
      appDispatch({ type: "errorToast", data: "Please contact an administrator." })
    }
  }

  useEffect(() => {
    fetchGroups()
  })

  return (
    <div className="offcanvas offcanvas-start" id="createAppFormOC" style={{ width: "70vh" }}>
      <div className="offcanvas-header pb-1">
        <h3 className="offcanvas-title">New Application</h3>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body pt-0">
        <form id="createAppplicationForm">
          <h5 className="offcanvas-title">Details</h5>
          <div className="d-flex justify-content-between">
            <div>
              <label htmlFor="applicationName" className="form-label mb-0 mt-1">
                Name
              </label>
              <input onChange={e => setAppName(e.target.value)} value={appName} type="text" className="form-control" id="applicationName" style={{ width: "35vh" }} />
            </div>
            <div>
              <label htmlFor="applicationRnumber" className="form-label mb-0 mt-1">
                R-number
              </label>
              <input onChange={e => setAppRNum(e.target.value)} value={appRNum} type="number" min="0" step="1" className="form-control" id="applicationRnumber" style={{ width: "20vh" }} />
            </div>
          </div>
          <div>
            <label htmlFor="applicationDescription" className="form-label mb-0 mt-1">
              Description
            </label>
            <textarea onChange={e => setAppDescription(e.target.value)} value={appDescription} type="text" className="form-control" id="applicationDescription" style={{ height: "15vh" }} />
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <label htmlFor="applicationStartDate" className="form-label mb-0 mt-1">
                Start Date
              </label>
              <input onChange={e => setAppStartDate(e.target.value)} type="date" className="form-control" id="applicationStartDate" style={{ width: "30vh" }} />
            </div>
            <div>
              <label htmlFor="applicationEndDate" className="form-label mb-0 mt-1">
                End Date
              </label>
              <input onChange={e => setAppEndDate(e.target.value)} type="date" className="form-control" id="applicationEndDate" style={{ width: "30vh" }} />
            </div>
          </div>
          <h5 className="offcanvas-title pt-2">Access Management</h5>
          <div className="d-flex justify-content-between">
            <div>
              <label htmlFor="Open" className="form-label mb-0 mt-1">
                Open
              </label>
              <select onChange={e => setAppOpen(e.target.value)} className="form-select" id="Open" style={{ width: "30vh" }}>
                <option value=""></option>
                {groups.map(group => {
                  return (
                    <option key={"open" + group.group_name} value={group.group_name}>
                      {group.group_name}
                    </option>
                  )
                })}
              </select>
            </div>
            <div>
              <label htmlFor="To-Do" className="form-label mb-0 mt-1">
                To-Do
              </label>
              <select onChange={e => setAppToDo(e.target.value)} className="form-select" id="To-Do" style={{ width: "30vh" }}>
                <option value=""></option>
                {groups.map(group => {
                  return (
                    <option key={"toDo" + group.group_name} value={group.group_name}>
                      {group.group_name}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <label htmlFor="Doing" className="form-label mb-0 mt-1">
                Doing
              </label>
              <select onChange={e => setAppDoing(e.target.value)} className="form-select" id="Doing" style={{ width: "30vh" }}>
                <option value=""></option>
                {groups.map(group => {
                  return (
                    <option key={"doing" + group.group_name} value={group.group_name}>
                      {group.group_name}
                    </option>
                  )
                })}
              </select>
            </div>
            <div>
              <label htmlFor="Done" className="form-label mb-0 mt-1">
                Done
              </label>
              <select onChange={e => setAppDone(e.target.value)} className="form-select" id="Done" style={{ width: "30vh" }}>
                <option value=""></option>
                {groups.map(group => {
                  return (
                    <option key={"done" + group.group_name} value={group.group_name}>
                      {group.group_name}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          <button onClick={handleSubmitCreateApplication} type="button" className="btn btn-primary mt-3" data-bs-dismiss="offcanvas">
            Create
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateApplicationOC
