import React, { useState, useRef } from 'react';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../actions/UploadAction';

const PostShare = () => {
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const dispatch = useDispatch();
  const desc = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const reset = () => {
    setImage(null);
    desc.current.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append('name', filename);
      data.append('file', image);

      newPost.image = filename;

      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }

    dispatch(uploadPost(newPost));
    reset();
  };

  return (
    <div className="flex gap-4 bg-[rgba(255,255,255,0.64)] p-4 rounded-2xl w-full">
      {/* User profile image */}
      <img
        src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + 'defaultProfile.png'
        }
        alt=""
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Post input & options */}
      <div className="flex flex-col gap-4 w-[90%]">
        <input
          type="text"
          placeholder="Write a caption..."
          required
          ref={desc}
          className="bg-[rgba(40,52,62,0.07)] rounded-[10px] p-2.5 text-[17px] outline-none border-none"
        />

        {/* Options */}
        <div className="flex justify-around flex-wrap gap-2 items-center">
          <div
            className="flex items-center gap-1 text-sm rounded-[10px] px-2 py-1 hover:cursor-pointer"
            style={{ color: 'var(--photo)' }}
            onClick={() => imageRef.current.click()}
          >
            <PhotoOutlinedIcon fontSize="small" />
            Photo
          </div>

          <div
            className="flex items-center gap-1 text-sm rounded-[10px] px-2 py-1 hover:cursor-pointer"
            style={{ color: 'var(--video)' }}
          >
            <PlayCircleOutlineIcon fontSize="small" />
            Video
          </div>

          <div
            className="flex items-center gap-1 text-sm rounded-[10px] px-2 py-1 hover:cursor-pointer"
            style={{ color: 'var(--location)' }}
          >
            <LocationOnOutlinedIcon fontSize="small" />
            Location
          </div>

          <div
            className="flex items-center gap-1 text-sm rounded-[10px] px-2 py-1 hover:cursor-pointer"
            style={{ color: 'var(--shedule)' }}
          >
            <CalendarMonthOutlinedIcon fontSize="small" />
            Shedule
          </div>

          <button
            className="ps-button bg-gradient-to-r from-[#6674cc] to-[#9615db] text-white text-sm px-5 py-1.5 rounded-md border-2 border-transparent transition-all hover:bg-transparent hover:text-[#9615db] hover:border-[#9615db]"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Share'}
          </button>

          {/* Hidden file input */}
          <div className="hidden">
            <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
          </div>
        </div>

        {/* Image preview */}
        {image && (
          <div className="relative">
            <CloseOutlinedIcon
              className="absolute top-2 right-4 cursor-pointer text-white z-10 bg-black/40 rounded-full p-1"
              onClick={() => setImage(null)}
            />
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
