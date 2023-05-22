import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EmployeeList from "./components/EmployeeList";
import EmployeePage from "./components/EmployeePage";
import Homepage from "./components/Homepage";
const employees = require("./models/Employees");

function App() {
  return (
    <div className="app">
      <div className="homepage">
        <Homepage></Homepage>
        <div className="header">
          <Header></Header>
        </div>
        <div className="search-bar">
          <SearchBar></SearchBar>
        </div>
        <div className="employee-list">
          <EmployeeList employees={employees}></EmployeeList>
        </div>
      </div>
      <div className="employee-page">
      <Routes>
            {employees.map((item, index) => (
              <Route
                key={index}
                path={`/${index}`}
                element={<EmployeePage index={index} employees={employees} />}
              />
            ))}
          </Routes>
      </div>
    </div>
  );
}

export default App;
