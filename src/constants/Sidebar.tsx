/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../Icons/logo1.jpg";
import Dashboard from "../Icons/Path 558.svg";
import Pay from "../Icons/Path 413.svg";
import Reimbursement from "../Icons/Path 415.svg";
import Assets from "../Icons/Path 417.svg";
import Leaves from "../Icons/Path 418.svg";
import TaxDeclaration from "../Icons/Path 420.svg";
import ImportantDocuments from "../Icons/Path 423.svg";
import PendingDocuments from "../Icons/Path 422.svg";

function SideBar() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo-align">
          <img src={logo} alt="oops" className="logo-11" />
        </div>
        <div className="list1">
          <Link
            to="/DashBoard"
            className={
              window.location.pathname === "/DashBoard" ? "active" : ""
            }
          >
            {" "}
            <div
              className={
                window.location.pathname === "/DashBoard" ? "text" : "text2"
              }
            >
              {" "}
              <img src={Dashboard} alt="oops" className="icons-sidebar" />{" "}
              Dashboard{" "}
            </div>
          </Link>
          <Link
            to="/Pay"
            className={window.location.pathname === "/Pay" ? "active" : ""}
          >
            {" "}
            <div
              className={window.location.pathname === "/Pay" ? "text" : "text2"}
            >
              <img src={Pay} alt="oops" className="icons-sidebar" />
              Pay
            </div>
          </Link>
          <Link
            to="/Reimbursement"
            className={
              window.location.pathname === "/Reimbursement" ? "active" : ""
            }
          >
            {" "}
            <div
              className={
                window.location.pathname === "/Reimbursement" ? "text" : "text2"
              }
            >
              <img src={Reimbursement} alt="oops" className="icons-sidebar" />
              Reimbursement
            </div>
          </Link>
          <Link
            to="/Assets"
            className={window.location.pathname === "/Assets" ? "active" : ""}
          >
            <div
              className={
                window.location.pathname === "/Assets" ? "text" : "text2"
              }
            >
              <img src={Assets} alt="oops" className="icons-sidebar" />
              Assets
            </div>
          </Link>
          <Link
            to="/Leaves"
            className={window.location.pathname === "/Leaves" ? "active" : ""}
          >
            {" "}
            <div
              className={
                window.location.pathname === "/Leaves" ? "text" : "text2"
              }
            >
              <img src={Leaves} alt="oops" className="icons-sidebar" />
              Leaves
            </div>
          </Link>
          <Link
            to="/TaxDeclaration"
            className={
              window.location.pathname === "/TaxDeclaration" ? "active" : ""
            }
          >
            {" "}
            <div
              className={
                window.location.pathname === "/TaxDeclaration"
                  ? "text"
                  : "text2"
              }
            >
              <img src={TaxDeclaration} alt="oops" className="icons-sidebar" />
              Tax Declaration
            </div>
          </Link>
          <Link
            to="/ImportantDoc"
            className={
              window.location.pathname === "/ImportantDoc" ? "active" : ""
            }
          >
            {" "}
            <div
              className={
                window.location.pathname === "/ImportantDoc" ? "text" : "text2"
              }
            >
              <img
                src={ImportantDocuments}
                alt="oops"
                className="icons-sidebar"
              />
              Important Documents
            </div>
          </Link>
          <Link
            to="/PendingDoc"
            className={
              window.location.pathname === "/PendingDoc" ? "active" : ""
            }
          >
            {" "}
            <div
              className={
                window.location.pathname === "/PendingDoc" ? "text" : "text2"
              }
            >
              <img
                src={PendingDocuments}
                alt="oops"
                className="icons-sidebar"
              />
              Pending Documents
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
