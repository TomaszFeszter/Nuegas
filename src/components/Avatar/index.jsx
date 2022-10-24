import React from "react";
import styled from "styled-components";

const AvatarComponent = ({ className, src }) => {
  return <img className={className} src={src} width="52" height="52" alt="" />;
};

export const Avatar = styled(AvatarComponent)`
  border-radius: 50%;
  ${(props) => props.border && `border: 1.5px solid ${props.theme.white}; `};
  ${(props) =>
    props.border
      ? `width: 4.9rem; height: 4.9rem; `
      : "width: 5.2rem; height: 5.2rem;"};
  ${(props) =>
    props.border
      ? props.medium && `width: 4.5rem; height: 4.5rem; `
      : props.medium && "width: 4.8rem; height: 4.8rem;"};
  ${(props) =>
    props.border
      ? props.small && `width: 2.1rem; height: 2.1rem; `
      : props.small && "width: 2.4rem; height: 2.4rem;"};
`;
