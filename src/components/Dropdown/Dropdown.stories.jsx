import { action } from "@storybook/addon-actions";
import React from "react";
import { Dropdown } from ".";
import { StoryTemplate } from "../../Helpers/StoryTemplate";

export default {
  title: "Dropdown",
  component: Dropdown,
  decorators: [
    (Story) => (
      <StoryTemplate>
        <Story />
      </StoryTemplate>
    ),
  ],
};

export const Default = (args) => <Dropdown {...args} />;
Default.args = {
  options: ["English", "German", "French"],
  selectedOption: "English",
  changeSelectedOption: action("onChangeOption"),
};
