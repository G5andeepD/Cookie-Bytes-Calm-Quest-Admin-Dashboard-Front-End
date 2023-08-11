
import { Routes, Route} from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/" element={<Login/>} />
    </Routes>
    

    </>
  )
}

export default App
