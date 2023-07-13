import React from "react";
import "../Profile/styles.css";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";
import { useAppselector } from "../../hooks/redux-hooks";
import { selectCurrentUser } from "../../store/slices/userSlice";

const Profile = () => {
  const user = useAppselector(selectCurrentUser);
  console.log("user", user);
  return (
    <div className="profileContainer">
      <HeaderNavigation />
      <div>
        <h1>Hello `${user.email}`</h1>
      </div>
    </div>
  );
};

export default Profile;
