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
  ${(props) =>
    props.icon
      ? "flex-direction: row-reverse;  align-items: center; justify-content: start;"
      : "flex-direction: column;  align-items: flex-start; justify-content: center;"};
  position: relative;
  padding: ${(props) => props.padding && props.padding};
  label {
    ${(props) => props.icon && "padding-left: 0.8rem;"};
    ${(props) => props.switch && "padding-left: 8rem;"};
    ${(props) => props.checkbox && "padding-left: 3.4rem;"};
    ${(props) => props.input && "padding-bottom: 2rem;"};
  }
`;
