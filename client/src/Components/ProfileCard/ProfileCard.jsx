import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProfileCard = ({ location }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="rounded-[1.5rem] flex flex-col relative gap-4 bg-[rgba(255,255,255,0.64)] overflow-x-clip">
      
      {/* Profile Images */}
      <div className="flex flex-col items-center justify-center relative">
        <img
          src={user.coverPicture ? serverPublic + user.coverPicture : serverPublic + 'defaultCover.jpg'}
          alt=""
          className="w-full"
        />
        <img
          src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + 'defaultProfile.png'}
          alt=""
          className="w-24 rounded-full absolute bottom-[-3rem] shadow-[0px_4px_17px_2px_rgba(0,0,0,0.25)]"
        />
      </div>

      {/* Name & Title */}
      <div className="flex flex-col items-center mt-12 gap-[10px]">
        <span className="font-bold">
          {user.firstname} {user.lastname}
        </span>
        <span>{user.worksAt ? user.worksAt : 'write about yourself...'}</span>
      </div>

      {/* Follow Status */}
      <div className="flex flex-col items-center justify-center gap-3">
        <hr className="w-[85%] border border-gray-300" />
        <div className="flex items-center justify-around gap-4 w-[80%]">
          {/* Followers */}
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="font-bold">{user.followers.length}</span>
            <span className="text-black text-sm">Followers</span>
          </div>

          {/* Vertical Line */}
          <div className="border border-gray-300 h-[50px]" />

          {/* Following */}
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="font-bold">{user.following.length}</span>
            <span className="text-black text-sm">Following</span>
          </div>

          {/* Posts count (only on profile page) */}
          {location === 'profilePage' && (
            <>
              <div className="border border-gray-300 h-[50px]" />
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="font-bold">
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span className="text-black text-sm">Posts</span>
              </div>
            </>
          )}
        </div>
        <hr className="w-[85%] border border-gray-300" />
      </div>

      {/* Link to Profile */}
      {location !== 'profilePage' && (
        <span className="font-bold text-[var(--purplePain)] self-center mb-4 cursor-pointer">
          <Link to={`/profile/${user._id}`} className="no-underline text-inherit">
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
