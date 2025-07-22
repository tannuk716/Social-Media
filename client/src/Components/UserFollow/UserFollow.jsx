import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unFollowUser } from '../../actions/UserAction';

const UserFollow = ({ person }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [following, setFollowing] = useState(person.followers.includes(user._id));

  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleFollow = () => {
    following
      ? dispatch(unFollowUser(person._id, user))
      : dispatch(followUser(person._id, user));

    setFollowing((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-[10px]">
        <img
          src={
            person.profilePicture
              ? serverPublic + person.profilePicture
              : serverPublic + 'defaultProfile.png'
          }
          alt=""
          className="w-[3.2rem] h-[3.2rem] rounded-full object-cover"
        />
        <div className="flex flex-col items-start justify-center">
          <span className="font-bold">{person.firstname}</span>
          <span>@{person.firstname} {person.lastname}</span>
        </div>
      </div>

      <button
        className="h-8 px-[15px] bg-gradient-to-r from-[#6674cc] to-[#9615db] text-white rounded-md transition-all duration-150 hover:bg-transparent hover:text-[#9615db] border-2 border-transparent hover:border-[#9615db]"
        onClick={handleFollow}
      >
        {following ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default UserFollow;
