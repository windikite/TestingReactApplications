import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { StateProvider } from "./StateProvider";
import EditPost from "./components/EditPost";

function App() {
  return (
    <StateProvider>
      {/* <NavigationBar /> */}
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/edit-post' element={<EditPost />} />
      </Routes>
    </StateProvider>
  )
}

export default App
