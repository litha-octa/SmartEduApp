import React, { Component } from "react";
import "../css/dashboard.css";
import { Link } from "react-router-dom";
import HeaderDash from "../component/HeaderDash";
import SideForDash from "../component/SideForDash";


class Dashboard extends Component {
  render() {
    return (
      <div id="body-dash">
        <HeaderDash />
        <SideForDash />
        <div className="container-dash">
          <div className="contentdash1">
            <div className="grid-item" id="dashnews">
              <box>
                <p className="dash-news">News</p>
                <img src="assets/Carousel.png" className="dash-news-pics" alt=" " />
              </box>
            </div>
            <div className="grid-item" id="schedule">
             <table className="table-schedule">
                <tr id="date">
                  <td colspan="7">
                    Today, October 16<img src="assets/Calendar Icon.png" className="calendar" alt=" " />
                  </td>
                </tr>
                <tr>
                  <td><div id="date-day">Mo<br />12</div></td>
                  <td><div id="date-day">Tu<br />13</div></td>
                  <td><div id="date-day">We<br />14</div></td>
                  <td><div id="date-day">Th<br />15</div></td>
                  <td><div id="select">Fr<br />16</div></td>
                  <td><div id="date-day">Sa<br />17</div></td>
                  <td><div id="date-day">Su<br />18</div></td>
                </tr>
                <tr>
                  <td colspan="7" id="time"><h5 className="h5-dash">All Schedule</h5></td>
                </tr>
                <tr>
                  <td colspan="7" id="time"><Link to="/dashMySchedule" className="link-foryou"><h5>For You</h5></Link></td>
                </tr>
                <tr>
                  <td colspan="7" id="time"><img src="assets/8.00.png" id="img" alt=" " /></td>
                </tr>
                <tr>
                  <td colspan="7" id="time"><img src="assets/d1fc.png" id="task1-pic" alt=" " /></td>
                </tr>
                <tr>
                  <td colspan="7" id="time"><img src="assets/11.00.png" id="img" alt=" " /></td>
                </tr>
                <tr>
                  <td colspan="7" id="time"><img src="assets/d1sc.png" id="task1-pic" alt=" " /></td>
                </tr>
                <tr>
                  <td colspan="7" id="time"><img src="assets/13.00.png" id="img" alt=" " /></td>
                </tr>
                <tr>
                  <td colspan="7" id="time"><img src="assets/d1tc.png" id="task1-pic" alt=" " /></td>
                </tr>
                <tr>
                  <td colspan="7" id="time"><img src="assets/finish.png" id="img" alt=" " /></td>
                </tr>
              </table>
            </div>
          </div>
          <div className="contentdash2">
            <div className="grid-item" id="grid3">
              <p className="mesagges">Mesagges</p>
              <div id="search-bar">
                <img src="assets/Search Icon.png" id="search-icon" alt=" " />
                <input type="text" placeholder="search" id="search-in-chats" />
              </div>
              <img src="assets/Nissa Sabyan.png" className="chats" alt=" " /><br />
              <img src="assets/Rio Dewanto.png" className="chats" alt=" " /><br />
              <img src="assets/Group 21.png" className="chats" alt=" " /><br />
              <img src="assets/Isyana Sarasvati.png" className="chats" alt=" " /><br />
              <img src="assets/Tompi.png" className="chats" alt=" " /><br />
              <img src="assets/MPC.png" className="chats" alt=" " /><br />
              <img src="assets/Peppy.png" className="chats" alt=" " /><br />
              <img src="assets/Sandra Dewi.png" className="chats" alt=" " /><br />
              <img src="assets/Reza Rahadian.png" className="chats" alt=" " /><br />
              <img src="assets/Group 23.png" className="chats" alt=" " /><br />
              <img src="assets/Raisa.png" className="chats" alt=" " /><br />
              <img src="assets/dr. Adrian.png" className="chats" alt=" " /><br />
              <img src="assets/Uus.png" className="chats" alt=" " /><br />

            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Dashboard;