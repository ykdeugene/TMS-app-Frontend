import React, { useContext, useState, useEffect } from "react"
import Axios from "axios"
import DispatchContext from "../../DispatchContext"

function PlanManager({ applicationName, fetchPlans, plans }) {
  const appDispatch = useContext(DispatchContext)
  const [table, setTable] = useState([])

  function setter() {
    setTable(plans)
  }

  function handleCloseCreatePlan() {
    var modal = document.getElementById("createPlanModal")
    var form = modal.querySelector("form")
    form.reset()
  }

  async function handleCreatePlan() {
    let planName = document.getElementById("createPlanName").value
    let planStartDate = document.getElementById("createStartDate").value
    let planEndDate = document.getElementById("createEndDate").value
    let planColour = document.getElementById("createPlanColor").value

    try {
      const response = await Axios.post(`/tms/create_plan`, { planName, planStartDate, planEndDate, planColour, applicationName })
      if (response.data === "A100") {
        appDispatch({ type: "loggedOut" })
        appDispatch({ type: "errorToast", data: "Token expired. You have been logged out." })
        return
      }

      if (response.data === true) {
        appDispatch({ type: "successToast", data: `${planName} is created.` })
        var modal = document.getElementById("createPlanModal")
        var form = modal.querySelector("form")
        form.reset()
        fetchPlans()
        return
      } else {
        appDispatch({ type: "errorToast", data: `Plan not created. Please check input fields.` })
        return
      }
    } catch (e) {
      console.log(e)
      appDispatch({ type: "errorToast", data: "Please contact an administrator. (handleCreatePlan catch(e))" })
    }
  }

  async function handleUpdatePlanStartDate(planName, planStartDate) {
    try {
      const response = await Axios.put(`/tms/update_plan_startDate`, { planName, planStartDate, applicationName })
      console.log(response.data)
      if (response.data === "A100") {
        appDispatch({ type: "loggedOut" })
        appDispatch({ type: "errorToast", data: "Token expired. You have been logged out." })
        return
      }

      if (response.data === true) {
        appDispatch({ type: "successToast", data: `${planName} start date updated.` })
        fetchPlans()
        return
      } else {
        appDispatch({ type: "errorToast", data: `No updates made to ${planName} start Date` })
        return
      }
    } catch (e) {
      console.log(e)
      appDispatch({ type: "errorToast", data: "Please contact an administrator. (handleUpdatePlanStartDate catch(e))" })
    }
  }

  async function handleUpdatePlanEndDate(planName, planEndDate) {
    try {
      const response = await Axios.put(`/tms/update_plan_endDate`, { planName, planEndDate, applicationName })
      console.log(response.data)
      if (response.data === "A100") {
        appDispatch({ type: "loggedOut" })
        appDispatch({ type: "errorToast", data: "Token expired. You have been logged out." })
        return
      }

      if (response.data === true) {
        appDispatch({ type: "successToast", data: `${planName} end date updated.` })
        fetchPlans()
        return
      } else {
        appDispatch({ type: "errorToast", data: `No updates made to ${planName} end Date` })
        return
      }
    } catch (e) {
      console.log(e)
      appDispatch({ type: "errorToast", data: "Please contact an administrator. (handleUpdatePlanEndDate catch(e))" })
    }
  }

  async function handleUpdatePlanColour(planName, planColour) {
    try {
      const response = await Axios.put(`/tms/update_plan_colour`, { planName, planColour, applicationName })
      if (response.data === "A100") {
        appDispatch({ type: "loggedOut" })
        appDispatch({ type: "errorToast", data: "Token expired. You have been logged out." })
        return
      }

      if (response.data === true) {
        appDispatch({ type: "successToast", data: `${planName} colour updated.` })
        fetchPlans()
        return
      } else {
        appDispatch({ type: "errorToast", data: `No updates made to ${planName} colour` })
        return
      }
    } catch (e) {
      console.log(e)
      appDispatch({ type: "errorToast", data: "Please contact an administrator. (handleUpdatePlanColour catch(e))" })
    }
  }

  return (
    <>
      <button onClick={setter} className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#createPlanModal">
        Plans
      </button>

      <div className="modal fade" id="createPlanModal" data-bs-backdrop="static" data-bs-keyboard="false">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <div className="d-flex justify-content-between">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  {applicationName}: Plan Management
                </h1>
              </div>
              <button onClick={handleCloseCreatePlan} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="createPlanForm">
                <h5 className="ms-1">Create Plan</h5>
                <div className="d-flex align-items-center justify-content-around">
                  <div className="input-group" style={{ width: "150vh" }}>
                    <div className="form-floating">
                      <input className="form-control" id="createPlanName" placeholder="Plan Name" type="text" />
                      <label htmlFor="createPlanName">Plan Name</label>
                    </div>
                    <div className="form-floating">
                      <input className="form-control" id="createStartDate" type="date" />
                      <label htmlFor="createStartDate">Start Date</label>
                    </div>
                    <div className="form-floating">
                      <input className="form-control" id="createEndDate" type="date" />
                      <label htmlFor="createEndDate">End Date</label>
                    </div>
                    <div className="form-floating">
                      <input className="form-control" id="createPlanColor" type="color" />
                      <label htmlFor="createPlanColor">Plan Color</label>
                    </div>
                  </div>
                  <button onClick={handleCloseCreatePlan} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Cancel
                  </button>
                  <button onClick={handleCreatePlan} className="btn btn-primary" type="button">
                    Confirm
                  </button>
                </div>
              </form>
            </div>
            <hr className="rounded p-0 m-1"></hr>
            <div className="overflow-auto " style={{ height: "60vh" }}>
              {table.map(plan => {
                return (
                  <div>
                    <div>
                      {plan.Plan_MVP_name}
                      {plan.Plan_startDate}
                      {plan.Plan_endDate}
                      {plan.Plan_colour}
                    </div>
                    <div className="input-group">
                      <input defaultValue={plan.Plan_MVP_name} id={plan.Plan_MVP_name} disabled type="text" className="form-control" />
                      <input defaultValue={plan.Plan_startDate} id={plan.Plan_startDate} type="date" className="form-control" />
                      <input defaultValue={plan.Plan_endDate} id={plan.Plan_endDate} type="date" className="form-control" />
                      <input defaultValue={plan.Plan_colour} id={plan.Plan_colour} type="color" className="form-control" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlanManager
