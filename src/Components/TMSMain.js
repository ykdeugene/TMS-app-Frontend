import React from "react"

function TMSMain() {
  return (
    // overflow-y-auto
    //   <div class="vr"></div>
    <div>
      <div className="d-flex justify-content-center" style={{ height: "10vh" }}>
        <div className="col-3">
          <div className="input-group mb-2">
            <input placeholder="New Application Name" type="text" className="form-control" />
            <button className="btn btn-primary" type="button">
              Create
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto d-flex flex-wrap align-items-center justify-content-center p-3" style={{ height: "82vh" }}>
        <div className="list-group col-2 p-1">
          <a className="d-flex list-group-item list-group-item-action" href="#scrollToKanBan">
            <div className="text-truncate me-auto">Application Name</div>
            <a href="edit application modal">
              <svg className="bi bi-wrench" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z" />
              </svg>
            </a>
          </a>
        </div>
      </div>
      <div id="scrollToKanBan" className="border" style={{ height: "8vh" }}></div>
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        <div className="card col m-1">
          <div className="card-header text-center">Open Tasks</div>
          {/* Task Card ===== From Here */}
          <div class="card text-center ms-2 me-2 mt-1">
            <hr class="m-0 rounded-top" style={{ height: "5px", backgroundColor: "#34eb49", border: "none" }} />
            <div class="card-header pt-1 pb-1">Task ID: Task Name</div>

            <div className="d-flex justify-content-between ps-5 pe-5">
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Task Card ===== To Here */}
          {/* Task Card ===== From Here */}
          <div class="card text-center ms-2 me-2 mt-1">
            <hr class="m-0 rounded-top" style={{ height: "5px", backgroundColor: "#34eb49", border: "none" }} />
            <div class="card-header pt-1 pb-1">Task ID: Task Name</div>

            <div className="d-flex justify-content-between ps-5 pe-5">
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Task Card ===== To Here */}
          {/* Task Card ===== From Here */}
          <div class="card text-center ms-2 me-2 mt-1">
            <hr class="m-0 rounded-top" style={{ height: "5px", backgroundColor: "#34eb49", border: "none" }} />
            <div class="card-header pt-1 pb-1">Task ID: Task Name</div>

            <div className="d-flex justify-content-between ps-5 pe-5">
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Task Card ===== To Here */}
          {/* Task Card ===== From Here */}
          <div class="card text-center ms-2 me-2 mt-1">
            <hr class="m-0 rounded-top" style={{ height: "5px", backgroundColor: "#34eb49", border: "none" }} />
            <div class="card-header pt-1 pb-1">Task ID: Task Name</div>

            <div className="d-flex justify-content-between ps-5 pe-5">
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Task Card ===== To Here */}
          {/* Task Card ===== From Here */}
          <div class="card text-center ms-2 me-2 mt-1">
            <hr class="m-0 rounded-top" style={{ height: "5px", backgroundColor: "#34eb49", border: "none" }} />
            <div class="card-header pt-1 pb-1">Task ID: Task Name</div>

            <div className="d-flex justify-content-between ps-5 pe-5">
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Task Card ===== To Here */}
          {/* Task Card ===== From Here */}
          <div class="card text-center ms-2 me-2 mt-1">
            <hr class="m-0 rounded-top" style={{ height: "5px", backgroundColor: "#34eb49", border: "none" }} />
            <div class="card-header pt-1 pb-1">Task ID: Task Name</div>

            <div className="d-flex justify-content-between ps-5 pe-5">
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Task Card ===== To Here */}
          {/* Task Card ===== From Here */}
          <div class="card text-center ms-2 me-2 mt-1">
            <hr class="m-0 rounded-top" style={{ height: "5px", backgroundColor: "#34eb49", border: "none" }} />
            <div class="card-header pt-1 pb-1">Task ID: Task Name</div>

            <div className="d-flex justify-content-between ps-5 pe-5">
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Task Card ===== To Here */}
          {/* Task Card ===== From Here */}
          <div class="card text-center ms-2 me-2 mt-1">
            <hr class="m-0 rounded-top" style={{ height: "5px", backgroundColor: "#34eb49", border: "none" }} />
            <div class="card-header pt-1 pb-1">Task ID: Task Name</div>

            <div className="d-flex justify-content-between ps-5 pe-5">
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Task Card ===== To Here */}
          {/* Task Card ===== From Here */}
          <div class="card text-center ms-2 me-2 mt-1">
            <hr class="m-0 rounded-top" style={{ height: "5px", backgroundColor: "#34eb49", border: "none" }} />
            <div class="card-header pt-1 pb-1">Task ID: Task Name</div>

            <div className="d-flex justify-content-between ps-5 pe-5">
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Task Card ===== To Here */}
          {/* Task Card ===== From Here */}
          <div class="card text-center ms-2 me-2 mt-1">
            <hr class="m-0 rounded-top" style={{ height: "5px", backgroundColor: "#34eb49", border: "none" }} />
            <div class="card-header pt-1 pb-1">Task ID: Task Name</div>

            <div className="d-flex justify-content-between ps-5 pe-5">
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </a>
              <a href="edit application modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Task Card ===== To Here */}
        </div>
        <div className="card col m-1">
          <div className="card-header text-center">To-do Tasks</div>
          {/* Task Card ===== From Here */}
          {/* Task Card ===== To Here */}
        </div>
        <div className="card col m-1">
          <div className="card-header text-center">Doing Tasks</div>
          {/* Task Card ===== From Here */}
          {/* Task Card ===== To Here */}
        </div>
        <div className="card col m-1">
          <div className="card-header text-center">Done Tasks</div>
          {/* Task Card ===== From Here */}
          {/* Task Card ===== To Here */}
        </div>
        <div className="card col m-1">
          <div className="card-header text-center">Closed Tasks</div>
          {/* Task Card ===== From Here */}
          {/* Task Card ===== To Here */}
        </div>
      </div>
      <div class="p-5"></div>
    </div>
  )
}

export default TMSMain
