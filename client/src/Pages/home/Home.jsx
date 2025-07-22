import React from 'react';
import ProfileSide from '../../Components/profileSide/ProfileSide';
import PostSide from '../../Components/PostSide/PostSide';
import RightSide from '../../Components/RightSide/RightSide';

const Home = () => {
  return (
    <div className="relative grid grid-cols-1 gap-4 px-4 py-4
                    md:grid-cols-[18rem_auto_20rem] md:gap-4
                    w-full max-w-screen-2xl mx-auto">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
