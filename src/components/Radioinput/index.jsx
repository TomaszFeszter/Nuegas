import React from "react";
import { Field } from "../Field";
import styled from "styled-components";

const RadioInputComponent = ({
  className,
  id,
  name,
  values,
  label,
  padding,
  ...rest
}) => {
  return (
    <div className={className}>
      <Field label={label} padding={padding}>
        <section>
          {values.map((value, index) => {
            return (
              <Field
                id={id + (index + 1)}
                label={value.charAt(0).toUpperCase() + value.substr(1)}
                key={index}
                fWeight="500"
              >
                <input
                  type="radio"
                  id={id + (index + 1)}
                  name={name}
                  value={value}
                  {...rest}
                />
              </Field>
            );
          })}
        </section>
      </Field>
    </div>
  );
};
//całość inputa to labelka, radio jako checkbox schowany, kropka wyświetlana na afterze
export const RadioInput = styled(RadioInputComponent)`
  section {
    padding-top: 1.5rem;
    display: flex;

    div {
      min-width: 18.5rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: ${(props) => props.theme.white};
      border: ${(props) => `1px solid ${props.theme.light900}`};
      border-radius: 1rem;

      &:not(:last-child) {
        margin-right: 3.2rem;
      }

      label {
        width: 100%;
        padding: 1.5rem 2rem;
      }

      input {
        height: 5rem;
        width: 0;
        overflow: visible;
        position: absolute;
        right: 0;

        &::before {
          position: absolute;
          right: 2rem;
          top: 1.5rem;
          content: "";
          display: block;
          height: 1.6rem;
          width: 1.6rem;
          border: ${(props) => `2px solid ${props.theme.light900}`};
          border-radius: 1rem;
        }

        &:checked {
          &::before {
            border: ${(props) => `4px solid ${props.theme.blue500}`};
            height: 1.2rem;
            width: 1.2rem;
          }
        }
      }
    }
  }
`;
