import React from "react";
import styled from "styled-components";
import { P1 } from "../Parahraphs";

const IconLabelComponent = ({ className, icon, label }) => {
  return (
    <div className={className}>
      {icon}
      <P1>{label}</P1>
    </div>
  );
};

export const IconLabel = styled(IconLabelComponent)`
  display: flex;
  align-items: center;

  p {
    padding-left: 0.8rem;
  }
`;
