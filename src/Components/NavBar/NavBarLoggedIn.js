import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios"
import DispatchContext from "../../DispatchContext"

function NavBarLoggedIn() {
  const appDispatch = useContext(DispatchContext)
  const navigate = useNavigate()

  function handleLogout() {
    appDispatch({ type: "loggedOut" })
    appDispatch({ type: "successToast", data: "You have successfully logged out." })
    navigate("/")
  }

  const [isAdmin, setIsAdmin] = useState(false)
  const [username, setUsername] = useState("")

  async function checkGroup(group_name) {
    try {
      const response = await Axios.post(`/group/checkGroup`, { group_name })
      setIsAdmin(response.data)
    } catch (e) {
      console.log(e)
      appDispatch({ type: "errorToast", data: "Please contact an administrator." })
    }
  }

  async function getUsername() {
    try {
      const response = await Axios.get(`/user/getusername`)
      setUsername(response.data.username)
    } catch (e) {
      console.log(e)
      appDispatch({ type: "errorToast", data: "Please contact an administrator." })
    }
  }

  useEffect(() => {
    checkGroup("Admin")
    getUsername()
  })

  return (
    <>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li></li>
        <li>
          {isAdmin ? (
            <Link to="/main" className="nav-link px-2 text-white">
              User Management
            </Link>
          ) : (
            ""
          )}
        </li>
        <li>
          <Link to="/edit" className="nav-link px-2 text-white">
            Edit Profile
          </Link>
        </li>
      </ul>

      <div className="col-md-3 text-end pe-3">
        <div className="text-white d-inline pe-3">
          <div className="text-white d-inline pe-3">Hi! {username}</div>
        </div>
        <button onClick={handleLogout} className="btn btn-outline-primary me-2">
          Log Out
        </button>
      </div>
    </>
  )
}

export default NavBarLoggedIn
