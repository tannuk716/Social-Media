import React, { useState } from 'react';
import Home from '../../Img/home.png';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Noti from '../../Img/noti.png';
import Comment from '../../Img/comment.png';
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';
import { Link } from 'react-router-dom';

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <div className="mt-4 flex justify-between">
        <Link to="../home">
          <img src={Home} alt="Home" className="w-8 h-8" />
        </Link>
        <SettingsOutlinedIcon className="w-6 h-6" />
        <img src={Noti} alt="Notifications" className="w-6 h-6" />
        <img src={Comment} alt="Comments" className="w-6 h-6" />
      </div>

      <TrendCard />

      <div
        className="button h-12 w-4/5 self-center flex items-center justify-center text-white bg-gradient-to-r from-[#6674cc] to-[#9615db] rounded-md cursor-pointer transition-all hover:bg-transparent hover:text-[#9615db] hover:border-2 hover:border-[#9615db]"
        onClick={() => setModalOpened(true)}
      >
        Share
      </div>

      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
