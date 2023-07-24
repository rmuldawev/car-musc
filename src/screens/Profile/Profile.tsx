import React, { useEffect, useState } from "react";
import "../Profile/styles.css";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";
import { useAppselector } from "../../hooks/redux-hooks";
import { selectCurrentUser } from "../../store/slices/userSlice";
import firebase from "firebase/app";
import "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { url } from "inspector";

interface DataForm {
  id: number;
  image: string;
  carName: string;
}

const Profile = () => {
  const user = useAppselector(selectCurrentUser);
  console.log("user", user);

  const [carsData, setCarsData] = useState<DataForm[]>([]);

  useEffect(() => {
    onSnapshot(collection(db, "cars"), (e: any) => {
      setCarsData(e.docs.map((e: any) => e.data()));
    });
  }, []);

  console.log("cars", carsData);

  return (
    <div className="profileContainer">
      <HeaderNavigation />
      <div>
        <p>Welcome, {user.email} </p>
        <div className="myGarage">
          {carsData.map((e) => {
            return (
              <div>
                <img src={e.image} alt="картинка" className="carStyleImage" />
                <p style={{ maxWidth: "250px", padding: "0 20px" }}>
                  {e.carName}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
