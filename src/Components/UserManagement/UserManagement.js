import React, { useEffect, useState, useContext } from "react"
import Axios from "axios"
import validator from "validator"
import { validatePassword } from "../../Utils/ValidatePassword"
import Select from "react-select"
import DispatchContext from "../../DispatchContext"
// Import sub-components
import CreateUsers from "./CreateUsers"
import CreateGroup from "./CreateGroups"

function UserManagement() {
  const appDispatch = useContext(DispatchContext)

  const [username, setUsername] = useState("")
  const [users, setUsers] = useState([])
  const [groups, setGroups] = useState([])
  const [groupList, setGroupList] = useState([])

  async function setUserTable() {
    // get group data
    try {
      const response = await Axios.get(`/groups`)
      const processedData = []
      response.data.groups.forEach(group => {
        const existingUser = processedData.find(user => user.username === group.username)

        if (existingUser) {
          // If the user already exists, add the current group name to their list of groups
          existingUser.group_name.push(group.group_name)
        } else {
          // If the user doesn't exist, create a new object for them and add their username and group name
          processedData.push({
            username: group.username,
            group_name: [group.group_name]
          })
        }
      })
      setGroupList(processedData[0].group_name)

      const for_options = []

      processedData.forEach(user => {
        const options = []
        user.group_name.forEach(group => {
          options.push({
            value: group,
            label: group,
            usernameInState: username,
            isFixed: group === "Admin" && (user.username === username || user.username === "admin0")
          })
        })
        for_options.push({ username: user.username, groups: options })
      })
      setGroups(for_options)
    } catch (e) {
      console.log(e)
      appDispatch({ type: "errorToast", data: "Please contact an administrator." })
    }
    // get users data
    try {
      const response = await Axios.get(`/users`)
      setUsers(response.data.users)
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
    getUsername()
    if (username !== "") {
      setUserTable()
    }
  }, [username])

  const styles = {
    multiValue: (base, state) => {
      return state.data.isFixed ? { ...base, backgroundColor: "gray" } : base
    },
    multiValueLabel: (base, state) => {
      return state.data.isFixed ? { ...base, fontWeight: "bold", color: "white", paddingRight: 6 } : base
    },
    multiValueRemove: (base, state) => {
      return state.data.isFixed ? { ...base, display: "none" } : base
    }
  }

  function defVal(user) {
    const group = groups.find(group => group.username === user)
    if (group) {
      return group.groups
    }
  }

  // function to update password
  async function handleUpdatePassword(u_password, u_username) {
    if (validatePassword(u_password)) {
      try {
        const response = await Axios.put("/user/update_password_admin", { u_password, u_username })
        console.log(response.data)
        if (response.data === true) {
          appDispatch({ type: "successToast", data: `password is updated for ${u_username}` })
        } else if (response.data === "A100") {
          appDispatch({ type: "loggedOut" })
          appDispatch({ type: "errorToast", data: "Token expired. You have been logged out." })
        } else {
          appDispatch({ type: "errorToast", data: "Please contact an administrator." })
        }
      } catch (e) {
        appDispatch({ type: "errorToast", data: "Please contact an administrator." })
      }
    } else {
      appDispatch({ type: "errorToast", data: "Password not updated. Check password again" })
    }
  }

  // function to update email
  async function handleUpdateEmail(u_email, u_username) {
    try {
      const response = await Axios.put("/user/update_email_admin", { u_email, u_username })
      if (response.data === true) {
        appDispatch({ type: "successToast", data: `Email is updated for ${u_username}` })
      } else if (response.data === "A100") {
        appDispatch({ type: "loggedOut" })
        appDispatch({ type: "errorToast", data: "Token expired. You have been logged out." })
      } else {
        appDispatch({ type: "errorToast", data: "Please contact an administrator." })
      }
    } catch (e) {
      appDispatch({ type: "errorToast", data: "Please contact an administrator." })
    }
  }

  // function to update active status
  async function handleUpdateActive(u_activestatus, u_username) {
    try {
      const response = await Axios.put("/user/update_activeStatus_admin", { u_activestatus, u_username })

      if (response.data === true) {
        if (u_activestatus) {
          appDispatch({ type: "successToast", data: `${u_username} has been activated.` })
        } else {
          appDispatch({ type: "successToast", data: `${u_username} has been deactivated` })
        }
      } else if (response.data === "A100") {
        appDispatch({ type: "loggedOut" })
        appDispatch({ type: "errorToast", data: "Token expired. You have been logged out." })
      } else {
        appDispatch({ type: "errorToast", data: "Please contact an administrator." })
      }
    } catch (e) {
      appDispatch({ type: "errorToast", data: "Please contact an administrator." })
    }
  }

  // function to add user to group
  async function handleGroupSelect(u_group_name, u_username) {
    try {
      const response = await Axios.post("/group/add_user_to_group_admin", { u_group_name, u_username })
      if (response.data === true) {
        appDispatch({ type: "successToast", data: `${u_username} has been added to ${u_group_name}` })
      } else if (response.data === "A100") {
        appDispatch({ type: "loggedOut" })
        appDispatch({ type: "errorToast", data: "Token expired. You have been logged out." })
      } else {
        appDispatch({ type: "errorToast", data: "Please contact an administrator." })
      }
    } catch (e) {
      appDispatch({ type: "errorToast", data: "Please contact an administrator." })
    }
  }

  // function to remove user from group
  async function handleGroupRemove(u_group_name, u_username) {
    try {
      const response = await Axios.post("/group/rmv_user_fr_group_admin", { u_group_name, u_username })
      if (response.data === true) {
        appDispatch({ type: "successToast", data: `${u_username} has been removed from ${u_group_name}` })
      } else if (response.data === "A100") {
        appDispatch({ type: "loggedOut" })
        appDispatch({ type: "errorToast", data: "Token expired. You have been logged out." })
      } else {
        appDispatch({ type: "errorToast", data: "Please contact an administrator." })
      }
    } catch (e) {
      appDispatch({ type: "errorToast", data: "Please contact an administrator." })
    }
  }

  // function to handle action type in group select
  function handleAction(a, change, u_username) {
    if (change.action === "select-option") {
      const u_group = change.option.value
      handleGroupSelect(u_group, u_username)
    } else if (change.action === "remove-value") {
      const u_group = change.removedValue.value
      handleGroupRemove(u_group, u_username)
    } else {
      appDispatch({ type: "errorToast", data: "Please contact an administrator." })
    }
  }

  return (
    <div>
      <div className="align-items-center justify-content-center m-5">
        <div className="d-flex">
          <CreateUsers setUserTable={setUserTable} />
          <CreateGroup setUserTable={setUserTable} />
          <div className="form-floating">
            <select style={{ height: "140px" }} className="form-select" multiple aria-label="multiple select example">
              {groupList.map(group => {
                return <option key={group}>{group}</option>
              })}
            </select>
            <label htmlFor="floatingTextarea2">Groups</label>
          </div>
        </div>
        {/* <br /> */}
        <hr className="rounded"></hr>
        {/* <br /> */}
        <div>
          <h2 className="d-flex">
            <div className="p-2">User Management</div>
          </h2>
        </div>
        {/* START user management table START */}
        <table id="userTable" className="table table-hover">
          <thead>
            <tr>
              <th className="col-2" scope="col">
                Username
              </th>
              <th className="col-2" scope="col" data-editable="true">
                Password
              </th>
              <th className="col-2" scope="col">
                Email
              </th>
              <th className="col-auto" scope="col">
                Groups
              </th>
              <th className="col-sm-2" scope="col">
                Active Status
              </th>
              {/* <th scope="col">Update</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              return (
                <tr key={user.username}>
                  {/* username here */}
                  <td className="col-md-auto">
                    <input className="form-control" type="text" value={user.username} readOnly disabled />
                  </td>
                  {/* password here */}
                  <td className="col-sm">
                    <div className="input-group mb-3">
                      <input
                        onBlur={e => {
                          handleUpdatePassword(e.target.value, user.username)
                          e.target.value = ""
                        }}
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </td>
                  {/* email here */}
                  <td className="col-md-auto">
                    <div className="input-group mb-3">
                      <input
                        onBlur={e => {
                          if (e.target.value !== user.email && validator.isEmail(e.target.value)) {
                            handleUpdateEmail(e.target.value, user.username)
                          } else {
                            e.target.value = user.email
                            appDispatch({ type: "errorToast", data: "Email not updated. Please check input again." })
                          }
                        }}
                        type="email"
                        className="form-control"
                        defaultValue={user.email}
                      />
                    </div>
                  </td>
                  {/* group here */}
                  <td className="col-md-2">
                    <Select
                      styles={styles}
                      id={`selection option ${user.username}`}
                      isClearable={false}
                      isMulti
                      options={groups[0].groups}
                      defaultValue={defVal(user.username)}
                      placeholder="No Groups Assigned"
                      onChange={(a, b) => {
                        handleAction(a, b, user.username)
                      }}
                    />
                  </td>
                  {/* active status here */}
                  <td style={{ paddingLeft: "30px", paddingTop: "15px" }}>
                    <input
                      onChange={e => {
                        handleUpdateActive(e.target.checked, user.username)
                      }}
                      type="checkbox"
                      defaultChecked={user.active_status}
                      disabled={user.username === "admin0" || user.username === username}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {/* END user management table END */}
      </div>
    </div>
  )
}

export default UserManagement
