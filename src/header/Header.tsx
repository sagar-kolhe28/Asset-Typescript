import React from "react";
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import "./style.css";
import userLogo from "../Icons/group1678.svg";
import bell from "../Icons/notifications_black_24dp.svg";

interface Props {
  userInfo: any;
}

const Header = ({ userInfo }: Props) => {
  return (
    <div className="header">
      <div className="container1">
        <div className="name1">{userInfo.name}</div>
        <div className="bellbox">
          <img src={bell} alt="oops" className="bell" />
        </div>

        <div className="userlogo">
          <img src={userLogo} alt="oops" className="logo-6" />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    userInfo: state.rootReducer.userInfo,
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {};
}

export default connect(mapStateToProps)(Header);
