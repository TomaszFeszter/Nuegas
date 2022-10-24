import React from "react";
import styled from "styled-components";

const AvatarComponent = ({ className, src }) => {
  return (
    <figure className={className}>
      <img src={src} width="52" height="52" alt="" />
    </figure>
  );
};

export const Avatar = styled(AvatarComponent)`
  img {
    border-radius: 50%;
    ${(props) =>
      props.border
        ? `width: 4.9rem; height: 4.9rem; border: 1.5px solid ${props.theme.white}; `
        : "width: 5.2rem; height: 5.2rem;"};
    ${(props) =>
      props.border
        ? props.medium &&
          `width: 4.5rem; height: 4.5rem; border: 1.5px solid ${props.theme.white}; `
        : props.medium && "width: 4.8rem; height: 4.8rem;"};
    ${(props) =>
      props.border
        ? props.small &&
          `width: 2.1rem; height: 2.1rem; border: 1.5px solid ${props.theme.white}; `
        : props.small && "width: 2.4rem; height: 2.4rem;"};
  }
`;
