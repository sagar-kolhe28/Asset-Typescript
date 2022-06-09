import React, { useState, useEffect } from "react";
import "./style.css";
import apiClient from "../Interceptor/Interceptor";
import SideBar from "../constants/Sidebar";
// import Header from "../header/Header";
import AssetForm from "./AssetForm";
import AssetCard from "./AssetCard";

function Assets() {
  const phoneNumber: any = localStorage.getItem("phone_number");
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    // setLoading(true);
    const posts = {
      data: {},
    };
    apiClient
      .get(`Assets?phone_number=eq.${phoneNumber}&select=*`, posts)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log("error during loading dashboard", error);
      });
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="temp">
        {/* <h1>
          <Header heading="Assets" />
        </h1> */}
      </div>
      <div className="container-2">
        <div className="grid-container">
          {posts.map((post: any | string) => (
            <div key={post} className="grid-item">
              <AssetCard
                devicename={post.Device_Name}
                model={post.Model}
                serialnumber={post.Serial_No}
                issuedate={post.Issue_Date}
                phoneNumber={phoneNumber}
                getAssetList={fetchPosts}
              />
            </div>
          ))}
        </div>

        <div>
          <div className="form-info">
            <AssetForm getAssetList={fetchPosts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assets;
