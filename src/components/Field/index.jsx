import React from "react";
import styled from "styled-components";
import { Label } from "../Label";

const FieldComponent = ({
  className,
  children,
  label = "",
  id,
  fSize,
  fWeight,
  fColor,
  lHeight,
}) => {
  return (
    <div className={className}>
      <Label
        htmlFor={id}
        fontSize={fSize}
        fontWeight={fWeight}
        fontColor={fColor}
        lineHeight={lHeight}
      >
        {label}
      </Label>
      {children}
    </div>
  );
};

export const Field = styled(FieldComponent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding: ${(props) => props.padding && props.padding};
  label {
    padding-left: ${(props) => props.leftSpacing && "8rem"};
    padding-bottom: ${(props) => props.bottomSpacing && "2rem"};
  }
`;
