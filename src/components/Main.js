import { Route, Routes } from "react-router-dom"
import People from "../pages/People"
import Show from "../pages/Show"

function Main() {
  return (
    <div className="main">
        <Routes>
            <Route path="/" element={<People />}/>
            <Route path="/:id" element={<Show />}/>
        </Routes>
    </div>
  )
}

export default Main