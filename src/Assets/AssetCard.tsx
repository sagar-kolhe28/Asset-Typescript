import React, { useState } from "react";
import PropTypes from "prop-types";
import apiClient from "../Interceptor/Interceptor";
import laptop from "../Icons/Group 1604.svg";
import router from "../Icons/Group 1699.svg";
import mouse from "../Icons/Path 596.svg";
// import Assets from './Assets';

interface AssetCardProps {
  devicename: string;
  model: string;
  serialnumber: number;
  issuedate: any;
  getAssetList?: any;
}

function AssetCard({
  devicename,
  model,
  serialnumber,
  issuedate,
  getAssetList,
}: AssetCardProps) {
  const [openModel, setopenModel] = useState(false);
  const deleteAsset = (devicename: string) => {
    // const history = useHistory();
    apiClient
      .delete(`Assets?Device_Name=eq.${devicename}`)
      .then((response) => {
        console.log(response);
        // alert('Asset deleted sucessfully');
        getAssetList();
        // history.push({ pathname: '/Assets' });
      })
      .catch((error) => {
        console.log("error in deleting Asset record", error);
      });
  };

  const closeModal = () => {
    setopenModel(!openModel);
  };

  return (
    <>
      <div className="icons">
        {devicename === "laptop" && (
          <img src={laptop} alt="oops" className="logo-1" />
        )}
        {devicename === "router" && (
          <img src={router} alt="oops" className="logo-1" />
        )}
        {devicename === "mouse" && (
          <img src={mouse} alt="oops" className="logo-1" />
        )}

        {/* {
                    devicename === "laptop" ? <img src={laptop} alt="oops" className="logo-1" /> : devicename === "router" ? <img src={router} alt="oops" className="logo-1" /> : <img src={mouse} alt="oops" className="logo-1" />} */}
      </div>
      <div className="block-1">
        <div className="Dname"> Device Name </div>
        <div className="Dname1"> {devicename} </div>
      </div>
      <div className="block-2">
        <div className="Dname"> Model </div>
        <div className="Dname1"> {model} </div>
      </div>
      <div className="block-3">
        <div className="Dname"> Serial No </div>{" "}
        <div className="Dname1"> {serialnumber} </div>
      </div>
      <div className="block-4">
        <div className="Dname"> Issue Date </div>
        <div className="Dname1"> {issuedate} </div>
      </div>

      <button
        type="button"
        className="btn123"
        onClick={() => deleteAsset(devicename)}
      >
        Delete
      </button>
      <button
        type="button"
        className="btn1234"
        // eslint-disable-next-line react/no-unstable-nested-components
        onClick={() => setopenModel(!openModel)}
      >
        Edit
      </button>
    </>
  );
}
AssetCard.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
AssetCard.propTypes = {
  devicename: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
AssetCard.propTypes = {
  model: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
AssetCard.propTypes = {
  serialnumber: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
AssetCard.propTypes = {
  issuedate: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
AssetCard.propTypes = {
  getAssetList: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default AssetCard;
