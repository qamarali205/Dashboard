import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
// import avatar from '../data/avatar.jpg';
import profilepic1 from '../data/profilepic1.jpg';
import profilepic2 from '../data/profilepic2.jpeg';
import profilepic3 from '../data/profilepic3.jpg';
import profilepic4 from '../data/profilepic4.jpg';
import { useState, useEffect} from 'react';
import {useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate();
  // const [username, setUsername] = useState("");
  const { currentColor } = useStateContext();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  let profilePic;
  

    const storedUsername = localStorage.getItem("username");
    
  

      if(storedUsername==="Hifzur Rehman"){
        profilePic = profilepic1
      }
      else if(storedUsername==="Qamar Ali"){
        profilePic =profilepic2;
      }
      else if(storedUsername==="Jayshree Pali"){
        profilePic = profilepic3;
      }
      else if(storedUsername==="Ashwini Talhan"){
        profilePic = profilepic4;
      }
      else{
        profilePic=profilepic1;
      }



  const handleLogout = () => {
    const confirmBox = window.confirm(
      "Do you really want to Logout?"
    )
    if (confirmBox === false) {
    }
    else{
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/");
    window.location.reload();
    }
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={profilePic}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> {storedUsername} </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  Administrator   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> info@admin.com </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5" style={{display:"flex",justifyContent:"center"}}>
        {/* <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
          onClick = {handleLogout}
          
          // onClick={handleLogout}
        /> */}
        <button onClick={handleLogout} style={{backgroundColor:"rgb(3, 201, 215)",color:"white", width:"90%", borderRadius:"5px"}} className="border-color border-b-1 p-3">Logout</button>
      </div>
    </div>

  );
};

export default UserProfile;