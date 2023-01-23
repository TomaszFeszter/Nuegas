import React from "react";
import { Delete } from "react-feather";
import styled from "styled-components";
import { Btn } from "../Button";
import { Input } from "../Input";
import { P1 } from "../Parahraphs";

const AddNewComponent = ({
  name,
  className,
  onChange,
  id,
  value = [],
  btn,
  ...rest
}) => {
  console.log(value);
  return (
    <div className={className}>
      <input id={id} type="hidden" name={name} value={value} {...rest} />
      <ul>
        {value.map((input, index) => {
          return (
            <li key={input.key}>
              <P1>{index + 1}.</P1>
              <Input
                type="text"
                onChange={(e) => {
                  const newVal = [...value];
                  newVal[index] = {
                    ...input,
                    value: e.target.value,
                  };
                  onChange(name, newVal);
                }}
                value={input["value"]}
              />
              <Btn
                onClick={(e) => {
                  e.preventDefault();
                  const newVal = [...value].filter(
                    (item) => item.key !== input.key
                  );
                  onChange(name, newVal);
                }}
                leftIcon={<Delete />}
              />
            </li>
          );
        })}
      </ul>
      <Btn
        type="button"
        onClick={(e) => {
          e.preventDefault();
          console.log(value);
          onChange(name, [
            ...value,
            { value: "", complete: false, key: Date.now() },
          ]);
        }}
      >
        {btn}
      </Btn>
    </div>
  );
};

export const AddNew = styled(AddNewComponent)`
  ul {
    li {
      position: relative;
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 3.4rem;
      }

      > p {
        position: absolute;
        z-index: 100;
      }

      input {
        margin-left: 4rem;
      }
    }
  }
`;
