import React, { useState, useContext } from "react"
import Axios from "axios"
import validator from "validator"
import { validatePassword } from "../../Utils/ValidatePassword"
import DispatchContext from "../../DispatchContext"

function CreateUsers({ setUserTable }) {
  const appDispatch = useContext(DispatchContext)
  // function for create user button
  // for creating new users
  const [c_username, setc_username] = useState("")
  const [c_password, setc_password] = useState("")
  const [c_email, setc_email] = useState("")

  async function handleCreateUser() {
    let email_checker = true
    if (c_email) {
      email_checker = validator.isEmail(c_email)
    }

    if (validator.isAlphanumeric(c_username) && validatePassword(c_password) && email_checker) {
      try {
        const response = await Axios.post("/user/create_user_admin", { c_username, c_password, c_email })
        if (response.data === true) {
          appDispatch({ type: "successToast", data: "New user is created." })
          setc_username("")
          setc_password("")
          setc_email("")
          setUserTable()
        } else if (response.data === "A100") {
          appDispatch({ type: "loggedOut" })
          appDispatch({ type: "errorToast", data: "Token expired. You have been logged out." })
        } else {
          appDispatch({ type: "errorToast", data: "User not created. Please check for duplicate username." })
        }
      } catch (e) {
        console.log(e)
        appDispatch({ type: "errorToast", data: "Please contact an administrator." })
      }
    } else {
      appDispatch({ type: "errorToast", data: "Please check input fields again." })
    }
  }

  return (
    <div>
      <h2 className="p-2">Create User</h2>
      <div className="col-10">
        <div className="input-group">
          <input onChange={e => setc_username(e.target.value)} value={c_username} placeholder="Username" name="username" type="text" className="form-control" />
          <input onChange={e => setc_password(e.target.value)} value={c_password} placeholder="Password" type="password" className="form-control" />
          <input onChange={e => setc_email(e.target.value)} value={c_email} placeholder="Email" type="text" className="form-control" />
          <button onClick={handleCreateUser} className="btn btn-primary" type="button">
            Create
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateUsers
