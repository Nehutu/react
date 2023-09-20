// import logo from './logo.svg';
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Profile } from "./components/Profile";
import { Messages } from "./components/Messages";
import { Settings } from "./components/Settings";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="nav flex-column nav-pills">
            <NavLink to="profile" className="nav-link">
              Profile
            </NavLink>
            <NavLink to="messages" className="nav-link">
              Messages
            </NavLink>
            <NavLink to="settings" className="nav-link">
              Settings
            </NavLink>
          </div>
        </div>
        <div className="col-md-9">
          <Routes>
            <Route
              path="/"
              element={
                <h3>This is your personal account. Use menu on the left.</h3>
              }
            />
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
