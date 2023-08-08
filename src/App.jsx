
import { Routes, Route} from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    

    </>
  )
}

export default App
