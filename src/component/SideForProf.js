import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

class SideActivity extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebarminiprofile">
          <div id="side-MiniProf2">
            <div id="notif">notif icon</div>
            <Link to="/Profile/Profile">
              <img src="assets/profile.png" id="sideProfile" alt=" " />
              <br />
              <div id="sideNameBlack">
                Emir Kharisma
                <div id="sideStatusBlack">online</div>
              </div>
            </Link>
          </div>
        </div>
        <div id="sideDash-none">
          <Link to="/Dashboard" id="SideMenu">
            <div>
              <img
                src="assets/Dashboard Icon.png"
                alt="dashboard-icon"
                id="SideIcon"
              />
              Dashboard
            </div>
          </Link>
        </div>

        <div id="sideDash-none">
          <Link to="/Activity" id="SideMenu">
            <div>
              <img
                src="assets/Activity Icon.png"
                alt="dashboard-icon"
                id="SideIcon"
              />
              Activity
            </div>
          </Link>
        </div>

        <div id="sideDash-none">
          <div id="SideMenu">
            <img
              src="assets/Help Icon.png"
              alt="dashboard-icon"
              id="SideIcon"
            />
            Help
          </div>
        </div>

        <div id="sideDash-none">
          <Link to="/" id="SideMenuLogout">
            <div>
              <img
                src="assets/Logout Icon.png"
                alt="dashboard-icon"
                id="SideIcon"
              />
              Logout
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default SideActivity;
