import React from "react";
import { StoryTemplate } from "../../Helpers/StoryTemplate";
import { Field } from "../Field";
import { Input } from "../Input";

export default {
  title: "Field",
  component: Field,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Default = (args) => <Field {...args}></Field>;
Default.args = {
  id: "",
  label: "Field label",
  lHeight: "5rem",
  fSize: "2rem",
  fWeight: "500",
  fColor: "",
  children: <Input />,
};
