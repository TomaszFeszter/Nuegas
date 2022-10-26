import React from "react";
import styled from "styled-components";
import { Avatar } from "../Avatar";

const AvatarListComponent = ({ className, imgList }) => {
  const lastestImgs = imgList.slice(-5);

  return (
    <div className={className}>
      {lastestImgs.map((src, index) => (
        <Avatar src={src} key={index} small border />
      ))}
    </div>
  );
};

export const AvatarList = styled(AvatarListComponent)`
  position: relative;
  width: 8.5rem;
  img {
    position: absolute;
    top: 50%;
    right: 8rem;
  }

  ${() => {
    let styles = "";

    for (let i = 1; i <= 5; i++) {
      styles += `
      img:nth-child(${6 - i}) {
        z-index: ${6 - i};
        transform: translate(${1.6 * (6 - i)}rem, -50%);
  }
      `;
    }

    return styles;
  }}
`;
