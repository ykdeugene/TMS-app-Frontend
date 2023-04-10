import React, { useState, useContext } from "react"
import Axios from "axios"
import DispatchContext from "../../DispatchContext"

function CreateGroup({ setUserTable }) {
  const appDispatch = useContext(DispatchContext)
  // for creating new group
  const [c_groupname, setc_groupname] = useState("")

  // function for create group button
  async function handleCreateGroup() {
    if (c_groupname !== "") {
      try {
        const new_group = c_groupname.trim()
        const response = await Axios.post("/group/create_group_admin", { new_group })
        if (response.data) {
          appDispatch({ type: "successToast", data: "New group is created." })
          setc_groupname("")
          setUserTable()
        }
      } catch (e) {
        appDispatch({ type: "errorToast", data: "Group is not created. Check for duplicate group name." })
      }
    }
  }

  return (
    <>
      <div>
        <h2 className="p-2">Create Group</h2>
        <div className="col-10">
          <div className="input-group">
            <input onChange={e => setc_groupname(e.target.value)} value={c_groupname} placeholder="Group Name" type="text" className="form-control" />
            <button onClick={handleCreateGroup} className="btn btn-primary" type="button">
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateGroup