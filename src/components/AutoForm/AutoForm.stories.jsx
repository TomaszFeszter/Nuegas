import { AutoForm } from ".";
import React from "react";
import { StoryTemplate } from "../../Helpers/StoryTemplate";
import schema from "./formSchema.json";
import { action } from "@storybook/addon-actions";
export default {
  title: "AutoForm",
  component: AutoForm,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Defalult = (args) => <AutoForm {...args} />;

Defalult.args = {
  schema: schema,
  onSubmit: action("onSubmit"),
};
