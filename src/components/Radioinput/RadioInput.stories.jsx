import { RadioInput } from ".";
import React from "react";
import { StoryTemplate } from "../../Helpers/StoryTemplate";

export default {
  title: "RadioInput",
  component: RadioInput,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Radio = (args) => <RadioInput {...args} />;

Radio.args = {
  id: "test",
  name: "testName",
  values: ["test1", "test2", "test3"],
  label: "Test radio inputs",
  padding: "1rem",
};
