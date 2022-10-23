import { Input } from ".";
import React from "react";
import { StoryTemplate } from "../../Helpers/StoryTemplate";
import { Field } from "../Field";

export default {
  title: "Input",
  component: Input,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Defalult = (args) => <Input {...args} />;
Defalult.args = {
  type: "text",
  placeholder: "Text something",
  value: "",
};

export const InputEmail = (args) => (
  <Field bottomSpacing id="email" label="Email">
    <Input id="email" {...args} />
  </Field>
);
InputEmail.args = {
  type: "email",
  placeholder: "Email",
  value: "",
};
