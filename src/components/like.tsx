import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./like.css";

interface Props {
  onClick: () => void;
}

const like = ({ onClick }: Props) => {
  const [clicked, setClicked] = useState(false);

  if (clicked)
    return (
      <button
        onClick={() => {
          onClick();
          setClicked(false);
        }}
        className="like-button"
      >
        <AiFillHeart color="f38181" size={60}></AiFillHeart>
      </button>
    );
  else
    return (
      <button
        onClick={() => {
          onClick();
          setClicked(true);
        }}
        className="like-button"
      >
        <AiOutlineHeart color="f38181" size={60}></AiOutlineHeart>
      </button>
    );
};

export default like;
