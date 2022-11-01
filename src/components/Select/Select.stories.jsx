import { action } from "@storybook/addon-actions";
import React from "react";
import { Select } from ".";
import { StoryTemplate } from "../../helpers/StoryTemplate";

export default {
  title: "Select",
  component: Select,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Default = (args) => <Select {...args} />;
Default.args = {
  options: ["English", "German", "French"],
  selectedOption: "English",
  changeSelectedOption: action("onChangeOption"),
};
