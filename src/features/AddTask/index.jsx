import React from "react";
import { Btn } from "../../components/Button";

export const AddTask = ({ className, value }) => {
  return (
    <div className={className}>
      <input type="hidden" value={value} />
      <Btn></Btn>
    </div>
  );
};
