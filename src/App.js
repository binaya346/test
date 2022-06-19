import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateSlots from "./Pages/createSlots";
import ListSlots from "./Pages/listSlots";
import "./App.css";
import Overview from "./Pages/overview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/list-slots" element={<ListSlots />} exact />
        <Route path="/create-slots" element={<CreateSlots />} exact />
        <Route path="/overview" element={<Overview />} exact />
        <Route path="/" element={<CreateSlots />} exact />
        {/* <Route path="*" component={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
