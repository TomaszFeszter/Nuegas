import { Switch } from ".";
import React from "react";
import { StoryTemplate } from "../../Helpers/StoryTemplate";
import { Field } from "../Field";

export default {
  title: "Switch",
  component: Switch,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Defalult = (args) => <Switch {...args} />;

export const SwitchWithLabel = (args) => (
  <Field switch id="switch" label="switch label" lHeight="3rem">
    <Switch id="switch" {...args} />
  </Field>
);
