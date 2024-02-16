import React from "react";
import ProfileForm from "../components/ProfileForm";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const profile = useSelector((state) => state.profile);

  return (
    <>
      <ProfileForm user={profile} />
    </>
  );
}

export default Profile;
