import React, { useContext, useEffect, useState } from "react"
import StateContext from "../StateContext"

function TMSMain() {
  const appState = useContext(StateContext)

  function caller() {
    console.log(appState)
  }

  return (
    <>
      <button onClick={caller}>BUG</button>
    </>
  )
}

export default TMSMain
