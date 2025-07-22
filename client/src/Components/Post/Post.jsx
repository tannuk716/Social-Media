import React, { useState } from 'react';
import Comment from '../../Img/comment.png';
import Share from '../../Img/share.png';
import Like from '../../Img/like.png';
import Notlike from '../../Img/notlike.png';
import { useSelector } from 'react-redux';
import { likePost } from '../../api/PostRequest';

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-[rgba(255,255,255,0.64)] rounded-2xl">
      {/* Post image */}
      {data.image && (
        <img
          src={process.env.REACT_APP_PUBLIC_FOLDER + data.image}
          alt=""
          className="w-full max-h-[20rem] object-cover rounded-lg"
        />
      )}

      {/* Reactions */}
      <div className="flex items-start gap-6">
        <img
          src={liked ? Like : Notlike}
          alt="like"
          onClick={handleLike}
          className="cursor-pointer w-6 h-6"
        />
        <img src={Comment} alt="comment" className="w-6 h-6" />
        <img src={Share} alt="share" className="w-6 h-6" />
      </div>

      {/* Like count */}
      <span className="text-[14px] text-[rgba(36,45,73,0.65)]">{likes} likes</span>

      {/* Post details */}
      <div className="flex flex-col gap-1 text-sm">
        <span>
          <b>{data.name}</b>
        </span>
        <span>{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
