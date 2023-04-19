import React from "react"

function PlanBar({ plans }) {
  return (
    <>
      <div className="d-flex align-items-center ms-3" style={{ height: "5vh" }}>
        {plans.map(plan => {
          return (
            <div className="d-flex align-items-center me-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={plan.Plan_colour} className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
              </svg>
              <div>{plan.Plan_MVP_name}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default PlanBar
