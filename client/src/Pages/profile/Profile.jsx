import React from 'react';
import ProfilePageLeft from '../../Components/ProfilePageLeft/ProfilePageLeft';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import PostSide from '../../Components/PostSide/PostSide';
import RightSide from '../../Components/RightSide/RightSide';

const Profile = () => {
  return (
    <div className="relative grid grid-cols-1 gap-4 px-4 py-4
                    md:grid-cols-[18rem_auto_20rem] md:gap-4
                    w-full max-w-screen-2xl mx-auto">
      
      {/* Left Sidebar */}
      <ProfilePageLeft />

      {/* Center */}
      <div className="flex flex-col gap-4">
        <ProfileCard location="profilePage" />
        <PostSide />
      </div>

      {/* Right Sidebar */}
      <RightSide />
    </div>
  );
};

export default Profile;
