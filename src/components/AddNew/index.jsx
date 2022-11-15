import React from "react";
import { Delete } from "react-feather";
import { Btn } from "../Button";
import { Input } from "../Input";

export const AddNew = ({
  name,
  className,
  onChange,
  id,
  value = [],
  ...rest
}) => {
  return (
    <div className={className}>
      <input id={id} type="hidden" name={name} value={value} {...rest} />
      <ul>
        {value.map((input, indx) => {
          return (
            <li key={input.key}>
              <Input
                type="text"
                onChange={(e) => {
                  const newVal = [...value];
                  newVal[indx] = { ...input, value: e.target.value };
                  onChange(name, newVal);
                }}
              />
              <Btn
                onClick={(e) => {
                  e.preventDefault();
                  const newVal = [...value].filter(
                    (item) => item.key !== input.key
                  );
                  onChange(name, newVal);
                }}
              >
                <Delete />
              </Btn>
            </li>
          );
        })}
      </ul>
      <Btn
        type="button"
        onClick={(e) => {
          e.preventDefault();
          console.log(value);
          onChange(name, [...value, { value: "", key: Date.now() }]);
        }}
      >
        Add new
      </Btn>
    </div>
  );
};
