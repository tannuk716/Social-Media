import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import ProfileModal from '../ProfileModal/ProfileModal.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as UserApi from '../../api/UserRequest.js';
import { logOut } from '../../actions/AuthAction.jsx';

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;

  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };

    fetchProfileUser();
  }, [user]);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="flex flex-col gap-3 bg-[rgba(255,255,255,0.64)] p-4 rounded-2xl w-[90%]">
      <div className="flex justify-between items-center">
        <h4 className="text-base font-semibold">Profile Info</h4>

        {user._id === profileUserId ? (
          <div className="hover:cursor-pointer">
            <EditIcon width="2rem" height="1.2rem" onClick={() => setModalOpened(true)} />
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} data={user} />
          </div>
        ) : (
          ' '
        )}
      </div>

      <div className="flex flex-col text-sm gap-1">
        <span>
          <b>Status </b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>

      <div className="flex flex-col text-sm gap-1">
        <span>
          <b>Lives in </b>
        </span>
        <span>{profileUser.livesin}</span>
      </div>

      <div className="flex flex-col text-sm gap-1">
        <span>
          <b>Works at </b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>

      <button
        className="mt-24 self-end w-28 h-8 text-white font-medium rounded-md bg-gradient-to-r from-[#6674cc] to-[#9615db] hover:bg-transparent hover:text-[#9615db] border-2 border-transparent hover:border-[#9615db] transition-all"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default InfoCard;
