import React, { useContext, useEffect, useState } from "react"
import Axios from "axios"
import DispatchContext from "../../DispatchContext"
import CreateApplicationOC from "./CreateApplicationOC"

function CreateApplication() {
  const appDispatch = useContext(DispatchContext)
  const [appName, setAppName] = useState("")
  const [appRNum, setAppRNum] = useState("")
  const [buttonToggle, setButtonToggle] = useState(true)

  async function handleFastCreateApplication() {
    if (appName === "" || appRNum === "") {
      appDispatch({ type: "errorToast", data: "Please check input fields again." })
    } else {
      try {
        const [appDescription, appStartDate, appEndDate, appOpen, appToDo, appDoing, appDone] = [null, null, null, null, null, null, null, null]
        const response = await Axios.post("/tms/create_application", { appName, appRNum, appDescription, appStartDate, appEndDate, appOpen, appToDo, appDoing, appDone })
        if (response.data === true) {
          setAppName("")
          setAppRNum("0")
          appDispatch({ type: "successToast", data: "New Application is created." })
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
  }

  useEffect(() => {
    if (appName === "" && appRNum === "") {
      setButtonToggle(false)
    } else {
      setButtonToggle(true)
    }
  }, [appName, appRNum])

  return (
    <>
      <div className="d-flex justify-content-center" style={{ height: "10vh" }}>
        <div className="input-group mb-2" style={{ height: "5vh", width: "90vh" }}>
          <input onChange={e => setAppName(e.target.value)} value={appName} placeholder="New Application Name" type="text" className="form-control" />
          <input onChange={e => setAppRNum(e.target.value)} placeholder="Application R-Number" type="number" min="0" step="1" value={appRNum} className="form-control" />
          {buttonToggle ? (
            <button className="btn btn-primary" onClick={handleFastCreateApplication}>
              Create
            </button>
          ) : (
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#createAppFormOC">
              Create
            </button>
          )}
        </div>
      </div>
      <CreateApplicationOC />
    </>
  )
}

export default CreateApplication
