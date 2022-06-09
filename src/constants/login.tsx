import React, { useState } from "react";
// import PropTypes from "prop-types";
import { AnyAction, Dispatch } from "redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import apiClient from "../Interceptor/Interceptor";
import "./style.css";
import logo from "./../Icons/logo1.jpg";
import rightimg from "./../Icons/Path407.svg";
import middle from "./../Icons/Group 1470.svg";
import leftimg from "./../Icons/Path 627.svg";
import { connect } from "react-redux";
import { setUserInfoAction } from "../store/action/action";
// import store from "../store/index";

interface userData {
  setUserInfo?: any;
}

const LogIn = ({ setUserInfo }: userData) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userLogIn, setUserLogIn] = useState({
    phone_number: "",
    password: "",
  });
  const [records, setRecords] = useState<any>([]);

  const handdleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputData = e.target.name;
    const { value } = e.target;

    setUserLogIn({ ...userLogIn, [InputData]: value });
  };
  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    apiClient
      .get(
        `UserDetails?phone_number=eq.${userLogIn.phone_number}&password=eq.${userLogIn.password}&select=*`
      )
      .then((response) => {
        console.log(response.data);
        // console.log(store.getState());
        if (response.data.length > 0) {
          setUserInfo(response.data[0]);
          // console.log(store.getState());
          navigate("/DashBoard");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log("error in login", error);
      });

    const newData = {
      ...userLogIn,
      id: new Date().getTime().toString(),
    };
    setRecords([...records, newData]);
  };
  return (
    <div>
      <div className="container">
        <div className="row-0">
          <div className="logo-0">
            <img src={logo} alt="oops" className="logo-1" />
          </div>
          <div className="rightimg1">
            <img src={rightimg} alt="oops" className="topimg" />
          </div>
        </div>

        <div className="row-1">
          <div className="middleimg">
            <img src={middle} alt="oops" className="middleimg1" />
          </div>
          <div className="container-box">
            <div>
              <p className="line-1">Welcome to the </p>
            </div>
            <div>
              <p className="line-2">Employee Management System</p>
            </div>

            <div className="main_div">
              <form
                className="signup-form"
                action=""
                onSubmit={(e) => HandleSubmit(e)}
              >
                <div className="login-text">Login ID</div>
                <div className="username-box">
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="form-control"
                    pattern="[789][0-9]{9}"
                    value={userLogIn.phone_number}
                    onChange={handdleInput}
                    name="phone_number"
                    id="phone_number"
                  />
                </div>
                <div className="login-text">Password</div>
                <div className="username-box">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Enter correct Password"
                    required
                    value={userLogIn.password}
                    onChange={(e) => handdleInput(e)}
                    name="password"
                    id="password"
                  />
                </div>

                <div className="forgot-text">Forgot Your Password?</div>
                <div>
                  <button className="btn" type="submit">
                    <p className="btn-txt"> LogIn</p>
                  </button>
                </div>
              </form>

              {records.map(
                (currentRecord: { id: React.Key | null | undefined }) => {
                  const { PhoneNo, Password }: any = currentRecord;
                  return (
                    <div className="showData" key={currentRecord.id}>
                      <p>{PhoneNo}</p>
                      <p>{Password}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>

        <div className="row-2">
          <div className="bottomimg">
            <img src={leftimg} alt="oops" className="bottomimg" />
          </div>
        </div>
      </div>

      <div id="size" />
    </div>
  );
};
// LogIn.propTypes = {
//   history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
// };
function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    setUserInfo: (userInfo: string[]) => {
      dispatch(setUserInfoAction(userInfo));
    },
  };
}
export default connect(null, mapDispatchToProps)(LogIn);
