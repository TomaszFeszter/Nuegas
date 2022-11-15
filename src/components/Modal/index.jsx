import React from "react";
import { X } from "react-feather";
import styled from "styled-components";

const CloseButton = styled.span`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

const ModalComponent = ({ className, children, active, setActive }) => {
  return (
    <div className={className}>
      <div>
        <CloseButton onClick={() => setActive(!active)}>
          <X />
        </CloseButton>
        {children}
      </div>
    </div>
  );
};

export const Modal = styled(ModalComponent)`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background: ${(props) => `${props.theme.black}60`};
  ${(props) => !props.active && "display: none;"}

  & >div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    min-height: 6rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: relative;
    background: ${(props) => `${props.theme.white}`};
    border-radius: 1rem;
    padding: 2.4rem;
  }
`;
