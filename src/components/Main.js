import { Route, Routes } from "react-router-dom"
import People from "../pages/People"
import Show from "../pages/Show"
import Update from "../pages/Update"

function Main() {
  return (
    <div className="main">
        <Routes>
            <Route path="/" element={<People />}/>
            <Route path="/:id" element={<Show />}/>
            <Route path="/update/:id" element={<Update />}/>
        </Routes>
    </div>
  )
}

export default Main